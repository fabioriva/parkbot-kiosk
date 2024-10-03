<script>
  // import { PUBLIC_API } from "$env/static/public";
  import { getContext, onMount } from "svelte";
  import { t } from "$lib/i18n";
  import Text from "$lib/Text.svelte";

  const data = getContext("data-context");

  async function handleTouchEnd(e) {
    // console.log(event, 'UN-PRESSED');
    // const url = PUBLIC_API + "/unpress"
    // data = await fetch("/api/unpress").then((x) => x.json());
    await fetch("/api/unpress");
  }
  async function handleTouchStart(e) {
    // console.log(event, 'PRESSED');
    // const url = PUBLIC_API + "/press"
    // data = await fetch("/api/press").then((x) => x.json());
    await fetch("/api/press");
  }

  onMount(() => {
    const button = document.getElementById("close"); // select the button element
    // console.log("element", button);
    button.addEventListener("click", function () {
      button.classList.toggle("active:shadow-slate-900"); // toggle the 'selected' class on click
    });
  });
</script>

<div class="flex flex-col space-y-16">
  <!-- <Text text={$t("gate.text1")} /> -->
  <!-- <Text text={$t("gate.text2")} /> -->
  <Text text={$t("gate.text0")} />

  {#if $data.successMesg === 1}
    <Text text={$t("gate.text1")} />
  {:else if $data.successMesg === 2}
    <Text text={$t("gate.text2")} />
  {:else if $data.successMesg === 3}
    <Text text={$t("gate.text3")} />
  {:else if $data.successMesg === 4}
    <Text text={$t("gate.text4")} />
  {/if}
</div>

<button
  id="close"
  type="button"
  class="rounded-full my-16 p-32 bg-amber-500 bg-gradient-to-br from-amber-300 via-amber-500 active:bg-amber-700 shadow-2xl"
  on:touchend={handleTouchEnd}
  on:touchstart={handleTouchStart}
/>
