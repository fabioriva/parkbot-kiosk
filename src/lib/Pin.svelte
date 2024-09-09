<script>
  // import { PUBLIC_API } from "$env/static/public";
  import { t, locale, locales } from "$lib/i18n";
  import Key from "./Key.svelte";
  import Text from "./Text.svelte";

  let pin = "";
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : $t("pin.text1");

  async function handleSubmit(e) {
    // console.log(e.detail.key);
    pin += e.detail.key;
    console.log(e.detail.key, pin);
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
  }

  async function press(key) {
    pin += key
    console.log(key, pin);
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
}
</script>

<Text text={view} />



<div class="mt-16 grid grid-cols-4 gap-3">
  <!-- <Key key={"1"} on:digit={handleSubmit} /> -->
  <button
  class="{Number('1')
    ? 'text-slate-700 border-slate-700 active:bg-slate-700'
    : 'text-blue-700 border-blue-700 active:bg-blue-700'} bg-transparent active:text-white text-6xl font-semibold py-2 px-6 border-2 active:border-transparent rounded-lg ring-offset-2 ring-2"
  on:touchstart={() => press('1')}
>
  1
</button>
  <Key key={"2"} on:digit={handleSubmit} />
  <Key key={"3"} on:digit={handleSubmit} />
  <Key key={"C"} on:digit={handleSubmit} />
  <Key key={"4"} on:digit={handleSubmit} />
  <Key key={"5"} on:digit={handleSubmit} />
  <Key key={"6"} on:digit={handleSubmit} />
  <Key key={"D"} on:digit={handleSubmit} />
  <Key key={"7"} on:digit={handleSubmit} />
  <Key key={"8"} on:digit={handleSubmit} />
  <Key key={"9"} on:digit={handleSubmit} />
  <Key key={"E"} on:digit={handleSubmit} />
  <Key key={"A"} on:digit={handleSubmit} />
  <Key key={"0"} on:digit={handleSubmit} />
  <Key key={"B"} on:digit={handleSubmit} />
  <Key key={"F"} on:digit={handleSubmit} />
</div>
