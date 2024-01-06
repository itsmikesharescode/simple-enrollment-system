<script lang="ts">
	import { navState } from "$lib";
	import { onMount } from "svelte";
	import type { PageServerData } from "./$types";

    export let data: PageServerData;

    onMount( () => {
        $navState.activeItem = "/Scholarship";
        if(data.whoareyou === "it's student") $navState.default = $navState.student, $navState.sessionState = data.session;
        else if(data.whoareyou === "it's admin") $navState.default = $navState.admin, $navState.sessionState = data.session;
        else $navState.default = $navState.static;
    })
</script>

<div class="min-h-[100dvh] flex flex-col justify-center">

    <div class="mx-auto md:max-w-[70dvw] flex flex-col gap-4">

        <div class="flex flex-col gap-2 card p-4 shadow-xl">
            <h4 class="h4">ICCT SCHOLARSHIP PROGRAM</h4>
            <p class="text-sm font-bold">What standards apply to scholarships?</p>
            <p class="text-sm">
                At ICCT Colleges, financial aid is offered in the form of scholarships, student employment, and tuition discounts. From a tiny portion of the tuition to full help for tuition and books, financial aid is available.
            </p>
        </div>

        <div class="flex flex-col gap-4 md:flex-row">
            <div class="flex flex-col gap-4 w-full">

                <div class="flex flex-col gap-2 card p-4 shadow-xl">
                    <p class="text-sm font-bold">Student Assistantship</p>
                    <p class="text-sm">
                        ICCT Colleges employs a limited number of responsible students who serve as assistants in some departments of the ICCT Colleges requiring their services. Students may apply but selection depends on their academic performance, ability to do the job and sufficiency of time for work. Payment for services is based on the number of hours rendered. A student who qualified for the Student Assistantship program shall enjoy the tuition-fee discount under the WAYS program.
                    </p>
                </div>

                <div class="flex flex-col gap-2 card p-4 shadow-xl">
                    <p class="text-sm font-bold">MR & MS ICCT SCHOLARSHIP Grant</p>
                    <p class="text-sm">
                        A scholarship grant given to the winners of the Search for Mr. & Ms. ICCT. The grant ranges from a FULL SCHOLARSHIP to tuition fee discounts to the deserving winners of the pageant.
                    </p>
                </div>

                <div class="flex flex-col gap-2 card p-4 shadow-xl">
                    <p class="text-sm font-bold">Work As You Study "WAYS" Program</p>
                    <p class="text-sm">
                        A student may apply as working student via the WAYS program. Students qualified for the program shall be made to pay 100 pesos per unit on the tuition fee as oppose to the regular 130 pesos per unit fee. As another assistance, qualified applicants may be given schedule to work in any division of William and Co. Phils, Inc. or in any of its sister companies or establishment partners.
                    </p>
                </div>

            </div>

            <div class="flex flex-col gap-4 w-full ">

                <div class="flex flex-col gap-2 card p-4 shadow-xl">
                    <p class="text-sm font-bold">Government Employees and Dependents Discounts</p>
                    <p class="text-sm">
                        ICCT Colleges recognizes the hardworking government employees, thus grants a 50% percent discount on the tuition fee of qualified government employees and dependents. However, these discounts are subject for the approval of the President upon submission of the requirements through the Office of Student Affairs.
                    </p>
                </div>

                <div class="flex flex-col gap-2 card p-4 shadow-xl">
                    <p class="text-sm font-bold">Siblings Discount</p>
                    <p class="text-sm">
                        As a form of incentive, ICCT Colleges offers the following discount: when two or more brothers/sisters enroll during the same term, the second brother/sister shall be granted a 10% discount, the third a 20% discount, the fourth 30% discount, and the succeeding brothers/sisters, a 50% discount.
                    </p>
                </div>

                <div class="flex flex-col gap-2 card p-4 shadow-xl">
                    <p class="text-sm font-bold">DR. CONSUELO L. CO "DCLC" SCHOLARSHIP Program</p>
                    <p class="text-sm">
                        An institutional scholarship program offered to qualified and deserving high school graduates with Valedictorian, Salutatorian and within the Top 5 graduates status in their High School. Students who will qualify for this scholarship program shall enjoy Full Scholarship Grant and a trimester/semester stipend/allowance respectively.
                    </p>
                </div>
                
            </div>
        </div>

        <div class="flex flex-col gap-2 card p-4 shadow-xl">
            <h4 class="h4">President's List Scholarship Award</h4>
            <p class="text-sm">
                The President's List Scholarship Award is available to students enrolled at ICCT Colleges. Students under this scholarship shall represent 10% of the total enrollment of the previous trimester. This award shall be based on the following:
            </p>
 
            <ul class="list-disc px-6 text-sm flex flex-col gap-2">
                <li>
                    The candidate must carry at least a total of 15 units offered of the course for the regular trimester in order to qualify for the scholarship.
                </li>

                <li>
                    A residency requirement of at least one trimester is required.
                </li>

                <li>
                    The student candidate must not have a final grade lower than 2.00 in both academic and non-academic subjects.
                </li>

                <li>
                    The student candidate must have a general weighted average of 1.75 or higher.
                </li>

                <li>
                    A student who obtains a general weighted average of 1.25 or higher shall be entitled to a full tuition scholarship for the next trimester.
                </li>

                <li>
                    A student who obtains a general weighted average between 1.75 and 1.26 shall be entitled to a partial tuition scholarship for the next trimester.
                </li>

                <li>
                    Application for President's List Scholarship Award shall be on a trimestral/semestral basis only.
                </li>

                <li>
                    The candidate must be of good moral character certified by the Career Guidance Counselor supported by the recommendation of any faculty member under whom the candidate has the most number of subjects as well as endorsement by the Vice President for Academic Affairs and the Department Head concerned.
                </li>
            </ul>

            <p class="text-center text-sm font-bold mt-5 opacity-50">A Scholarship committee shall screen student applicants and will determine the qualified students. Two scholarship slots shall be allotted for the following programs; BSN, BSC, BSECE, BSA, BSEd, BEEd, BSMedTEch, BSHRM</p>
        </div>

    </div>

</div>