<script>
  import { onMount } from "svelte";
  import createGlobe from "cobe";

  /**
   * @type {HTMLCanvasElement}
   */
  let canvas;
  let phi = 0;

  onMount(() => {
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [46.003601, 8.95362], size: 0.1 }, // Lugano
        { location: [37.7595, -122.4367], size: 0.05 }, // Seattle
        { location: [40.7128, -74.006], size: 0.05 }, // New York
        { location: [28.613939, 77.209023], size: 0.05 }, // New Delhi
        { location: [25.204849, 55.270782], size: 0.05 }, // Dubai
        { location: [39.904202, 116.407394], size: 0.05 }, // Beijing
        { location: [-36.848461, 174.763336], size: 0.05 }, // Auckland
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });
  });
</script>

<main class="App">
  <!-- <img src="/sotefin.png" alt="Sotefin SA" /> -->
  <!-- <p class="pt-6">Computerized Parking Systems Worldwide</p> -->
  <h1 class="uppercase">Sotefin Worlwide</h1>
  <p>
    A lightweight (5kB) WebGL globe lib:
    <a href="https://github.com/shuding/cobe" target="_blank"> GitHub </a>
  </p>
  <canvas
    bind:this={canvas}
    style="width: 400px; height: 400px"
    width="800"
    height="800"
  />
</main>

<style>
  :global(body) {
    background: #000;
    color: #fff;
  }

  .App {
    display: grid;
    place-items: center;
    place-content: center;
    height: 100vh;
  }

  a {
    color: royalblue;
  }
</style>
