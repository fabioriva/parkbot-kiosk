<script>
  import { PUBLIC_CAMERA_SRC } from "$env/static/public";
  import { t } from "$lib/i18n";
  import Text from "$lib/Text.svelte";

  // const VIDEO_SRC = "seattle.mp4"
  // const VIDEO_SRC = "https://sveltejs.github.io/assets/caminandes-llamigos.mp4";
</script>

<div class="space-y-8">
  <!-- <video autoplay loop muted src={VIDEO_SRC} class="px-1" /> -->
  <iframe
    src={PUBLIC_CAMERA_SRC}
    title="picamera video streaming"
    width="480"
    height="270"
    scrolling="no"
    style="margin: auto;"
  ></iframe>
  <div class="flex flex-col">
    <Text text={$t("start.text1")} />
    <Text text={$t("start.text2")} />
  </div>
  <!-- <div class="text-9xl">&#9759;</div> -->
  <!-- <div class="text-6xl">&darr;</div> -->
  <img src="icons8-finger-down-100.png" alt="finger-down" class="mx-auto" />
</div>
