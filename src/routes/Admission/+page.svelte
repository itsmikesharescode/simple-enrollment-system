<script lang="ts">
	import { navState } from "$lib";
	import { onMount } from "svelte";
	import type { PageServerData } from "./$types";
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

<div class="min-h-[100dvh] flex flex-col justify-center">

    <div class="mx-auto md:max-w-[70dvw] flex flex-col gap-10">

        <div class="flex flex-col gap-3">
            <h3 class="h3">College Courses</h3>
            <ul class="list-disc px-5 flex flex-col gap-2 text-sm">
                <li>
                    Improve your knowledge and skills. College courses can help you gain new knowledge and skills that can be valuable in your personal and professional life.
                </li>

                <li>
                    Prepare for a career. Many college courses are designed to prepare students for specific careers.
                </li>

                <li>
                    Become a more well-rounded person. College courses can help you develop critical thinking, communication, and problem-solving skills.
                </li>

                <li>
                    Meet new people. College courses can be a great way to meet new people and make friends.
                </li>
            </ul>
            <Button title="Click, to check list of college courses available." style=" mx-auto p-2 bg-blue-500 rounded-lg text-white" name="Check List of College Courses ↪" on:click={() => goto("/Admission/College")} />
        </div>

        <div class="flex flex-col gap-3">
            <h3 class="h3">Senior High Tracks</h3>
            <p class="text-sm font-bold">
                Senior high school, or SHS, is the last two years of secondary education in the Philippines. It is part of the K to 12 Basic Education Program implemented in 2012.
            </p>
            <p class="text-sm">
                Senior high offers three tracks:
            </p>
            <ul class="list-disc px-5 flex flex-col gap-2 text-sm">
                <li>
                    Accountancy, Business and Management (ABM)
                </li>

                <li>
                    Humanities and Social Sciences (HUMSS)
                </li>

                <li>
                    Science, Technology, Engineering, and Mathematics (STEM)
                </li>

                <li>
                    General Academic Strand (GAS)
                </li>
            </ul>

            <Button title="Click, to check list of senior high track available." style=" mx-auto p-2 bg-blue-500 rounded-lg text-white" name="Check List of Senior High Tracks ↪" on:click={() => goto("/Admission/SeniorHigh")} />
        </div>

    </div>
</div>