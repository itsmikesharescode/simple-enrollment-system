

<script lang="ts">
	import { applicationFormsArray, applicationsArray, navState } from '$lib';
    import { Paginator, type PaginationSettings, tableMapperValues } from '@skeletonlabs/skeleton';
    import { Table } from '@skeletonlabs/skeleton';
	import type { PageServerData } from './$types';
	import { onMount } from 'svelte';
	import type { STUDENT_APP_TB } from '$lib/types';
	import type { Session } from '@supabase/supabase-js';
	import { convertDate } from '$lib/Helpers/convertDate';

    export let data: PageServerData;

    onMount( () => {
        $navState.default = $navState.admin;
        $navState.activeItem = "/Request";
        $applicationsArray = data.studentApplications as STUDENT_APP_TB[];
        $navState.sessionState = data.session as Session;
    })

    let paginationSettings: PaginationSettings = {
        page: 0,
        limit: 5,
        size: $applicationFormsArray.length,
        amounts: [1,2,5,10],
    };

    const onPageChange = (e: CustomEvent) => {
        paginationSettings.page = e.detail;
        console.log(e.detail)
        
    }

    const onAmountChange = (e: CustomEvent) => {
        paginationSettings.limit = e.detail;
        console.log(e.detail)
        
    }

    

</script>

<div class="min-h-[100dvh]">
    <div class="mx-auto flex flex-col gap-4 md:max-w-[70dvw]">
        <!-- Use paginatedSource for the table body -->


        <div class="">
            <h1 class="text-xl mb-2">Application Request</h1>
            <!--Desktop Screen-->
            <div class="overflow-auto rounded-lg shadow hidden md:block">
                <table class="w-full">

                    <thead class="bg-gray-50 border-b-2 border-gray-200 dark:bg-[#393B7C]">
                        <tr>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left">Student Name</th>
                            <th class="p-3 text-sm font-semibold tracking-wide text-left truncate ">Application Type</th>
                            <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left truncate">Date Submitted</th>
                            <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">

                        {#each $applicationsArray as application }
                            <tr class="bg-white dark:bg-[#393B7C] ">


                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-white">
                                    <button title="Click, to view application details." class="underline transition-all hover:text-red-500 active:scale-95"
                                    on:click={() => alert("this feature otw developer is lazy")}
                                    >{application.fullname}</button>
                                </td>

                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-white">
                                    {application.app_type}
                                </td>
                                
                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap dark:text-white">{convertDate(application.created_at)}</td>

                                <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                    <span class="p-1.5 text-xs uppercase tracking-wider bg-green-500 text-white rounded-lg font-bold">Pending</span>
                                </td>

                                
                            </tr>
                        {/each}

                    </tbody>

                </table>
            </div>

            <!--Mobile Screen-->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {#each $applicationsArray as application }
                    <button class="bg-white space-y-3 p-4 rounded-lg shadow ">

                        <div class="text-sm text-gray-700 text-center -mt-2 font-bold">{application.app_type}</div>
                        <div class="flex items-center space-x-2 text-sm">

                            <div class="text-gray-500">{convertDate(application.created_at)}</div>
                        
                            <div>
                                <span class="p-1.5 text-xs uppercase tracking-wider bg-green-500 text-white rounded-lg font-bold">Pending</span>
                            </div>

                        </div>

                        <div class="text-sm text-gray-700 text-left">{application.fullname}</div>
                        
                        
                        
                    </button>
                {/each}
                
            </div>
        </div>

        <Paginator
            on:page={onPageChange}
            on:amount={onAmountChange}
            bind:settings={paginationSettings}
            showFirstLastButtons="{false}"
            showPreviousNextButtons="{true}"
        />
    </div>

    
</div>
