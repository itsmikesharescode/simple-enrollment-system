import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({locals: {checkAuth}}) => {
    
    return await checkAuth();
};