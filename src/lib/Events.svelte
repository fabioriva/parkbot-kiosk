<script>
  import { t, locale, locales } from "$lib/i18n";

  let pin = "";
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : $t("pin.text1");
</script>

<div class="space-x-3 space-y-8">
  <div>{view}</div>

  <button
    on:click={() => {
      console.log("click");
      pin += "1";
    }}
  >
    click
  </button>

  <button
    on:mousedown={() => {
      console.log("mousedown");
      pin += "2";
    }}
  >
    mousedown
  </button>

  <button
    on:touchstart={() => {
      console.log("touchstart");
      pin += "3";
    }}
  >
    touchstart
  </button>

  <div>
    <button on:click={() => (pin = "")}>clear</button>
  </div>
</div>
