<script>
	import { createEventDispatcher } from 'svelte';

	export let key;

	const dispatch = createEventDispatcher();

	const submit = (key) => dispatch('submit', { key });
</script>

<button
	class="{Number(key)
		? 'text-slate-700 border-slate-700 active:bg-slate-700'
		: 'text-blue-700 border-blue-700 active:bg-blue-700'} bg-transparent active:text-white text-6xl font-semibold py-2 px-6 border-2 active:border-transparent rounded-lg ring-offset-2 ring-2"
	on:touchstart={submit(key)}
>
	{key}
</button>
