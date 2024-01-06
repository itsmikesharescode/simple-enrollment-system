<script lang="ts">
	import { goto } from "$app/navigation";
    import { page } from "$app/stores";
	import Button from "$lib/Components/Button.svelte";
</script>

<div class="min-h-[100dvh] flex flex-col justify-center items-center gap-2">
    <h1 class="h1 text-red-500 font-bold">Error {$page.status} </h1>
    <p class="text-red-500 font-bold">The URL you are trying to visit is not found in the index. -Mikey </p>
    <Button title="Click, to back to home page." style="max-w-fit p-2 bg-blue-500 rounded-lg text-white" name="↩ Back to Home" on:click={() => goto("/")}/>
</div>