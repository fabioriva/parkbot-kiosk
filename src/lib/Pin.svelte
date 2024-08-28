<script>
	import { PUBLIC_API } from '$env/static/public';
	import { t, locale, locales } from "$lib/i18n";
	import Key from './Key.svelte';
	import Text from "./Text.svelte";

	let pin = '';
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : $t("pin.text1");

	async function handleSubmit(e) {
		// console.log(e.detail.key);
		pin += e.detail.key;
		console.log(e.detail.key, pin);
		if (pin.length >= 3) {
			// let res = await fetch(PUBLIC_API + '/pin').then((x) => x.json());
			const res = await fetch(PUBLIC_API + '/pin', {
				method: "POST",
				body: JSON.stringify({pin})
			})
			const json = await res.json()
			console.log(`submitted ${pin}`, pin.length, json)
			pin = ''
		};
	}
</script>

<Text text={view} />

<div class="mt-16 grid grid-cols-4 gap-3">
	<Key key={'1'} on:submit={handleSubmit} />
	<Key key={'2'} on:submit={handleSubmit} />
	<Key key={'3'} on:submit={handleSubmit} />
	<Key key={'C'} on:submit={handleSubmit} />
	<Key key={'4'} on:submit={handleSubmit} />
	<Key key={'5'} on:submit={handleSubmit} />
	<Key key={'6'} on:submit={handleSubmit} />
	<Key key={'D'} on:submit={handleSubmit} />
	<Key key={'7'} on:submit={handleSubmit} />
	<Key key={'8'} on:submit={handleSubmit} />
	<Key key={'9'} on:submit={handleSubmit} />
	<Key key={'E'} on:submit={handleSubmit} />
	<Key key={'A'} on:submit={handleSubmit} />
	<Key key={'0'} on:submit={handleSubmit} />
	<Key key={'B'} on:submit={handleSubmit} />
	<Key key={'F'} on:submit={handleSubmit} />
</div>
