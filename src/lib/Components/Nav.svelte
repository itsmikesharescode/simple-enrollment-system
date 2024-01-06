<script lang="ts">
	import { goto } from "$app/navigation";
    import { navState } from "$lib";
	import { getToastStore } from "@skeletonlabs/skeleton";
    import { createToast } from "$lib/Helpers/toaster";
	import Button from "./Button.svelte";

    const toastStore = getToastStore();

    let showMobileMenu = false;

    let logoutLoader = false;

    const logoutHandler = async () => {
        
        logoutLoader = true;
        const res = await fetch("/API", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const { msg } = await res.json() as { msg: string};

        if(msg){
            $navState.sessionState = null;
            createToast(msg, false, toastStore);
            logoutLoader = false;  
            showMobileMenu = false;
            goto("/Login?Thanks-For-Using-My-System");
            window.location.reload();
        };
        
    };

</script>

<nav class="bg-[#ffffff63] p-2 flex flex-row-reverse items-center">
    <button class="flex flex-col gap-1 p-2 md:hidden" on:click={() => showMobileMenu = true}>
        <div class="w-6 border-b-2 border-black dark:border-white"></div>
        <div class="w-6 border-b-2 border-black dark:border-white"></div>
        <div class="w-6 border-b-2 border-black dark:border-white"></div>
    </button>

    <div class="hidden md:flex w-full justify-end mr-5">
        {#if $navState.sessionState}
            <div class="flex gap-2">
                <p class="text-center text-sm my-2 font-bold opacity-50 truncate">Hello, {$navState.sessionState.user.email}</p>
                <Button title="Click, to log out." style=" p-2 bg-red-500 rounded-lg text-white" name="Log out" loader={logoutLoader} loader_name="Logging out." on:click={logoutHandler}  />
            </div>
        {:else}
            <div class="flex gap-2">
                <Button title="Click, to login." style="w-full p-2 bg-blue-800 rounded-lg text-white" name="Login" on:click={() => goto("/Login")}/>
                <Button title="Click, to register your account." style="w-full p-2 bg-green-500 rounded-lg text-white" name="Sign Up Free" on:click={() => goto("/Login?Register")} />
            </div>
        {/if}
    </div>

    <div class="hidden md:flex items-center p-2 w-full justify-center">
        {#each $navState.default as selection }
            <p>
                <a class="p-2 transition-all { $navState.activeItem === selection.url ? "bg-[#00000031] text-white rounded-xl" : "" }" href={selection.url}
                on:click={() => $navState.activeItem = selection.url}
                >{selection.title}</a>
            </p>
        {/each}
    </div>
    
</nav>

{#if showMobileMenu}
    <menu class="fixed top-0 bottom-0 w-full bg-[#00000050] z-10 md:hidden">
        
        <div class="bg-slate-400 dark:bg-slate-700 w-full fixed flex flex-col-reverse gap-6 justify-center items-center p-10">

            <div class="fixed top-0 right-0 p-2">
                <button class="flex flex-col gap-1 px-2 py-4" on:click={() => showMobileMenu = false}>
                    <div class="w-6 border-b-2 border-black dark:border-white  rotate-45 absolute"></div>
                    <div class="w-6 border-b-2 border-black dark:border-white  rotate-[-45deg]"></div>
                </button>
            </div>

            <div class=" w-full justify-end mt-5">
                {#if $navState.sessionState}
                    <p class="text-center text-sm my-2 font-bold opacity-50">Hello, {$navState.sessionState.user.email}</p>
                    <Button title="Click, to login." style=" p-2 w-full bg-red-500 rounded-lg text-white" name="Log out" loader={logoutLoader} loader_name="Logging out." on:click={logoutHandler}  />
                {:else}
                    <div class="flex flex-col gap-2">
                        <Button title="Click, to login." style="w-full p-2 bg-blue-800 rounded-lg text-white" name="Login" on:click={() => {
                            goto("/Login");
                            showMobileMenu = false;
                        }}/>
                        <Button title="Click, to register your account." style="w-full p-2 bg-green-500 rounded-lg text-white" name="Sign Up Free" on:click={() => {
                            goto("/Login?Register");
                            showMobileMenu = false;
                        }} />
                    </div>
                {/if}
            </div>

            {#each $navState.default as selection }
                <p>
                    <a class="p-2 transition-all { $navState.activeItem === selection.url ? "bg-[#00000031] text-white rounded-xl" : "" }" href={selection.url} 
                    on:click={() => {
                        showMobileMenu = false;
                        $navState.activeItem = selection.url;
                    }}
                    >{selection.title}</a>
                </p>
            {/each}

        </div>
    </menu>
{/if}