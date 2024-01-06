<script lang="ts">
	import { enhance } from "$app/forms";
	import Button from "$lib/Components/Button.svelte";
	import type { SubmitFunction } from "@sveltejs/kit";
    import { goto } from "$app/navigation";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { createToast } from "$lib/Helpers/toaster";

    const toastStore = getToastStore();

    type InputResetErrors = {
        email: string[]
    }

    type ResetPassNews = {
        status: number
        type: string
        data: {
            msg: string
            errors: InputResetErrors
        }
    }

    let inputErrors: InputResetErrors | null = null;

    let loader = false;

    const resetPassNews: SubmitFunction = () => {
        loader = true;
        return async ({ result, update }) => {
            const {status, data: {msg, errors}} = result as ResetPassNews;
                
            switch (status) {
                case 200:
                    createToast(msg, false, toastStore);
                    loader = false;
                    break;
                
                case 402:
                    createToast(msg, true, toastStore);
                    loader = false;
                    break;
                
                case 403:
                    inputErrors = errors;
                    loader = false;
                    break;

                default:
                    loader = false;
                    break;
            };
            await update();
        };
    };

</script>

<div class="min-h-[100dvh] flex flex-col justify-center">

    <form class="flex flex-col gap-4 p-4 sm:w-[400px] sm:mx-auto" method="POST" action="?/resetPass" enctype="multipart/form-data" use:enhance={resetPassNews}>
        <h1 class="h2 font-bold text-center truncate">Forgot Password</h1>
        <p class="text-xs opacity-50 text-center font-bold">Recover Password to Enrollment System</p>
        <label>
            <p class="text-sm">Email:</p>
            <input name="email" type="email" class="input text-sm rounded-xl" placeholder="Enter your email." />
            {#each inputErrors?.email ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>
       
        <Button style="w-full p-3 bg-blue-500 rounded-lg text-white" name="Send Reset Link" {loader} loader_name="Sending." />
     
        <div class="flex flex-col gap-2 justify-center items-center mt-5">
            <p class="text-sm">Got your account recovered?</p>
            <button title="Clik, to log in your account." type="button" class="max-w-fit mx-auto truncate text-sm text-blue-500 underline" on:click={() => goto("/Login")}>Log in</button>
        </div>
    </form>

    
</div>