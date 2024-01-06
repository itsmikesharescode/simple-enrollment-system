<script lang="ts">
	import { navState } from "$lib";
	import { onMount } from "svelte";
	import type { PageServerData } from "./$types";
	import Button from "$lib/Components/Button.svelte";
	import { goto } from "$app/navigation";
	
    export let data: PageServerData

    onMount( () => {
        $navState.activeItem = "/Admission";

        if(data.wru?.whoareyou === "it's admin") $navState.default = $navState.admin, $navState.sessionState = data.wru.session;
        else if(data.wru?.whoareyou === "it's student") $navState.default = $navState.student, $navState.sessionState = data.wru.session;
        else $navState.default = $navState.static;
        
    });
</script>

<div class="my-10 md:m-0">
    <Button title="Click, to back to college courses." style="max-w-fit p-2 bg-blue-500 rounded-lg text-white" name="↩ Back" on:click={() => goto("/Admission/College")}/>
</div>

<div class="min-h-[100dvh] flex flex-col justify-center">

    <div class="mx-auto md:max-w-[50dvw] flex flex-col gap-5 my-[5dvh]">
        <img loading="lazy" src={data.admissionObject.img} alt="" class="w-full h-[30dvh]" />

        <div class="flex flex-col gap-2">
            <h3 class="h3 text-sm">{data.admissionObject.title}</h3>
            <p class="text-sm">{data.admissionObject.intro}</p>

            <p class="font-bold text-sm">Curriculum</p>
            <p class="text-sm">{data.admissionObject.curriculum}</p>

            <p class="font-bold text-sm">Course Competencies</p>
            <p class="text-sm">{data.admissionObject.coreCompetenies}</p>

            <p class="font-bold text-sm">Specialization</p>
            <p class="text-sm">{data.admissionObject.specialization}</p>

            <p class="font-bold text-sm">Opportunities</p>
            <p class="text-sm">{data.admissionObject.opportunities}</p>

            <p class="font-bold text-sm">Experience</p>
            <p class="text-sm">{data.admissionObject.experience}</p>
            
            <div class="animate-bounce hover:animate-none hover:shadow-lg hover:shadow-black max-w-fit rounded-lg mt-5 mx-auto">
                <Button title="Click, to enroll this course {data.admissionObject.title}." style="max-w-fit mx-auto p-2 bg-green-500 rounded-lg text-white" name="Enroll Now ↪" on:click={() => goto(`${data.admissionObject.url}/Enrollment`)}/>
            </div>
        </div>
    </div>
</div>