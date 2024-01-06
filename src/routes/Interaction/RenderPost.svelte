<script lang="ts">
    import userImg from "$lib/Images/userImg.svg";
	import Button from "$lib/Components/Button.svelte";
	import type { INTERACTION_POST_TB } from "$lib/types";

	import ShowCommentBtn from "./ShowCommentBtn.svelte";
	import { interactionStore, navState } from "$lib";
	import { scale } from "svelte/transition";
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { encryptMessage } from "$lib/Helpers/encryption";
	import type { Session } from "@supabase/supabase-js";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { createToast } from "$lib/Helpers/toaster";
	
    const toastStore = getToastStore();

    export let post: INTERACTION_POST_TB;

    const postReference = encryptMessage(JSON.stringify(post));

    let showConfirmDelete = false;
    let deleteLoader = false;

    type DeletePostNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            getPosts: INTERACTION_POST_TB[]
        }
    }

    const deletePostNews: SubmitFunction = () => 
    {
        deleteLoader = true;
        return async ({ result, update }) => {
            const {status, data: {session, msg, getPosts} } = result as DeletePostNews;
                
            switch (status) {
                case 200:
                    $navState.sessionState = session;
                    $interactionStore.createdPostArray = getPosts;
                    deleteLoader = false;
                    showConfirmDelete = false;
                    createToast(msg, false, toastStore);
                    break;
                
                case 402:
                    createToast(msg, true, toastStore);
                    deleteLoader = false;
                    break;
                
                case 403:
                    break;
                default:
                    break;
            };
            await update();
        };
    };

</script>

<div class="flex flex-col">

    
    {#if showConfirmDelete}

        <div class="p-2 border-[0.1rem]  border-slate-500 dark:bg-slate-700 rounded-t-xl flex flex-col gap-2" in:scale >

            <p class="text-center font-bold text-sm">Do you want to delete this post?</p>

            <div class="flex gap-2">

                <div class="w-full">
                    <Button style="w-full p-2 bg-green-500 rounded-lg text-white" name="No" on:click={() => showConfirmDelete = false}/>
                </div>
                
                <form method="POST" action="?/deletePost" enctype="multipart/form-data" use:enhance={deletePostNews} class="w-full">
                    <input name="postReference" type="hidden" class="hidden" value={postReference} />
                    <Button style="w-full p-2 bg-red-500 rounded-lg text-white" name="Yes" loader={deleteLoader} loader_name="Deleting." />
                </form>
                
            </div>

        </div>

    {:else}
        <div class="p-2 border-t-[0.1rem] border-r-[0.1rem] border-l-[0.1rem]  border-slate-500 dark:bg-slate-700 rounded-t-xl flex flex-col gap-2" in:scale >
            <div class="flex items-center gap-2">
                <img loading="lazy" src={userImg} alt="" class="w-14 dark:bg-white rounded-full" />
                <div class="flex flex-col truncate w-full">
                    <p class="text-sm font-bold">{post.post_owner_email}</p>
                    <p class="text-xs font-bold opacity-50">{post.created_at}</p>
                </div>

                {#if $navState.sessionState?.user.email === post.post_owner_email}
                    <Button title="Delete this post?" style="p-2 bg-red-500 rounded-lg text-white" name="Delete" on:click={() => showConfirmDelete = true}/>
                {/if}
            </div>
            <p class="text-sm">{post.post_value}</p>
        
        </div>

        
        <ShowCommentBtn {post}  />
    {/if}
     
    
        
</div>