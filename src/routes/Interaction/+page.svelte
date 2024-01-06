<script lang="ts">
	import { interactionStore, navState, supabaseStore } from "$lib";
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import CreatePost from "./CreatePost.svelte";
	import RenderPost from "./RenderPost.svelte";

    export let data: PageData;
    

    onMount( async () => {

        $navState.activeItem = "/Interaction";
        $navState.default = $navState.student;
        $interactionStore.createdPostArray = data.getPosts;
        $supabaseStore = data.supabase;
        $navState.sessionState = data.session;
        
        
    });


</script>

<div class="min-h-[100dvh]">
    <div class="mx-auto md:max-w-xl flex flex-col gap-4">
        <CreatePost />

        {#each $interactionStore.createdPostArray ?? [] as post}
            <RenderPost {post} />
        {/each}
        
    </div>
</div>