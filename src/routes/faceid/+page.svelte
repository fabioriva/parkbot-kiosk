<script>
  import FaceId from "$lib/FaceId.svelte";
</script>

<FaceId />

<!-- <script>
  import * as faceapi from "face-api.js";
  import { onMount } from "svelte";
  import { t } from "$lib/i18n";
  import Text from "$lib/Text.svelte";

	const MODEL_URL = '/models';
	const labels = ['fabio', 'raffa', 'giacomo', 'marco', 'roberta', 'elio'];

  onMount(async () => {
    try {
      // load the models
      await Promise.all([
        faceapi.loadSsdMobilenetv1Model(MODEL_URL),
        faceapi.loadTinyFaceDetectorModel(MODEL_URL),
        faceapi.loadFaceLandmarkModel(MODEL_URL),
        faceapi.loadFaceRecognitionModel(MODEL_URL),
      ]);
      // access webcam
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      const videoFeedEl = document.getElementById("video-feed");
      videoFeedEl.srcObject = stream;
      // make the canvas the same size and in the same location as our video feed
      const canvas = document.getElementById("overlay");
      canvas.style.left = videoFeedEl.offsetLeft;
      canvas.style.top = videoFeedEl.offsetTop;
      canvas.height = videoFeedEl.height;
      canvas.width = videoFeedEl.width;
      console.log(canvas);
      // ...
      const labeledFaceDescriptors = await Promise.all(
        labels.map(async (label) => {
          // fetch image data from urls and convert blob to HTMLImage element
          const imgUrl = `/people/${label}.png`;
          const img = await faceapi.fetchImage(imgUrl);

          // detect the face with the highest score in the image and compute it's landmarks and face descriptor
          const fullFaceDescription = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();

          if (!fullFaceDescription) {
            throw new Error(`no faces detected for ${label}`);
          }

          const faceDescriptors = [fullFaceDescription.descriptor];
          return new faceapi.LabeledFaceDescriptors(label, faceDescriptors);
        })
      );
      // ...
      setInterval(async () => {
        let fullFaceDescriptions = await faceapi
          .detectAllFaces(videoFeedEl)
          .withFaceLandmarks()
          .withFaceDescriptors();

        fullFaceDescriptions = faceapi.resizeResults(
          fullFaceDescriptions,
          videoFeedEl
        );

        // 0.6 is a good distance threshold value to judge whether the descriptors match or not
        const maxDescriptorDistance = 0.6;
        const faceMatcher = new faceapi.FaceMatcher(
          labeledFaceDescriptors,
          maxDescriptorDistance
        );
        const results = fullFaceDescriptions.map((fd) =>
          faceMatcher.findBestMatch(fd.descriptor)
        );
        // console.log(results);
        // draw
        //first, clear the canvas
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

        results.forEach((bestMatch, i) => {
          const box = fullFaceDescriptions[i].detection.box;
          const text = bestMatch.toString();
          const drawBox = new faceapi.draw.DrawBox(box, { label: text });
          drawBox.draw(canvas);
        });
      }, 30);
    } catch (err) {
      console.log(err);
    }
  });
</script>

<div id="container">
  <Text text={$t("face.text1")} />
  <video id="video-feed" width="320" height="240" autoplay muted></video>
  <canvas id="overlay" />
</div>

<style>
  #container {
    position: relative;
  }
	#overlay {
		position: absolute;
	}
</style> -->
