<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import Button from "$lib/Components/Button.svelte";
	import type { Session } from "@supabase/supabase-js";
    import { createToast } from "$lib/Helpers/toaster";
    import { getToastStore } from '@skeletonlabs/skeleton';
    import type { SubmitFunction } from "@sveltejs/kit";
	import { navState } from "$lib";

    const toastStore = getToastStore();
			
    let loader = false;

    type InputLoginErrors = {
        email: string[]
        password: string[]
    };

    type SignInNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            errors: InputLoginErrors
        }
    }

    let inputErrors: InputLoginErrors | null = null;

    const signInNews: SubmitFunction = () => {
        
        loader = true;

        return async ({ result, update }) => {
            const {status, data: {session, msg, errors}} = result as SignInNews;
                
            switch (status) {
                case 200:
                    $navState.sessionState = session;
                    createToast(msg, false, toastStore);
                    loader = false;
                    goto("/Admission");
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
                    break;
            };
            await update();
        };
    };

</script>

<div class="min-h-[100dvh] flex flex-col justify-center">

    <form class="flex flex-col gap-4 p-4 sm:w-[400px] sm:mx-auto" method="POST" action="?/signIn" enctype="multipart/form-data" use:enhance={signInNews}>
        <h1 class="h1 font-bold text-center">Login</h1>
        <p class="text-xs opacity-50 text-center font-bold">Login to Enrollment System</p>
        <label>
            <p class="text-sm">Email:</p>
            <input name="email" type="email" class="input text-sm rounded-xl" placeholder="Enter your email." />
            {#each inputErrors?.email ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>
        <label>
            <p class="text-sm">Password:</p>
            <input name="password" type="password" class="input text-sm rounded-xl" placeholder="Enter your password." />
            {#each inputErrors?.password ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <Button style="w-full p-3 bg-blue-500 rounded-lg text-white" name="Login" {loader} loader_name="Logging in." />

        <button title="Click, to recover your password via email." type="button" class="mt-5 max-w-fit mx-auto truncate text-sm text-blue-500 underline" on:click={() => goto("/Login?ResetPass")}>Forgot Password?</button>
        
        <div class="flex flex-col gap-2 justify-center items-center mt-5">
            <p class="text-sm">Don't have an account yet?</p>
            <button title="Clik, to create your account." type="button" class="max-w-fit mx-auto truncate text-sm text-blue-500 underline" on:click={() => goto("/Login?Register")}>Create Account</button>
        </div>
    </form>

    
</div>