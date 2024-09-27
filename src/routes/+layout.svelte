<script>
  import { PUBLIC_WS } from "$env/static/public";
  import { onMount } from "svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { goto } from "$app/navigation";
  import "../app.css";
  import Clock from "$lib/Clock.svelte";
  import Comm from "$lib/Comm.svelte";
  import "@fontsource/roboto";

  let h = 0,
    w = 0;
  let comm = false;
  let page = 0;
  const pageNr = writable(page);
  setContext("comm-context", { pageNr });

  onMount(() => {
    w = window.innerWidth;
    h = window.innerHeight;

    const wsUri = PUBLIC_WS + "/info";
    const websocket = new WebSocket(wsUri);
    let pingInterval = 1000;

    // function sendMessage(message) {
    // 	console.log(`SENT: ${message}`);
    // 	websocket.send(message);
    // }

    websocket.onopen = (e) => {
      console.log("CONNECTED");
      // sendMessage('ping');
      // pingInterval = setInterval(() => {
      // 	sendMessage('ping');
      // }, 5000);
    };

    websocket.onclose = (e) => {
      console.log("DISCONNECTED");
      clearInterval(pingInterval);
    };

    websocket.onerror = (e) => {
      console.log(`ERROR: ${e}`);
    };

    websocket.onmessage = (e) => {
      // console.log(`RECEIVED: ${e.data}`);
      const message = JSON.parse(e.data);
      comm = message["comm"];
      page = message["page"];
      // console.log(comm, page)
      // setContext('comm-context', { pageNr: page });
      pageNr.set(page);

      switch (page) {
        case 0:
          goto("/globe");
          break;
        case 7:
          goto("/faceid");
          break;
        default:
          goto("/");
      }
    };
  });
</script>

<div class="w-[480px]">
  <div class="absolute top-0 text-center py-3 w-[480px]">
    <div class="flex">
      <div class="flex-none w-28 h-14">
        <Comm {comm} />
      </div>
      <div class="grow h-14">KIOSK 01</div>
      <div class="flex-none w-28 h-14">
        <Clock />
      </div>
    </div>
  </div>

  <div class="flex flex-col h-screen">
    <div class="m-auto text-center bg-opacity-0">
      <slot />
    </div>
  </div>

  <div
    class="absolute bottom-0 flex justify-center items-center py-3 w-[480px]"
  >
    w: {w} h: {h} © {new Date().getFullYear()} Sotefin SA
  </div>
</div>
