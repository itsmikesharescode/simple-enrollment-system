<script lang="ts">
	import { enhance } from "$app/forms";
	import { navState } from "$lib";
	import Button from "$lib/Components/Button.svelte";
	import { encryptMessage } from "$lib/Helpers/encryption";
	import { createToast } from "$lib/Helpers/toaster";
	import type { INTERACTION_COMMENTS_TB, INTERACTION_POST_TB } from "$lib/types";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import type { Session } from "@supabase/supabase-js";
	import type { SubmitFunction } from "@sveltejs/kit";
    import { createEventDispatcher } from "svelte";

    const toastStore = getToastStore();

    export let comment: INTERACTION_COMMENTS_TB;

    let commentReference = encryptMessage(JSON.stringify(comment));


    type DeleteCommentNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            getComments: INTERACTION_COMMENTS_TB[]
        }
    }

    let deleteCommentLoader = false;

    const dispatch  = createEventDispatcher();

    const deleteCommentNews: SubmitFunction = () => 
    {
        deleteCommentLoader = true;
        return async ({ result, update }) => {
            const {status, data: {session, msg, getComments}} = result as DeleteCommentNews;
                
            switch (status) {
                case 200:
                    $navState.sessionState = session;
                    createToast(msg, false, toastStore);
                    deleteCommentLoader = false;
                    dispatch("getComments", getComments);
                    break;
                
                case 402:
                    createToast(msg, true, toastStore);
                    deleteCommentLoader = false;
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

<form method="POST" action="?/deleteComment" enctype="multipart/form-data" use:enhance={deleteCommentNews}>
    <input name="commentReference" type="hidden" class="hidden" value={commentReference}/>
    <Button title="Click to delete this comment." style="text-xs p-2 bg-red-500 rounded-lg text-white" name="Delete" loader={deleteCommentLoader} loader_name="Deleting." />
</form>

