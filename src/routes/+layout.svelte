<script lang="ts">
	import '../app.postcss';
	import { navigating } from '$app/stores';
	import Spinner from '$lib/Components/Spinner.svelte';
	import { LightSwitch, Toast } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import Nav from '$lib/Components/Nav.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	initializeStores();

</script>

<div class="fixed bottom-0 right-0 m-5">
	<LightSwitch />
</div>

<Toast position="tr"/>

<Nav />

{#if $navigating}
	<div class="min-h-[100dvh]">
		<Spinner />
	</div>
{:else}
	<div class="p-4">
		<slot />
	</div>
{/if}

<Footer />