<script lang="ts">
	import { enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import Button from "$lib/Components/Button.svelte";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import type { Session } from "@supabase/supabase-js";
	import type { SubmitFunction } from "@sveltejs/kit";
    import { createToast } from "$lib/Helpers/toaster";
	import { navState } from "$lib";
    
    const toastStore = getToastStore();

    type InputRegisterErrors = {
        fName: string[]
        mName: string[]
        lName: string[]
        email: string[]
        pws: string[]
        cPws: string[]
    };

    type SignUpNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            errors: InputRegisterErrors
        }
    };

    let inputErrors: InputRegisterErrors | null = null;
	let loader = false;

    const signUpNews: SubmitFunction = () => {

        loader = true;

        return async ({ result, update }) => {

            const {status, data: {session, msg, errors}} = result as SignUpNews;
                
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
    <form class="flex flex-col gap-4 p-4 sm:w-[400px] sm:mx-auto" method="POST" action="?/signUp" enctype="multipart/form-data" use:enhance={signUpNews}>
        <h1 class="h1 font-bold text-center">Register</h1>
        <p class="text-xs opacity-50 text-center font-bold">Register to Enrollment System</p>
        <label>
            <p class="text-sm">First Name:</p>
            <input name="fName" type="text" class="input text-sm rounded-xl" placeholder="Enter your first name." />
            {#each inputErrors?.fName ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Middle Name:</p>
            <input name="mName" type="text" class="input text-sm rounded-xl" placeholder="Enter your middle name." />
            {#each inputErrors?.mName ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Last Name:</p>
            <input name="lName" type="text" class="input text-sm rounded-xl" placeholder="Enter your last name." />
            {#each inputErrors?.lName ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Email:</p>
            <input name="email" type="email" class="input text-sm rounded-xl" placeholder="Enter your email." />
            {#each inputErrors?.email ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Password:</p>
            <input name="pws" type="password" class="input text-sm rounded-xl" placeholder="Enter your password." />
            {#each inputErrors?.pws ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Confirm Password:</p>
            <input name="cPws" type="password" class="input text-sm rounded-xl" placeholder="Confirm your password." />
            {#each inputErrors?.cPws ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <Button style="w-full p-3 bg-blue-500 rounded-lg text-white" name="Sign up" {loader} loader_name="Creating."/>
        
        <div class="flex flex-col gap-2 justify-center items-center mt-5">
            <p class="text-sm">Already have an account?</p>
            <button title="Clik, to login." type="button" class="max-w-fit mx-auto truncate text-sm text-blue-500 underline" on:click={() => goto("/Login")}>Log in</button>
        </div>
    </form>

    
</div>