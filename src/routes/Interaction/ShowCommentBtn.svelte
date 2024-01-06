<script lang="ts">
    import userImg from "$lib/Images/userImg.svg";
	import { enhance } from "$app/forms";
	import { interactionStore, navState, supabaseStore } from "$lib";
	import Button from "$lib/Components/Button.svelte";
	import { encryptMessage } from "$lib/Helpers/encryption";
	import { createToast } from "$lib/Helpers/toaster";
	import type { INTERACTION_COMMENTS_TB, INTERACTION_POST_TB } from "$lib/types";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import type { Session } from "@supabase/supabase-js";
	import type { SubmitFunction } from "@sveltejs/kit";

	import DeleteComment from "./DeleteComment.svelte";
	import { onMount } from "svelte";
	import { scale } from "svelte/transition";

    const toastStore = getToastStore();

    export let post: INTERACTION_POST_TB;

    let isHide = encryptMessage(JSON.stringify(true));
    let postReference = encryptMessage(JSON.stringify(post));
    let showComment = false;

    type InputCommmentError = {
        comment: string[]
    };

    type SendCommentNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            getComments: INTERACTION_COMMENTS_TB[]
            errors: InputCommmentError
            
        }
    }

    type ShowCommentNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            getComments: INTERACTION_COMMENTS_TB[]
            
        }
    }

    let inputErrors: InputCommmentError | null = null;
    let sendCommmentLoader = false;
    let showCommentLoader = false;
    let commentsArray: INTERACTION_COMMENTS_TB[] | null = null;
    let commentValue = "";

    let initialCommentCount = 0;

    const sendCommentNews: SubmitFunction = () => 
    {
        sendCommmentLoader = true;
        return async ({ result, update }) => {
            const {status, data: {session, msg, getComments, errors} } = result as SendCommentNews;
                
            switch (status) {
                case 200:
                    $navState.sessionState = session;
                    
                    commentsArray = getComments;
                    createToast(msg, false, toastStore);
                    sendCommmentLoader = false;
                    commentValue = "";
                    initialCommentCount = getComments.length
                    break;
                
                case 402:
                    createToast(msg, true, toastStore);
                    sendCommmentLoader = false;
                    break;
                
                case 403:
                    inputErrors = errors;
                    sendCommmentLoader = false;
                    break;

                default:
                    break;
            };
            await update();
        };
    };

    const showCommentNews: SubmitFunction = () => 
    {
        showCommentLoader = true;
        return async ({ result, update }) => {
            const {status, data: {session, msg, getComments} } = result as ShowCommentNews;
                
            switch (status) {
                case 200:

                    if(msg === `Reading ${post.post_owner_email} comments done.`){
                        $navState.sessionState = session;
                        createToast(msg, false, toastStore);
                        showCommentLoader = false;
                        isHide = encryptMessage(JSON.stringify(true));
                        break;
                    }

                    $navState.sessionState = session;
                    commentsArray = getComments;
                    initialCommentCount = getComments.length;
                    createToast(msg, false, toastStore);
                    showCommentLoader = false;
                    isHide = encryptMessage(JSON.stringify(false));
                    break;
                
                case 402:
                    createToast(msg, false, toastStore);
                    showCommentLoader = false;
                    break;
                
                case 403:
                    createToast("What are you doing step bro?", true, toastStore);
                    break;
                default:
                    break;
            };
            await update();
        };
    };

    const dispatchCollector = (e: CustomEvent) =>
    {
        commentsArray = e.detail as INTERACTION_COMMENTS_TB[];
        initialCommentCount = commentsArray.length
    }
    
    onMount( async () => {
        const { count, error } = await $supabaseStore.from("interaction_comments_tb").select("*", { count: 'exact', head: true }).match({post_id: post.id});
        if(count) initialCommentCount = count;
    })

</script>

<div class="flex gap-2 border-b-[0.1rem] border-r-[0.1rem] border-l-[0.1rem] border-slate-500 dark:bg-slate-700 " in:scale>
   
    <form method="POST" action="?/showComment" use:enhance={showCommentNews} class="w-full">
        <input name="isHide" type="hidden" class="hidden" bind:value={isHide} />
        <input name="postReference" type="hidden" class="hidden" value={postReference} />
    
        <Button title="Click, to see comments of {post.post_owner_email} post." style="w-full text-sm transition-all active:scale-95 p-2 hover:bg-slate-300 dark:hover:bg-slate-500 {showComment ? "bg-[#00000050] text-white" : ""} " name={showComment ? `Hide ${initialCommentCount > 1 ? "Commments" : "Comment"}` : `Read ${initialCommentCount} ${initialCommentCount > 1 ? "Comments" : "Commment"}`} on:click={() => showComment = !showComment} loader={showCommentLoader} loader_name="Loading.."/>
    </form>
</div>


 <!--Query Comments here-->
 {#if showComment}
    <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2 border-l-[0.1rem] border-red-500 ">
            {#each commentsArray ?? [] as comment }
                <div class="p-4 bg-slate-300 dark:bg-slate-800">
                    <div class="flex items-center gap-2">
                        <img loading="lazy" src={userImg} alt="" class="w-14 dark:bg-white rounded-full" />
                        <div class="flex flex-col truncate w-full">
                            <p class="text-sm font-bold">{comment.comment_owner_email}</p>
                            <p class="text-xs font-bold opacity-50">{comment.created_at}</p>
                        </div>
                        <!--Delete comment here-->
                        <div class="w-full flex flex-col items-end gap-4">
                            <p class="text-xs text-green-500 font-bold">Replied</p>
                            {#if comment.comment_owner_email === $navState.sessionState?.user.email}
                                <DeleteComment {comment} on:getComments={dispatchCollector} />
                            {/if}
                        </div>
                    </div>
                    <p class="text-sm">{comment.comment_value}</p>            
                </div>
            {/each}
            
        </div>
        
        <div class="">
            <form method="POST" action="?/sendComment" enctype="multipart/form-data" use:enhance={sendCommentNews} class="flex gap-2 items-center">
                <textarea name="comment" class="input rounded-lg text-sm" placeholder="Write a comment.." bind:value={commentValue}/>
                <input name="postReference" type="hidden" class="hidden" value={postReference} />
                <div class="">
                    <Button title="Click, to send comment." style="p-2 w-fit bg-green-500 rounded-lg text-white border-2 input" name="Send" loader={sendCommmentLoader} loader_name="Sending" />
                </div>
            </form>

            {#each inputErrors?.comment ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </div>
    </div>
{/if}

