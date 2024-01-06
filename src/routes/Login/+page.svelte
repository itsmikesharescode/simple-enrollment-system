<script lang="ts">
    import { page } from "$app/stores";
	import { onMount } from "svelte";
	import LoginComponent from "./LoginComponent.svelte";
	import RegisterComponent from "./RegisterComponent.svelte";
	import ResetPassComponent from "./ResetPassComponent.svelte";
	import type { PageServerData } from "./$types";
	import { navState } from "$lib";
	import { scale } from "svelte/transition";

    export let data: PageServerData;

    onMount( () => {
        $navState.activeItem = "";
        if(data.whoareyou === "it's student") $navState.default = $navState.student, $navState.sessionState = data.session;
        else if(data.whoareyou === "it's admin") $navState.default = $navState.admin, $navState.sessionState = data.session;
        else $navState.default = $navState.static;
    })
</script>

<div class="" in:scale>
    {#if $page.url.search === "?Register"}
        <RegisterComponent />
    {:else if $page.url.search === "?ResetPass"}
        <ResetPassComponent />
    {:else}
        <LoginComponent />
    {/if}
</div>