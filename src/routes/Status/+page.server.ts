import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {ZodError, z} from "zod";

const updateSchema = z.object({
    presentAddress: z.string().min(1, {message: "Must enter a valid present address."}).max(80, {message: "Max character for present address is 80."}),
    religion: z.string().min(1, {message: "Enter a valid religion."}).max(40, {message: "Max character for religion is 40."}),
    mobileNumber: z.string().min(1, {message: "Enter a valid mobile number."}).max(14, {message: "Max character for mobile number is 14."}),
    dateOfBirth: z.string().min(1, {message: "Enter a valid date of birth."}).max(11, {message: "Max character for date of birth is 11 what are you doing?"}),
    fathersFname: z.string().min(1, {message: "Enter a valid father's first name."}).max(14, {message: "Max character for father's first name is 14."}),
    fathersMname: z.string().min(1, {message: "Enter a valid father's middle name."}).max(14, {message: "Max character for father's middle name is 14."}),
    fathersLname: z.string().min(1, {message: "Enter a valid father's last name."}).max(14, {message: "Max character for father's last name is 14."}),
    mothersFname: z.string().min(1, {message: "Enter a valid mother's first name."}).max(14, {message: "Max character for mother's first name is 14."}),
    mothersMname: z.string().min(1, {message: "Enter a valid mother's middle name."}).max(14, {message: "Max character for mother's middle name is 14."}),
    mothersLname: z.string().min(1, {message: "Enter a valid mother's last name."}).max(14, {message: "Max character for mother's last name is 14."}),
    primarySchoolName: z.string().min(1, {message: "Enter a valid primary school name."}).max(100, {message: "Max character for primary school name is 100."}),
    primarySchoolAddress: z.string().min(1, {message: "Enter a valid primary school address."}).max(100, {message: "Max character for primary school address is 100."}),
    primarySchoolGraduated: z.string().min(1, {message: "Enter a valid primary month and year graduated."}).max(20, {message: "Max character for primary month year graduated is 20."}),
    secondarySchoolName: z.string().min(1, {message: "Enter a valid secondary school name."}).max(100, {message: "Max character for secondary school name is 100."}),
    secondarySchoolAddress: z.string().min(1, {message: "Enter a valid secondary school address."}).max(100, {message: "Max character for secondary school address is 100."}),
    secondarySchoolGraduated: z.string().min(1, {message: "Enter a valid secondary month and year graduated."}).max(20, {message: "Max character for secondary month year graduated is 20."}),
});

const deleteSchema = z.object({
    inputCompar: z.string().refine(value => value === "Yes, i want to delete this application.", {message: "You must follow the instructions."})
});

export const load: PageServerLoad = async ({locals: {checkAuth, supabase}}) => {
    const wru = await checkAuth();
    
    if(wru){
        const {whoareyou, session} = wru;
        
        if(whoareyou === "it's admin") throw redirect(302, "/?Admins-Not-Allowed");
        else if(wru?.whoareyou === "it's student"){
            const { data:getApp, error:getAppError } = await supabase.from("student_application_tb").select("*").match({student_uid: session.user.id, student_email: session.user.email});

            if(getAppError) console.log(getAppError.message);
            else if(getApp) return {getApp, whoareyou, session};
            
        }else throw redirect(302, "/Login?You-have-to-login");

    }else throw redirect(302, "/Login?You-have-to-Login")

};

export const actions: Actions = {

    updateForm: async ({request, locals: {supabase, checkAuth}}) => 
    {
        const formData = Object.fromEntries(await request.formData());
        const wru = await checkAuth();

        try {
            const result = updateSchema.parse(formData);

            if(wru){
                const {whoareyou, session} = wru;
                const {user:{email, id}} = session;

                if(whoareyou === "it's student"){

                    const { error: updateError } = await supabase.from("student_application_tb").update([{

                        present_address: result.presentAddress,
                        religion: result.religion,
                        mobile_number: result.mobileNumber,
                        date_of_birth: result.dateOfBirth,
                        fathers_fullname: `${result.fathersLname}, ${result.fathersFname} ${result.fathersMname}`,
                        mothers_fullname: `${result.mothersLname}, ${result.mothersFname} ${result.mothersMname}`,
                        primary_school_name: result.primarySchoolName,
                        primary_school_address: result.primarySchoolAddress,
                        primary_school_year_grad: result.primarySchoolGraduated,
                        secondary_school_name: result.secondarySchoolName,
                        secondary_school_address: result.secondarySchoolAddress,
                        secondary_school_year_grad: result.secondarySchoolGraduated,

                    }]).match({student_uid: id, student_email: email})

                    if(updateError) return fail(402, {msg: updateError.message});
                    else {
                        const {data:getApp, error:getAppError} = await supabase.from("student_application_tb").select("*").match({student_uid: id, student_email: email});
                        console.log(getApp)
                        if(getAppError) return fail(402, {msg: getAppError.message});
                        else return fail(200, {msg: "Application Updated.", getApp: getApp[0], whoareyou, session});
                    };
                };
                
            };
            
        }catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();

            return fail(403, {errors: fieldErrors});
        };
    },

    deleteForm: async ({request, locals: {supabase, checkAuth}}) =>
    {
        const formData = Object.fromEntries(await request.formData());
        const wru = await checkAuth();

        try {
            const result = deleteSchema.parse(formData);

            if(wru){
                const {whoareyou, session} = wru;
                const {user:{id, email}} = session;
                if(whoareyou === "it's student"){

                    const {error:deleteError} = await supabase.from("student_application_tb").delete().match({student_uid: id, student_email: email});
                    if(deleteError) return fail(402, {msg: deleteError.message});
                    else return fail(200, {msg: "Application Deleted.", session})
                };

            };

        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();

            return fail(403, {errors: fieldErrors});
        };
    },
};