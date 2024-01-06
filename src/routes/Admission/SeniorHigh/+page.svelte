<script lang="ts">
	import { navState } from "$lib";
	import { onMount } from "svelte";
	import type { PageServerData } from "./$types";
    import { admissionSelection } from "$lib";
	import Button from "$lib/Components/Button.svelte";
	import { goto } from "$app/navigation";

    export let data: PageServerData;

    onMount( () => {
        $navState.activeItem = "/Admission";
        if(data.whoareyou === "it's student") $navState.default = $navState.student, $navState.sessionState = data.session;
        else if(data.whoareyou === "it's admin") $navState.default = $navState.admin, $navState.sessionState = data.session;
        else $navState.default = $navState.static;
    })
</script>

<div class="my-10 md:m-0">
    <Button title="Click, to back to main admission" style="max-w-fit p-2 bg-blue-500 rounded-lg text-white" name="↩ Back" on:click={() => goto("/Admission")}/>
</div>

<div class="min-h-[100dvh] flex flex-col items-center">
    <div class="md:max-w-[70dvw] flex flex-col md:flex-row md:flex-wrap gap-y-5">
        {#each $admissionSelection.seniorHigh as header }
            <div class="flex flex-col gap-2 md:w-[50%]">
                <p class="font-bold">{header.header}</p>
                {#each header.courses as course}
                   <a title="Click to enroll this course {course.title}" href={course.url} 
                   class="max-w-fit text-sm text-blue-500 underline hover:text-red-500">{course.title}</a>
                {/each}
            </div>
        {/each}
    </div>
    
</div>