<script>
	export let comm; // = false;
</script>

<div
	class={`relative grid select-none items-center whitespace-nowrap rounded-lg ${comm ? 'bg-green-500' : 'bg-red-500'} py-1 font-sans text-sm font-bold uppercase text-white w-20 mx-auto`}
>
	<span class="">{comm ? 'online' : 'offline'}</span>
</div>
