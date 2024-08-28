<script>
	import { onMount } from 'svelte';
	let date = new Date();
	$: hour = date.getHours();
	$: min = date.getMinutes();
	$: sec = date.getSeconds();
	let dayOrNight = 'AM';

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);
	});
</script>

<div id="" class="clockWrapper">
	<p class="clockDisplay">
		{hour <= 12 ? hour : hour - 12}:{min}:{sec}
		{dayOrNight}
	</p>
</div>
