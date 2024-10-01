<script>
  // import { PUBLIC_API } from "$env/static/public";
  import { t } from "$lib/i18n";
  import Text from "$lib/Text.svelte";

  // let data = null; // { message: "..." };

  async function handleTouchEnd(event) {
    // console.log(event, 'UN-PRESSED');
    // const url = PUBLIC_API + "/unpress"
    // data = await fetch("/api/unpress").then((x) => x.json());
    await fetch("/api/unpress");
  }
  async function handleTouchStart(event) {
    // console.log(event, 'PRESSED');
    // const url = PUBLIC_API + "/press"
    // data = await fetch("/api/press").then((x) => x.json());
    await fetch("/api/press");
  }

  document.addEventListener("touchstart", touch2Mouse, true);
  document.addEventListener("touchmove", touch2Mouse, true);
  document.addEventListener("touchend", touch2Mouse, true);

  function touch2Mouse(e) {
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch (e.type) {
      case "touchstart":
        mouseEv = "mousedown";
        break;
      case "touchend":
        mouseEv = "mouseup";
        break;
      case "touchmove":
        mouseEv = "mousemove";
        break;
      default:
        return;
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(
      mouseEv,
      true,
      true,
      window,
      1,
      theTouch.screenX,
      theTouch.screenY,
      theTouch.clientX,
      theTouch.clientY,
      false,
      false,
      false,
      false,
      0,
      null
    );
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
  }
</script>

<!-- <div class="flex flex-col space-y-1">
  <Text text={$t("gate.text1")} />
  <Text text={$t("gate.text2")} />
</div> -->

<!-- {#if data}
  <p class="h-16 uppercase font-bold text-5xl">{data.message}</p>
{:else}
  <div class="flex flex-col space-y-1">
    <Text text={$t("gate.text1")} />
    <Text text={$t("gate.text2")} />
  </div>
{/if} -->

<div class="flex flex-col space-y-1">
  <Text text={$t("gate.text1")} />
  <Text text={$t("gate.text2")} />
</div>

<button
  type="button"
  class="rounded-full my-16 p-32 bg-amber-500 bg-gradient-to-br from-amber-300 via-amber-500 active:bg-amber-700 shadow-2xl shadow-slate-700 active:shadow-slate-900"
  on:touchend={handleTouchEnd}
  on:touchstart={handleTouchStart}
/>

<!-- <button
  type="button"
  class="rounded-full my-16 p-24 bg-yellow-300 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 active:bg-gradient-to-br ring-offset-3 ring ring-yellow-500 shadow-2xl shadow-slate-700"
  on:touchend={handleTouchEnd}
  on:touchstart={handleTouchStart}
>
</button> -->

<!-- <h1 class="text-6xl text-slate-900 font-semibold">
  {data ? data.message : ""}
</h1> -->
