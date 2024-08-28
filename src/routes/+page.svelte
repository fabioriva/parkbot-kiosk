<script>
	import { getContext } from 'svelte';
	import Gate from '$lib/Gate.svelte';
	import Pin from '$lib/Pin.svelte';
	import Start from '$lib/Start.svelte';

	const { pageNr } = getContext('comm-context');
	// console.log($pageNr);
	// export let page;
</script>

{#if $pageNr === 1}
	<Start />
{:else if $pageNr === 2}
	<Gate />
{:else if $pageNr === 3}
	<Pin />
{:else}
	<!-- <div>Page {$pageNr}</div> -->
	<Pin />
{/if}
