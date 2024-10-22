<script>
  import { PUBLIC_CAMERA_SRC } from "$env/static/public";
  import { onMount } from "svelte";

  let video;
  let canvas;
  let photo;
  // let startButton;

  onMount(() => {
    //   const width = 320; // We will scale the photo width to this
    //   let height = 0; // This will be computed based on the input stream
    //   video = document.getElementById("video");
    //   canvas = document.getElementById("canvas");
    //   photo = document.getElementById("photo");
    //   startbutton = document.getElementById("startbutton");
    //   startbutton.addEventListener(
    //     "click",
    //     (ev) => {
    //       takepicture();
    //       ev.preventDefault();
    //     },
    //     false
    //   );
    //   function clearphoto() {
    //     const context = canvas.getContext("2d");
    //     context.fillStyle = "#AAA";
    //     context.fillRect(0, 0, canvas.width, canvas.height);
    //     const data = canvas.toDataURL("image/png");
    //     photo.setAttribute("src", data);
    //   }
    //   function takepicture() {
    //     console.log("Ciao");
    //     const context = canvas.getContext("2d");
    //     if (width && height) {
    //       canvas.width = width;
    //       canvas.height = height;
    //       context.drawImage(video, 0, 0, width, height);
    //       const data = canvas.toDataURL("image/png");
    //       photo.setAttribute("src", data);
    //     } else {
    //       clearphoto();
    //     }
    //   }
  });
</script>

<div>
  <p>picamera video streaming</p>
  <iframe
    bind:this={video}
    id="video"
    src={PUBLIC_CAMERA_SRC}
    title="picamera video streaming"
    width="480"
    height="360"
    scrolling="no"
    marginwidth="0"
    marginheight="0"
    frameborder="0"
  ></iframe>
  <button>Take photo</button>
</div>
<canvas bind:this={canvas} id="canvas"> </canvas>
<div class="output">
  <img
    bind:this={photo}
    id="photo"
    alt="The screen capture will appear in this box."
  />
</div>

<style>
  #canvas {
    display: none;
  }
  #startbutton {
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    bottom: 32px;
    background-color: rgb(0 150 0 / 50%);
    border: 1px solid rgb(255 255 255 / 70%);
    box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
    font-size: 14px;
    font-family: "Lucida Grande", "Arial", sans-serif;
    color: rgb(255 255 255 / 100%);
    min-width: 120px;
    min-height: 40px;
    /* top: 100px; */
  }
</style>
