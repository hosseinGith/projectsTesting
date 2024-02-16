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
      urlImg = video.srcObject = stream;
      setInterval(() => {
        qrCodeFun(video.srcObject);
      });
    });
  document.body.appendChild(video);
}
