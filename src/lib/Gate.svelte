<script>
  // import { PUBLIC_API } from "$env/static/public";
  import { getContext, onMount } from "svelte";
  import { t } from "$lib/i18n";
  import Text from "$lib/Text.svelte";

  const data = getContext("data-context");

  async function handleTouchEnd() {
    // e.preventDefault();
    // const url = PUBLIC_API + "/unpress"
    // data = await fetch("/api/unpress").then((x) => x.json());
    await fetch("/api/unpress");
  }
  async function handleTouchStart() {
    // e.preventDefault();
    // const url = PUBLIC_API + "/press"
    // data = await fetch("/api/press").then((x) => x.json());
    await fetch("/api/press");
  }

  onMount(() => {
    let btn = document.getElementById("btn-close");
    btn?.addEventListener("touchmove", setActiveState);
    function setActiveState() {
      console.log("setActiveState");
      btn?.click();
    }
  });
</script>

<div class="mb-8">
  {#if $data.successMesg === 1}
    <Text text={$t("gate.text1")} />
  {:else if $data.successMesg === 2}
    <Text text={$t("gate.text2")} />
  {:else if $data.successMesg === 3}
    <Text text={$t("gate.text3")} />
  {:else if $data.successMesg === 4}
    <Text text={$t("gate.text4")} />
  {:else}
    <Text text="UNKNOWN" />
  {/if}
</div>

<button
  id="btn-close"
  class="w-[256px] h-[256px] rounded-full bg-yellow-500 border-4 border-yellow-600 opacity-100 shadow-2xl shadow-slate-700 active:bg-gradient-to-br from-amber-500 to-amber-600 font-bold text-2xl text-amber-700 active:text-amber-600"
  on:touchend={handleTouchEnd}
  on:touchstart={handleTouchStart}>PUSH TO CLOSE</button
>
