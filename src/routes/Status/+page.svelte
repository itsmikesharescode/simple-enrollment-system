<script lang="ts">
	import { navState, statusStore } from "$lib";
	import { onMount } from "svelte";
	import UpdateStatus from "./UpdateStatus.svelte";
	import type { PageServerData } from "./$types";
	
    export let data: PageServerData;

    onMount( () => {

        $navState.activeItem = "/Status";

        const { whoareyou, session, getApp } = data;

        if(getApp) $statusStore.applicationState = getApp[0];
        
        if(whoareyou === "it's student") $navState.default = $navState.student, $navState.sessionState = session;
        
    })
</script>

<div class="min-h-[100dvh]">
    <h1 class="h1 text-center">Application  Status</h1>
    
    <UpdateStatus />
   
</div>