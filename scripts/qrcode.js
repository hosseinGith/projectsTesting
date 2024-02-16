const qrCodeFiles = document.querySelector("#qrCodeFiles");
const qrcodeBtn = document.querySelector("#qrCodeReader");

qrcodeBtn.addEventListener("click", () => {});

function startSteam() {
  let video = document.createElement("video");
  video.setAttribute("playsinline", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("muted", "");
  video.style = "width:100%;height:100%;position:fixed;top:0;left:0";

  /* Setting up the constraint */
  let facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
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
      alert(video.srcObject);
    });
  document.body.appendChild(video);
}
