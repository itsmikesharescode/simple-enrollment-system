import { redirect, type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {ZodError, z} from "zod";
import { decryptMessage } from "$lib/Helpers/encryption";
import type { INTERACTION_COMMENTS_TB, INTERACTION_POST_TB } from "$lib/types";

const createPostSchema = z.object({
    studentPost: z.string().min(1, {message: "Message must not be empty."}).max(600, {message: "Max characters for creating post is 600."}),
});

const deletePostSchema = z.object({
    postReference: z.string()
})

const sendCommentSchema = z.object({
    comment: z.string().min(1, {message: "Comment must not be emtpy."}).max(600, {message: "Max characcters for commenting is 600."}),
    postReference: z.string(),
});

const showCommentSchema = z.object({
    isHide: z.string(),
    postReference: z.string(),
});

export const load: PageServerLoad = async ({locals: { checkAuth, supabase }}) => {
    const wru = await checkAuth();
    
    if(wru){
        const {whoareyou, session} = wru;
        
        const {data:getPosts, error:getPostsError} = await supabase.from("interaction_post_tb").select("*");
        return {session, getPosts};

        

    }else throw redirect(302, "/Login?You-have-to-Login");
};


export const actions: Actions = {
    
    createPost: async ({request, locals: {supabase, checkAuth, supabaseAdmin}}) =>
    {
        const formData = Object.fromEntries(await request.formData());
        const wru = await checkAuth();

        try {
            const result = createPostSchema.parse(formData);

            if(wru){
                const {whoareyou, session} = wru;
                const {user: {id, email}} = session;

                const {error: insertPostError} = await supabase.from("interaction_post_tb").insert([{
                    post_owner_id: id,
                    post_owner_email: email,
                    post_value: result.studentPost,
                }]);

                if(insertPostError) return fail(402, {msg: insertPostError.message});
                else {
                    const {data:getPosts, error:getPostsError} = await supabase.from("interaction_post_tb").select("*");
    
                    if(getPostsError) return fail(402, {msg: getPostsError.message});
                    else if(getPosts) return fail(200, {msg: "Post created successfully.", session, getPosts});
                };

            };

            
        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();

            return fail(403, {errors: fieldErrors});
        }
    },

    deletePost: async ({request, locals: {supabase, checkAuth}}) =>
    {

        const formData = Object.fromEntries(await request.formData());
        const wru = await checkAuth();
        try {
            const result = deletePostSchema.parse(formData);

            const postRef: INTERACTION_POST_TB = JSON.parse(decryptMessage(result.postReference));

            if(wru){
                const {whoareyou, session} = wru;
                const {user:{id, email}} = session;

                if(whoareyou === "it's student"){
                    const { error: deletePostError } = await supabase.from("interaction_post_tb").delete().match({post_owner_id: id, post_owner_email: email, id: postRef.id});

                    if(deletePostError) return fail(402, {msg: deletePostError.message});
                    else {
                        const {data:getPosts, error:getPostsError} = await supabase.from("interaction_post_tb").select("*");

                        if(getPostsError) return fail(402, {msg: getPostsError.message});
                        else if(getPosts) return fail(200 ,{msg: "Post deleted.", session, getPosts});
                    };

                }else console.log("you are admin")

            };

            
        } catch (error) {
            console.log(error);
        }
        
    },

    sendComment: async ({request, locals: {supabase, checkAuth}}) =>
    {
        const formData = Object.fromEntries(await request.formData());
        const wru = await checkAuth();

        try {
            const result = sendCommentSchema.parse(formData);

            if(wru){
                const {whoareyou, session} = wru;
                const postReference: INTERACTION_POST_TB = JSON.parse(decryptMessage(result.postReference));

                const { error:insertCommentError } = await supabase.from("interaction_comments_tb").insert([{
                    comment_owner_email: session.user.email,
                    comment_owner_id: session.user.id,
                    comment_value: result.comment,
                    post_id: postReference.id,
                }]);

                if(insertCommentError) return fail(402, {msg: insertCommentError.message});
                else {
                    const { data:getComments, error:getCommentsError} = await supabase.from("interaction_comments_tb").select("*").match({post_id: postReference.id});
                    if(getCommentsError) return fail(402, {msg: getCommentsError.message});
                    else if(getComments) return fail(200, {msg: `Success commented to ${postReference.post_owner_email} post.`, getComments, session});
                }   

            }

        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();
            return fail(403, {errors: fieldErrors});
        }
    },

    showComment: async ({request, locals: {supabase, checkAuth}}) =>
    {
        const formData = Object.fromEntries(await request.formData());
        const wru = await checkAuth();

        try {
            const result = showCommentSchema.parse(formData);
        
            if(wru){
                const {whoareyou, session} = wru;
                const postReference: INTERACTION_POST_TB = JSON.parse(decryptMessage(result.postReference));
                const isHide:boolean = JSON.parse(decryptMessage(result.isHide));
                
                if(isHide){
                    const {data:getComments, error:getCommentsError} = await supabase.from("interaction_comments_tb").select("*").match({post_id: postReference.id});

                    if(getCommentsError) return fail(402, {msg: getCommentsError.message});
                    else if(getComments) return fail(200, {msg: `${getComments.length ? `Reading comments for ${postReference.post_owner_email}` : "No comments found." }`, getComments, session});
                }else return fail(200, {msg: `Reading ${postReference.post_owner_email} comments done.`, session})
                
            }
            

        } catch (error) {
            const zodError = error as ZodError;
            const {fieldErrors} = zodError.flatten();

            return fail(403, {errors: fieldErrors});
        }
    },

    deleteComment: async ({request, locals: {supabase, checkAuth}}) =>
    {
        const formData = await request.formData();
        const wru = await checkAuth();
        
        if(wru){
            const {whoareyou, session} = wru;
            const commentReference: INTERACTION_COMMENTS_TB = JSON.parse(decryptMessage(formData.get("commentReference") as string));

            const { error:deleteCommentError } = await supabase.from("interaction_comments_tb").delete().match({id: commentReference.id});
            if(deleteCommentError) return fail(402, {msg: deleteCommentError.message});
            else{

                const {data:getComments, error:getCommentsError} = await supabase.from("interaction_comments_tb").select("*").match({post_id: commentReference.post_id});
                
                if(getCommentsError) return fail(402, {msg: getCommentsError.message});
                else if(getComments) return fail(200, {msg: "Comment deleted", session, getComments});
            }


        } 

    }   
};