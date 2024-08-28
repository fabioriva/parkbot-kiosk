<script>
	import { t } from "$lib/i18n";
	import Text from "$lib/Text.svelte";

	// let time = 0;
	// let duration;
	// let paused = true;
	// let lastMouseDown;

	// function handleMousedown(e) {
	// 	lastMouseDown = new Date();
	// }
	// function handleMouseup(e) {
	// 	if (new Date() - lastMouseDown < 300) {
	// 		if (paused) e.target.play();
	// 		else e.target.pause();
	// 	}
	// }
</script>

<video
	autoplay loop muted
	src="seattle.mp4"
>
	<!-- <track kind="captions" /> -->
</video>

<!-- <h1>Caminandes: Llamigos</h1> -->
<!-- <p>From <a href="https://studio.blender.org/films">Blender Studio</a>. CC-BY</p> -->
<!-- <video
	poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
	src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
	on:mousedown={handleMousedown}
	on:mouseup={handleMouseup}
>
	<track kind="captions" />
</video> -->


<!-- <iframe
	width="480"
	height="300"
	src="https://www.youtube.com/embed/YRO6r1mmBwU"
	title="Seattle Automated Cars Parking"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe> -->
<div class="mt-16 flex flex-col space-y-1">
	<Text text={$t("start.text1")} />
	<Text text={$t("start.text2")} />
	<!-- <Text text={$t("ùstart.text3")} /> -->
</div>
<div class="text-9xl">&#9759;</div>
<!-- <div class="text-6xl">&darr;</div> -->
