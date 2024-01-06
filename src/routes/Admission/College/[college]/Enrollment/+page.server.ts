import type { Actions, PageServerLoad } from "../$types";
import { admissionSelection } from "$lib";
import type { AdmissionType } from "$lib/types";
import { fail, redirect } from "@sveltejs/kit";
import {ZodError, z} from "zod";
import { decryptMessage } from "$lib/Helpers/encryption";

const submitFormSchema = z.object({
    course: z.string(),
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
})

export const load: PageServerLoad = async ({url, cookies, locals: {checkAuth, supabase}}) => {
    
    const wru = await checkAuth();
    const mutatedURL = url.pathname.split("/Enrollment").join("");
    let matchedObject: AdmissionType | undefined;

    admissionSelection.subscribe(item => {
        item.college.map(innerItem => {
            innerItem.courses.map(fooItem => {
                fooItem.url === mutatedURL ? matchedObject = fooItem : "";
            });
        });
    });

    if(wru){
        const {whoareyou, session} = wru;
        
        if(whoareyou === "it's admin") throw redirect(302, "/Admission?Admins-Not-Allowed");
        else if(wru?.whoareyou === "it's student"){
            const {data, error: userCheckerError} = await supabase.from("student_application_tb").select("student_uid").eq("student_uid", session.user.id);

            if(data?.length) throw redirect(302, "/Status");
            else if(userCheckerError) console.log(userCheckerError.message);
            else{
                return {wru, matchedObject}
            };
            
        }else throw redirect(302, "/Login?You-have-to-login-to-enroll");

    }else throw redirect(302, "/Login?You-have-to-Login")
    
    
};

export const actions: Actions = {
    submitForm: async ({request, locals: {supabase, checkAuth}}) =>
    {
        const formData = Object.fromEntries(await request.formData());
        const wru = await checkAuth();
        try {
            const result = submitFormSchema.parse(formData);
            const {
                course,
                presentAddress,
                religion,
                mobileNumber,
                dateOfBirth,
                fathersFname,
                fathersMname,
                fathersLname,
                mothersFname,
                mothersMname,
                mothersLname,
                primarySchoolName,
                primarySchoolAddress,
                primarySchoolGraduated,
                secondarySchoolName,
                secondarySchoolAddress,
                secondarySchoolGraduated
            } = result;

            const cleanCourse = decryptMessage(course);
            
            if(wru){
                const {whoareyou, session} = wru;
                const {user:{email, id, user_metadata:{fname} }} = session;

                if(whoareyou === "it's student"){

                    const { error: insertApplicationError } = await supabase.from("student_application_tb").insert([{
                        app_type: "College Application Form",
                        course: cleanCourse,
                        fullname: fname,
                        present_address: presentAddress,
                        religion: religion,
                        mobile_number: mobileNumber,
                        date_of_birth: dateOfBirth,
                        fathers_fullname: `${fathersLname}, ${fathersFname} ${fathersMname}`,
                        mothers_fullname: `${mothersLname}, ${mothersFname} ${mothersMname}`,
                        primary_school_name: primarySchoolName,
                        primary_school_address: primarySchoolAddress,
                        primary_school_year_grad: primarySchoolGraduated,
                        secondary_school_name: secondarySchoolName,
                        secondary_school_address: secondarySchoolAddress,
                        secondary_school_year_grad: secondarySchoolGraduated,
                        student_uid: id,
                        student_email: email,
                    }]);
                    console.log(insertApplicationError?.message)
                    if(insertApplicationError) return fail(402, {msg: insertApplicationError.message});
                    else return fail(200, {msg: "Success your application is now on-going process.", session});
                }

            }else throw redirect(302, "/Login?Connection-Lost");
            
            

        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();
            return fail(403, {errors: fieldErrors});
        }
    }
};