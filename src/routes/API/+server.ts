import { json, type RequestHandler } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ locals: {supabase} }) => {

    const {error:logoutError} = await supabase.auth.signOut();
    
    if(logoutError) return json({status: 402, msg: logoutError.message});

    return json({status: 200, msg: "Log out success."});
}