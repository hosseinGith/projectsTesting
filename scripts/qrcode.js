function main() {
  const qrCodeFiles = document.querySelector("#qrCodeFiles");
  const qrcodeBtn = document.querySelector("#qrCodeReader");
  const scanCloseBtn = document.querySelector("#scanCloseBtn");

  let interValStream;

  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  scanCloseBtn.addEventListener("click", () => {
    document.querySelector("#reader").style.display = "none";
    document.querySelector("#reader video").remove();
    clearInterval(interValStream);
    interValStream = null;
  });

  function qrCodeFun(img) {
    QCodeDecoder().decodeFromImage(img, function (er, res) {
      alert(utf8.decode(res));
      document.querySelector("#reader").style.display = "none";
      document.querySelector("#reader video").remove();
      clearInterval(interValStream);
      interValStream = null;
    });
  }
  async function startSteam() {
    let video = document.createElement("video");
    video.id = "streamVideo";
    video.setAttribute("playsinline", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
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
        interValStream = setInterval(() => {
          let img = new Image();
          var canvas = document.getElementById("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          canvas
            .getContext("2d")
            .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
          qrCodeFun((img.src = canvas.toDataURL("image/png")));
        });
      });
    document.querySelector("#reader").style.display = "block";
    document.querySelector("#reader").appendChild(video);
  }
  qrcodeBtn.addEventListener("click", () => {
    if (interValStream != null) return clearInterval(interValStream);
    startSteam();
  });
}
document.addEventListener("DOMContentLoaded", main);
