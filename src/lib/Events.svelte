<script>
  import { onMount } from "svelte";
  import { t, locale, locales } from "$lib/i18n";

  let h = 0,
    w = 0;
  let pin = "";
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : $t("pin.text1");

  const digit = async (key) => {
    pin += key;
    console.log(key, pin, pin.length);
    if (pin.length >= 3) {
      // let res = await fetch(PUBLIC_API + '/pin').then((x) => x.json());
      // const url = PUBLIC_API + '/pin'
      const url = "/api/pin";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ pin }),
      });
      const json = await res.json();
      console.log(json);
      pin = "";
    }
  };

  onMount(async () => {
    w = window.innerWidth;
    h = window.innerHeight;
    console.log("h", h, "w", w);
  });
</script>

<div>{view}</div>
<div class="my-16 grid grid-cols-4 gap-3">
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("1")}>1</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("2")}>2</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("3")}>3</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("C")}>C</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("4")}>4</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("5")}>5</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("6")}>6</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("D")}>D</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("7")}>7</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("8")}>8</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("9")}>9</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("E")}>E</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("A")}>A</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("0")}>0</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("B")}>B</button
  >
  <button
    class="font-semibold py-2 px-6 border-2 rounded-lg"
    on:touchstart={() => digit("F")}>F</button
  >
</div>

<div class="space-x-3 space-y-8">
  <div>h: {h} w: {w} pin: {pin ? pin : null} length: {pin.length}</div>

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
