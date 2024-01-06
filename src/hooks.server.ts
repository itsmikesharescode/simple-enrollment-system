import { createServerClient } from '@supabase/ssr';
import type { Session } from '@supabase/supabase-js';
import type { Handle } from '@sveltejs/kit';
import type { CookieSerializeOptions } from 'cookie';

const supabaseURL: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseKEY: string = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAdminKEY: string = import.meta.env.VITE_SUPABASE_ADMIN_KEY;

export const handle: Handle = async ({ event, resolve, }) => {

    event.locals.supabase = createServerClient(supabaseURL, supabaseKEY, {
        cookies: {
            get: (key) => event.cookies.get(key),
            set: (key, value, options ) => {
                event.cookies.set(key, value, options = { path: "/"} )
            },
            remove: (key, options ) => {
                event.cookies.delete(key, options = { path: "/"} )
            },
        },
    });

    event.locals.supabaseAdmin = createServerClient(supabaseURL, supabaseAdminKEY, {
        cookies: {
            get: (key) => event.cookies.get(key),
            set: (key, value, options ) => {
                event.cookies.set(key, value, options as CookieSerializeOptions & { path: string } )
            },
            remove: (key, options ) => {
                event.cookies.delete(key, options as CookieSerializeOptions & { path: string } )
            },
        },
        
    });

    event.locals.getSession = async () => {
        const {
        data: { session },
        } = await event.locals.supabase.auth.getSession()
        return session
    };

    event.locals.checkAuth = async () => {
        
        const session = await event.locals.getSession();
        
        const {cookies, locals: {supabase}} = event;
        if(session){
            let sessionCookie: Session | undefined;
    
            const cookie = cookies.get("sb-pafmguwdawntlwkrxtkx-auth-token");
    
            if(cookie){
    
                sessionCookie = JSON.parse(cookies.get("sb-pafmguwdawntlwkrxtkx-auth-token") as string);
                
                //check if the user is not doing hackerist thing if so he/she automatically kicked to the system back to login.
                const {data: {user} , error: userError} = await supabase.auth.getUser(sessionCookie?.access_token);
                if(user){
    
                    if(session.user.role ===  user.role){
                        if(user.role === "service_role") return {whoareyou: "it's admin", session};
                        else if(user.role === "authenticated") return {whoareyou: "it's student", session};

                    }else cookies.delete("sb-pafmguwdawntlwkrxtkx-auth-token", {path: "/"});

                }else if(userError) cookies.delete("sb-pafmguwdawntlwkrxtkx-auth-token", {path: "/"});
 
            };
        }else cookies.delete("sb-pafmguwdawntlwkrxtkx-auth-token", {path: "/"});
    };

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    });
}