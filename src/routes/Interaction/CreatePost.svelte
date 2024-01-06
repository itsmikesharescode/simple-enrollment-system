<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import { scale } from "svelte/transition";
    import { interactionStore, navState } from "$lib";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { enhance } from "$app/forms";
	import type { Session } from "@supabase/supabase-js";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { createToast } from "$lib/Helpers/toaster";
	import type { INTERACTION_POST_TB } from "$lib/types";

    const toastStore = getToastStore();

    let displayName = $navState.sessionState?.user.user_metadata.fname;
    let showCreatePost = false;
    let showCreateLoader = false;

    type InputCreateErrors = {
        studentPost: string[]
    }

    type CreatePostNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            getPosts: INTERACTION_POST_TB[]
            errors: InputCreateErrors
        }
    }

    let inputErrors: InputCreateErrors | null = null;

    const createPostNews: SubmitFunction = () => 
    {
        showCreateLoader = true;
        return async ({ result, update }) => {
            const {status, data: {session, msg, getPosts, errors}} = result as CreatePostNews;
                
            switch (status) {
                case 200:
                    $navState.sessionState = session;
                    $interactionStore.createdPostArray = getPosts;
                    createToast(msg, false, toastStore);
                    showCreateLoader = false;
                    showCreatePost = false;
                    break;
                
                case 402:
                    createToast(msg, true, toastStore);
                    showCreateLoader = false;
                    break;
                
                case 403:
                    inputErrors = errors;
                    showCreateLoader = false;
                    break;

                default:
                    break;
            };
            await update();
        };
    };
    

</script>

<div class="">
    <Button title="Click, to creaate post." style="w-full p-2 bg-blue-500 rounded-lg text-white" name="Create Post" on:click={() => showCreatePost = true} />
</div>

{#if showCreatePost}
    <div class="fixed bg-[#00000050] left-0 right-0 bottom-0 top-0 p-2 z-10">
        <form method="POST" action="?/createPost" enctype="multipart/form-data" use:enhance={createPostNews} class="bg-slate-300 dark:bg-slate-500 mx-auto md:max-w-xl mt-[5dvh] rounded-xl shadow-lg p-4 flex flex-col gap-2" transition:scale>
            <h3 class="h3 text-center">Create Post</h3>
            <textarea name="studentPost" class="textarea rounded-xl text-sm" placeholder="Say something.... {displayName}" />
            {#each inputErrors?.studentPost ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}

            <div class="flex gap-2">
                <Button type="button" title="Click, to cancel post." style="w-full p-2 bg-red-500 rounded-lg text-white" name="Cancel" on:click={() => showCreatePost = false}/>
                <Button title="Click, to publish your post." name="Post" loader={showCreateLoader} loader_name="Posting." />
            </div>
        </form>
    </div>
{/if}