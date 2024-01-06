import { fail, redirect, type Actions } from "@sveltejs/kit";

import {ZodError, z} from "zod";
import type { PageServerLoad } from "./$types";

const loginSchema = z.object({
    email: z.string().email({message: "Must enter a valid email."}),
    password: z.string().min(1, {message: "Must enter a password."}),
});

const signUpSchema = z.object({
    fName: z.string().min(1, {message: "Enter a valid first name."}).max(16, {message: "Max character is 16."}),
    mName: z.string().min(1, {message: "Enter a valid middle name."}).max(16, {message: "Max character is 16."}),
    lName: z.string().min(1, {message: "Enter a valid last name."}).max(16, {message: "Max character is 16."}),

    email: z.string().email({message: "Enter a valid email."}),

    pws: z.string().min(8, {message: "Enter a strong password."}).max(24, {message: "Max character is 24"}),
    cPws: z.string().min(1, {message: "Must confirm your password."})
});

const resetPassSchema = z.object({
    email: z.string().email({message: "Enter a valid email."})
})

export const load: PageServerLoad = async ({locals: {checkAuth}}) => {
    
    const whoareyou = await checkAuth();
    if(whoareyou?.whoareyou === "it's admin") throw redirect(302, "/Admin?Interaction");
    else if(whoareyou?.whoareyou === "it's student") throw redirect(302, "/Interaction");

    return await checkAuth();
    
};

export const actions: Actions = {

    signIn: async ({cookies, request, locals: {supabase, getSession}}) =>
    {
        const formData = Object.fromEntries(await request.formData());

        try {
            const result = loginSchema.parse(formData);

            const {email, password} = result;

            const {data:{session}, error:loginError} = await supabase.auth.signInWithPassword({email, password});
            if(session) return fail(200, {msg: "Login success.", session});
            else if(loginError) return fail(402, {msg: loginError.message});
            
        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();

            return fail(403, {errors: fieldErrors});
        }
    },

    signUp: async ({request, locals: { supabase }}) =>
    {
        
        const formData = Object.fromEntries(await request.formData());

        try {
            const result = signUpSchema.parse(formData);
            const {fName, mName, lName, email, pws, cPws} = result;

            if(pws === cPws){
                const {data:{session}, error:signUpError} = await supabase.auth.signUp({
                    email,
                    password: pws,
                    options: {
                        data: {
                            fname: `${lName}, ${fName} ${mName}`,
                            role: "RisCHtsMudISiVoCRe"
                        }
                    }
                });

                if(session){
                    
                    const { error:insertError } = await supabase.from("users_list").insert([{
                        uid: session.user.id,
                        email: session.user.email,
                    }]);

                    if(insertError) return fail(402, {msg: insertError.message});
                    else return fail(200, {msg: "Account Created", session})
                     
                }
                else if(signUpError) return fail(402, {msg: signUpError.message});

            }else return fail(402, {msg: "Password not same."});
            
            
        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();

            return fail(403, {errors: fieldErrors});
        }
    },

    resetPass: async ({request, locals: { supabase }}) =>
    {
        const formData = Object.fromEntries(await request.formData());

        try {
            const result = resetPassSchema.parse(formData);

            const { error:resetPwsError } = await supabase.auth.resetPasswordForEmail(result.email);
            if(resetPwsError) return fail(402, {msg: resetPwsError.message});
            else return fail(200, {msg: `We have sent an email in your email ${result.email} containing the password reset link. Kindly check your inbox or spam.`})

        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();

            return fail(403, {errors: fieldErrors});
        }
    },
};