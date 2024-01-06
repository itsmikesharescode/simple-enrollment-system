<script lang="ts">
	import { navState } from "$lib";
	import { onMount } from "svelte";
	import type { PageServerData } from "./$types";
	import { generatedText } from "$lib/Helpers/generatedText";
	import Button from "$lib/Components/Button.svelte";
	import { goto } from "$app/navigation";

    export let data: PageServerData;

    let displayTexts = ""

    const displayText = () => {
        
        const setz = setInterval(() => {
            displayTexts = $generatedText[Math.round(Math.random() * $generatedText.length - 1)];
        }, 4000);
        
    }

    onMount( () => {

        $navState.activeItem = "/";

        if(data.whoareyou === "it's student") $navState.default = $navState.student, $navState.sessionState = data.session;
        else if(data.whoareyou === "it's admin") $navState.default = $navState.admin, $navState.sessionState = data.session;
        else $navState.default = $navState.static;

        displayText();

    });
</script>

<div class="flex flex-col min-h-[100dvh] gap-[5dvh] justify-center">
    <div class="text-2xl mx-auto sm:max-w-xl text-center mt-5 transition-all">
        "" {displayTexts ? displayTexts : $generatedText[Math.round(Math.random() * $generatedText.length)]} ""
    </div>

    <div class="mx-auto sm:max-w-xl text-center flex flex-col gap-5">
        <h3 class="h3">Welcome to ICCT Colleges Enrollment System Design and Implementation for Incoming Students for the Year 2023.</h3>
        <p>Where simplicity meets efficiency! Let our friendly interaction guide you through the process seamlessly, making enrollment a breeze. </p>
        <p>Say goodbye to complexities and hello to hassle-free enrollment. Let's get started!"</p>

        <Button title="Click, to explore and start your career as a student!" style="w-[50%] mx-auto p-2 bg-blue-500 rounded-lg text-white" name="Let's go ↪" on:click={() => goto("/Login")}/>
    </div>
</div>