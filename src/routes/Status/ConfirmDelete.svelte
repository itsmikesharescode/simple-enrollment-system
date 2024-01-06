<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
    import { navState, statusStore } from "$lib";
	import { fly } from "svelte/transition";
	import { enhance } from "$app/forms";
	import type { SubmitFunction } from "@sveltejs/kit";
	import type { Session } from "@supabase/supabase-js";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { createToast } from "$lib/Helpers/toaster";

    const toastStore = getToastStore();

    type InputDeleteErrors = {
        inputCompar: string[]
    };

    type DeleteFormNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            errors: InputDeleteErrors
        }
    }

    let inputErrors: InputDeleteErrors | null = null;
    let showDeleteLoader = false;

    const deleteFormNews: SubmitFunction = () => {

        showDeleteLoader = true;

        return async ({ result, update }) => {
            const {status, data: {session, msg, errors} } = result as DeleteFormNews;
                
            switch (status) {
                case 200:
                    $navState.sessionState = session;
                    $statusStore.applicationState = null;
                    createToast(msg, false, toastStore);
                    showDeleteLoader = false;
                    $statusStore.showDelete = false;
                    break;
                
                case 402:
                    createToast(msg, false, toastStore);
                    showDeleteLoader = false;
                    break;
                
                case 403:
                    inputErrors = errors;
                    showDeleteLoader = false;
                    break;
                    
                default:
                    break;
            };
            await update();
        };
    };

    
</script>

<div class="fixed left-0 right-0 bottom-0 top-0 bg-[#00000050] z-10 p-4">

    <form method="POST" action="?/deleteForm" enctype="multipart/form-data" use:enhance={deleteFormNews} class=" bg-[#292d29] dark:bg-slate-500 mx-auto md:max-w-lg rounded-xl mt-[30dvh] text-white p-4 flex flex-col gap-2" in:fly={{y:-200, duration: 700}} out:fly={{y:200, duration: 700}}>
        <h3 class="h3 text-center">Delete  this application?</h3>
        <p class="text-center text-xs">Enter <b class="text-red-300">Yes, i want to delete this application.</b></p>
        
        <input name="inputCompar" type="text" class="input text-black dark:text-white text-xs rounded-lg" placeholder="Enter Yes, i want to delete this application." />
        {#each inputErrors?.inputCompar ?? [] as error }
            <p class="text-red-500 text-xs font-bold px-2">{error}</p>
        {/each}
        <div class="flex gap-2">
            <Button style="w-full p-2 bg-green-500 rounded-lg text-white" name="Cancel" on:click={() => $statusStore.showDelete = false}/>
            <Button style="w-full p-2 bg-red-500 rounded-lg text-white" name="Confirm" loader={showDeleteLoader} loader_name="Deleting."/>
        </div>
    </form>

</div>