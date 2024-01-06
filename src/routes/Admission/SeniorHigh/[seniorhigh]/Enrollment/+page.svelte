<script lang="ts">
	import { onMount } from "svelte";
	import type { PageServerData, SubmitFunction } from "./$types";
	import { encryptMessage } from "$lib/Helpers/encryption";
	import { navState } from "$lib";
	import Button from "$lib/Components/Button.svelte";
	import { goto } from "$app/navigation";
	import { enhance } from "$app/forms";
	import type { Session } from "@supabase/supabase-js";
	import { getToastStore } from "@skeletonlabs/skeleton";
	import { createToast } from "$lib/Helpers/toaster";

    const toastStore = getToastStore();

    export let data: PageServerData;

    let displayCourse: string | undefined = "";
    let displayURL: string = "";
    let sanitizeText: string;

    onMount( () => {

        $navState.activeItem = "/Admission";
        sanitizeText = encryptMessage(data.matchedObject?.title as string);

        displayCourse = data.matchedObject?.title;
        displayURL = data.matchedObject?.url as string;

        const {wru} = data;

        if(wru?.whoareyou === "it's student") $navState.default = $navState.student, $navState.sessionState = wru.session;
        
    });

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

    type SubmitFormNews = {
        status: number
        type: string
        data: {
            session: Session
            msg: string
            errors: InputSubmitFormErrors
        }
    };

    let inputErrors: InputSubmitFormErrors | null = null;
    let submitFormLoader = false;


    const submitFormNews: SubmitFunction = () => {

        submitFormLoader = true;

        return async ({ result, update }) => {
            const {status, data: {session, msg, errors}} = result as SubmitFormNews;
                
            switch (status) {
                case 200:
                    $navState.sessionState = session;
                    createToast(msg, false, toastStore);
                    submitFormLoader = false;
                    goto("/Status");
                    break;
                
                case 402:
                    
                    if(msg === `duplicate key value violates unique constraint "student_application_tb_student_uid_key"`){
                        createToast("You can only send application once. If you want to send another one you have to delete the pending one in your status tab.", true, toastStore);
                        submitFormLoader = false;
                    }

                    createToast(msg, true, toastStore);
                    submitFormLoader = false;
                    break;
                
                case 403:
                    inputErrors = errors;
                    submitFormLoader = false;
                    break;

                default:
                    break;
            };
            await update();
        };
    };

</script>

<div class="my-10 md:m-0">
    <Button title="Click, to back to {displayURL}." style="max-w-fit p-2 bg-blue-500 rounded-lg text-white" name="↩ Back" on:click={() => goto(displayURL)}/>
</div>

<form method="POST" enctype="multipart/form-data" action="?/submitForm" use:enhance={submitFormNews} class="mx-auto md:max-w-[35dvw] flex flex-col gap-4">
    <h3 class="h3">Personal Information</h3>

    <div class="flex flex-col gap-2">

        <label>
            <p class="text-sm">Selected Course:</p>
            <input type="text" class="input rounded-lg text-sm font-bold" disabled value={displayCourse}/>
        </label>

        <input name="course" type="hidden" value={sanitizeText} class="hidden" />
        
        <label>
            <p class="text-sm">Present Address:</p>
            <input name="presentAddress" type="text" class="input rounded-lg text-sm" placeholder="Enter your present address." />
            {#each inputErrors?.presentAddress ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Religion:</p>
            <input name="religion" type="text" class="input rounded-lg text-sm" placeholder="Enter your religion." />
            {#each inputErrors?.religion ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Mobile Number:</p>
            <input name="mobileNumber" type="text" class="input rounded-lg text-sm" placeholder="Enter your active mobile number." />
            {#each inputErrors?.mobileNumber ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Date of Birth:</p>
            <input name="dateOfBirth" type="date" class="input rounded-lg text-sm" placeholder="Enter your date of birth." />
            {#each inputErrors?.dateOfBirth ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Father's First Name:</p>
            <input name="fathersFname" type="text" class="input rounded-lg text-sm" placeholder="Enter your father's first name" />
            {#each inputErrors?.fathersFname ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Father's Middle Name:</p>
            <input name="fathersMname" type="text" class="input rounded-lg text-sm" placeholder="Enter your father's middle name" />
            {#each inputErrors?.fathersMname ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Father's Last Name:</p>
            <input name="fathersLname" type="text" class="input rounded-lg text-sm" placeholder="Enter your father's last name" />
            {#each inputErrors?.fathersLname ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Mother's First Name:</p>
            <input name="mothersFname" type="text" class="input rounded-lg text-sm" placeholder="Enter your mother's first name" />
            {#each inputErrors?.mothersFname ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Mother's Middle Name:</p>
            <input name="mothersMname" type="text" class="input rounded-lg text-sm" placeholder="Enter your mother's middle name" />
            {#each inputErrors?.mothersMname ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Mother's Last Name:</p>
            <input name="mothersLname" type="text" class="input rounded-lg text-sm" placeholder="Enter your mother's last name" />
            {#each inputErrors?.mothersLname ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

    </div>

    <h3 class="h3">Education Information</h3>

    <div class="flex flex-col gap-2">
        
        <label>
            <p class="text-sm">Primary School Name:</p>
            <input name="primarySchoolName" type="text" class="input rounded-lg text-sm" placeholder="Enter your primary school name." />
            {#each inputErrors?.primarySchoolName ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Primary School Address:</p>
            <input name="primarySchoolAddress" type="text" class="input rounded-lg text-sm" placeholder="Enter your primary school address." />
            {#each inputErrors?.primarySchoolAddress ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Primary School Month/Year Graduated:</p>
            <input name="primarySchoolGraduated" type="month" class="input rounded-lg text-sm" placeholder="Enter your primary school year graduated" />
            {#each inputErrors?.primarySchoolGraduated ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>
        
        <label>
            <p class="text-sm">Secondary School Name:</p>
            <input name="secondarySchoolName" type="text" class="input rounded-lg text-sm" placeholder="Enter your secondary school name." />
            {#each inputErrors?.secondarySchoolName ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

        <label>
            <p class="text-sm">Secondary School Address:</p>
            <input name="secondarySchoolAddress" type="text" class="input rounded-lg text-sm" placeholder="Enter your secondary school address." />
            {#each inputErrors?.secondarySchoolAddress ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>
        
        <label>
            <p class="text-sm">Secondary School Month/Year Graduated:</p>
            <input name="secondarySchoolGraduated" type="month" class="input rounded-lg text-sm" placeholder="Enter your secondary school year graduated" />
            {#each inputErrors?.secondarySchoolGraduated ?? [] as error }
                <p class="text-red-500 text-xs font-bold px-2">{error}</p>
            {/each}
        </label>

    </div>
    
    <Button title="Click, to submit your enrollment application." 
    style="mx-auto p-2 bg-green-500 rounded-lg text-white" 
    name="Submit Application" 
    loader={submitFormLoader}
    loader_name="Submitting."
    />
</form>