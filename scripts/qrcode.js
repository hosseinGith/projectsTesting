const qrCodeFiles = document.querySelector("#qrCodeFiles");
const qrcodeBtn = document.querySelector("#qrCodeReader");

qrcodeBtn.addEventListener("click", () => {
  startSteam();
});
function qrCodeFun(img) {
  QCodeDecoder().decodeFromImage(img, function (er, res) {
    alert(utf8.decode(res));
  });
}
async function startSteam() {
  let video = document.createElement("video");
  video.setAttribute("playsinline", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("muted", "");
  video.style = "width:100%;height:100%;position:fixed;top:0;left:0";

  /* Setting up the constraint */
  let facingMode = "environment"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
  let constraints = {
    audio: false,
    video: {
      facingMode: facingMode,
    },
  };

  /* Stream it to video element */
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function success(stream) {
      video.srcObject = stream;

      setInterval(() => {
        var canvas = document.getElementById("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

        /** Code to merge image **/
        /** For instance, if I want to merge a play image on center of existing image **/
        const playImage = new Image();
        playImage.src = "path to image asset";
        playImage.onload = () => {
          const startX = video.videoWidth / 2 - playImage.width / 2;
          const startY = video.videoHeight / 2 - playImage.height / 2;
          canvas
            .getContext("2d")
            .drawImage(
              playImage,
              startX,
              startY,
              playImage.width,
              playImage.height
            );
          canvas.toBlob = (blob) => {
            const img = new Image();
            img.src = window.URL.createObjectUrl(blob);
            alert(blob);
            qrCodeFun(blob);
          };
        };
      });
    });
  document.body.appendChild(video);
}
