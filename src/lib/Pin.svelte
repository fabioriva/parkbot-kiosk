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
</script>

<Text text={view} />

<div class="mt-16 grid grid-cols-4 gap-3">
  <Key key={"1"} on:digit={handleSubmit} />
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
