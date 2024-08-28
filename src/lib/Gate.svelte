<script>
  // import { PUBLIC_API } from "$env/static/public";
  import { t } from "$lib/i18n";
  import Text from "$lib/Text.svelte";

  let data = { message: "..." };

  async function handleTouchEnd(event) {
    // console.log(event, 'UN-PRESSED');
		// const url = PUBLIC_API + "/unpress"
    data = await fetch("/api/unpress").then((x) => x.json());
  }
  async function handleTouchStart(event) {
    // console.log(event, 'PRESSED');
		// const url = PUBLIC_API + "/press"
    data = await fetch("/api/press").then((x) => x.json());
  }
</script>

<div class="flex flex-col space-y-1">
  <Text text={$t("gate.text1")} />
  <Text text={$t("gate.text2")} />
</div>

<button
  type="button"
  class="rounded-full my-16 p-24 bg-yellow-300 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 active:bg-gradient-to-br ring-offset-3 ring ring-yellow-500 shadow-2xl shadow-slate-700"
  on:touchend={handleTouchEnd}
  on:touchstart={handleTouchStart}
>
</button>

<h1 class="text-6xl text-slate-900 font-semibold">{data.message}</h1>
