<script>
  import { getContext } from "svelte";
  import Gate from "$lib/Gate.svelte";
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
  <div class="space-y-8">
    <img src="icons8-success-160.png" alt="success" class="mx-auto" />
    <!-- <p class="text-8xl">✅</p> -->
    <p class="leading-[1.10] px-8 text-5xl uppercase">Success message</p>
  </div>
{:else if $pageNr === 5}
  <div class="space-y-8">
    <img src="icons8-error-160.png" alt="error" class="mx-auto" />
    <!-- <p class="text-8xl">❌</p> -->
    <p class="leading-[1.10] px-8 text-5xl uppercase">Error message</p>
  </div>
{:else if $pageNr === 6}
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
  <div>Page {$pageNr}</div>
  <!-- <Events /> -->
{/if}
