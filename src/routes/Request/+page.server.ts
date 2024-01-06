import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({locals: {supabase, checkAuth}}) => {

    const wru = await checkAuth();

    if(wru){
        const {session, whoareyou} = wru;
        if(whoareyou !== "it's admin") throw redirect(302, "/Admission?Student-not-allowed");

        const {data:studentApplications, error:studentApplicationsError} = await supabase.from("student_application_tb").select("*");

        if(studentApplicationsError) console.log("Error at server load db", studentApplicationsError.message);
    
        else return {session, studentApplications};

    }else{
        throw redirect(302, "/Login?You-have-to-login")
    }
    

};