<script>
  import { getContext } from "svelte";
  // import FaceId from "$lib/FaceId.svelte";
  import Gate from "$lib/Gate.svelte";
  import Globe from "$lib/Globe.svelte";
  import Pin from "$lib/Pin.svelte";
  import Start from "$lib/Start.svelte";
  // import Events from "$lib/Events.svelte";

  const { pageNr } = getContext("comm-context");
</script>

{#if $pageNr === 1}
  <Start />
{:else if $pageNr === 2}
  <Gate />
{:else if $pageNr === 3}
  <Pin />
{:else if $pageNr === 4}
  <!-- <FaceId /> -->
  <div>
    <p>picamera video streaming</p>
    <iframe
      src="http://192.168.20.201:5000"
      title="picamera video streaming"
      width="360"
      height="280"
      style="margin: auto;"
    ></iframe>
  </div>
{:else}
  <!-- <div>Page {$pageNr}</div> -->
  <!-- <Events /> -->
  <Globe />
{/if}
