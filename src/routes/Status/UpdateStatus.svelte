<script lang="ts">
	import { enhance } from "$app/forms";
	import { navState, statusStore } from "$lib";
	import Button from "$lib/Components/Button.svelte";
	import { createToast } from "$lib/Helpers/toaster";
	import type { STUDENT_APP_TB } from "$lib/types";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import type { Session } from "@supabase/supabase-js";
	import type { SubmitFunction } from "@sveltejs/kit";
	import ConfirmDelete from "./ConfirmDelete.svelte";
    
    const toastStore = getToastStore();

    type InputSubmitFormErrors = {
        presentAddress: string[]
        religion: string[]
        mobileNumber: string[]
        dateOfBirth: string[]
        fathersFname: string[]
        fathersMname: string[]
        fathersLname: string[]
        mothersFname: string[]
        mothersMname: string[]
        mothersLname: string[]
        primarySchoolName: string[]
        primarySchoolAddress: string[]
        primarySchoolGraduated: string[]
        secondarySchoolName: string[]
        secondarySchoolAddress: string[]
        secondarySchoolGraduated: string[]
    };

    type UpdateNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            getApp: STUDENT_APP_TB
            errors: InputSubmitFormErrors
        }
    }
    
    let inputErrors: InputSubmitFormErrors | null = null;

    let showUpdate =  false;
    let updateLoader = false;

    const updateNews: SubmitFunction = () => 
    {
        updateLoader = true;

        return async ({ result, update }) => 
        {
            const {status, data: {session, msg, getApp, errors}} = result as UpdateNews;
                
            switch (status) {
                case 200:
                    createToast(msg, false, toastStore);
                    $navState.sessionState = session;
                    $statusStore.applicationState = getApp;
                    updateLoader = false;
                    showUpdate = false;
                    break;
                
                case 402:
                    createToast(msg, true, toastStore);
                    updateLoader = false;
                    break;
                
                case 403:
                    inputErrors = errors;
                    updateLoader = false;
                    break;
                default:
                    break;
            };
            await update();
        };
    };


</script>

{#if $statusStore.showDelete}
    <ConfirmDelete />
{/if}

{#if Object.keys($statusStore.applicationState ?? {}).length}
    <form method="POST" enctype="multipart/form-data" action="?/updateForm" use:enhance={updateNews} class="flex flex-col gap-4 mx-auto md:max-w-xl my-[5dvh]">
        
    
        <div class="flex gap-2 justify-end transition-all">
            {#if showUpdate}
                <Button type="button" title="Click, to cancel this update."  style="p-2 bg-red-500 rounded-lg text-white" name="↩ Cancel Change" on:click={() => showUpdate = false} />
                <Button title="Click, to confirm this changes." style="p-2 bg-blue-500 rounded-lg text-white" name="Confirm Change ↪" loader={updateLoader} loader_name="Updating." />
            {:else}
                <Button type="button" title="Click, to delete this application" style="p-2 bg-red-500 rounded-lg text-white" name="Delete Application" on:click={() => $statusStore.showDelete = true} />
                <Button type="button" title="Click, to update this application" style="p-2 bg-green-500 rounded-lg text-white" name="Update Application ↪" on:click={() => showUpdate = true}/>
            {/if}
        </div>
        

        <h3 class="h3">Personal Information</h3>

        <div class="flex flex-col gap-2">

            <label>
                <p class="text-xs font-bold">Selected Course:</p>
                <input type="text" class="input rounded-lg text-xs font-bold" disabled value={$statusStore.applicationState?.course} />
            </label>
            
            <label>
                <p class="text-xs font-bold">Present Address:</p>
                <input name="presentAddress" type="text" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your present address." : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.present_address}/>
                {#each inputErrors?.presentAddress ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

            <label>
                <p class="text-xs font-bold">Religion:</p>
                <input name="religion" type="text" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your religion." : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.religion}/>
                {#each inputErrors?.religion ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

            <label>
                <p class="text-xs font-bold">Mobile Number:</p>
                <input name="mobileNumber" type="text" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your active mobile number." : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.mobile_number}/>
                {#each inputErrors?.mobileNumber ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

            <label>
                <p class="text-xs font-bold">Date of Birth:</p>
                <input name="dateOfBirth" type="date" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your date of birth." : ""}  disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.date_of_birth}/>
                {#each inputErrors?.dateOfBirth ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

            <!--Switch dom for fathers name to fathers fullname-->
            {#if showUpdate}
                <label>
                    <p class="text-xs font-bold">Father's First Name:</p>
                    <input name="fathersFname" type="text" class="input rounded-lg text-xs font-bold" placeholder="Enter your father's first name" />
                    {#each inputErrors?.fathersFname ?? [] as error }
                        <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                    {/each}
                </label>

                <label>
                    <p class="text-xs font-bold">Father's Middle Name:</p>
                    <input name="fathersMname" type="text" class="input rounded-lg text-xs font-bold" placeholder="Enter your father's middle name"/>
                    {#each inputErrors?.fathersMname ?? [] as error }
                        <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                    {/each}
                </label>

                <label>
                    <p class="text-xs font-bold">Father's Last Name:</p>
                    <input name="fathersLname" type="text" class="input rounded-lg text-xs font-bold" placeholder="Enter your father's last name"/>
                    {#each inputErrors?.fathersLname ?? [] as error }
                        <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                    {/each}
                </label>
            {:else}
                <label>
                    <p class="text-xs font-bold">Father's Full Name:</p>
                    <input type="text" class="input rounded-lg text-xs font-bold" disabled value={$statusStore.applicationState?.fathers_fullname}/>
                </label> 
            {/if}
            
            <!--Switch dom for mothers name to mothers fullname-->
            {#if showUpdate}
                <label>
                    <p class="text-xs font-bold">Mother's First Name:</p>
                    <input name="mothersFname" type="text" class="input rounded-lg text-xs font-bold" placeholder="Enter your mother's first name"/>
                    {#each inputErrors?.mothersFname ?? [] as error }
                        <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                    {/each}
                </label>

                <label>
                    <p class="text-xs font-bold">Mother's Middle Name:</p>
                    <input name="mothersMname" type="text" class="input rounded-lg text-xs font-bold" placeholder="Enter your mother's middle name"/>
                    {#each inputErrors?.mothersMname ?? [] as error }
                        <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                    {/each}
                </label>

                <label>
                    <p class="text-xs font-bold">Mother's Last Name:</p>
                    <input name="mothersLname" type="text" class="input rounded-lg text-xs font-bold" placeholder="Enter your mother's last name"/>
                    {#each inputErrors?.mothersLname ?? [] as error }
                        <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                    {/each}
                </label>
            {:else}
                <label>
                    <p class="text-xs font-bold">Mother's Full Name:</p>
                    <input type="text" class="input rounded-lg text-xs font-bold" disabled value={$statusStore.applicationState?.mothers_fullname}/>
                </label> 
            {/if}

        </div>

        <h3 class="h3">Education Information</h3>

        <div class="flex flex-col gap-2">
            
            <label>
                <p class="text-xs font-bold">Primary School Name:</p>
                <input name="primarySchoolName" type="text" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your primary school name." : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.primary_school_name}/>
                {#each inputErrors?.primarySchoolName ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

            <label>
                <p class="text-xs font-bold">Primary School Address:</p>
                <input name="primarySchoolAddress" type="text" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your primary school address." : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.primary_school_address}/>
                {#each inputErrors?.primarySchoolAddress ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

            <label>
                <p class="text-xs font-bold">Primary School Month/Year Graduated:</p>
                <input name="primarySchoolGraduated" type="month" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your primary school year graduated" : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.primary_school_year_grad}/>
                {#each inputErrors?.primarySchoolGraduated ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>
            
            <label>
                <p class="text-xs font-bold">Secondary School Name:</p>
                <input name="secondarySchoolName" type="text" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your secondary school name." : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.secondary_school_name}/>
                {#each inputErrors?.secondarySchoolName ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

            <label>
                <p class="text-xs font-bold">Secondary School Address:</p>
                <input name="secondarySchoolAddress" type="text" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your secondary school address." : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.secondary_school_address}/>
                {#each inputErrors?.secondarySchoolAddress ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>
            
            <label>
                <p class="text-xs font-bold">Secondary School Month/Year Graduated:</p>
                <input name="secondarySchoolGraduated" type="month" class="input rounded-lg text-xs font-bold" placeholder={showUpdate ? "Enter your secondary school year graduated" : ""} disabled={!showUpdate} value={showUpdate ? "" : $statusStore.applicationState?.secondary_school_year_grad}/>
                {#each inputErrors?.secondarySchoolGraduated ?? [] as error }
                    <p class="text-red-500 text-xs font-bold px-2 {showUpdate ? "" : "hidden"}">{error}</p>
                {/each}
            </label>

        </div>
    </form>
{:else}
    <div class="min-h-[100dvh] ">
        <div class="card p-4 mt-[10dvh] mx-auto md:max-w-xl flex flex-col gap-2 justify-center items-center shadow-xl">
            <h3 class="h3 text-center">There is no pending application</h3>
            <p class="text-sm">Submit now? <a title="Click, to submit application form." href="/Admission" class="text-blue-500 underline">Click here</p>
        </div>
    </div>
{/if}