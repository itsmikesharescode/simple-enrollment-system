import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { admissionSelection } from "$lib";
import type { AdmissionType } from "$lib/types";


export const load: PageServerLoad = async ({url, locals: {checkAuth}}) => {
    
    let admissionObject: AdmissionType | undefined;
    const wru = await checkAuth();

    admissionSelection.subscribe(item => {
        item.college.map(innerItem => {
            innerItem.courses.map(fItem => {
                fItem.url === url.pathname ? admissionObject = fItem : "";
            })
        })
    });

    if(admissionObject) return {admissionObject, wru,};
    
    throw new Error("This page not exist bro!")
};