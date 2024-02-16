const qrcodeBtn = document.querySelector("#qrCodeReader");
/* View in fullscreen */
function openFullscreen(video) {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    /* IE11 */
    video.msRequestFullscreen();
  }
}

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
docReady(function () {
  const resultContainer = document.getElementById("qr-reader-results");
  let lastResult,
    countResults = 0;

  var html5QrcodeScanner = new Html5QrcodeScanner(resultContainer.id, {
    fps: 10,
    qrbox: 250,
  });
  function onScanSuccess(decodedText, decodedResult) {
    if (decodedText !== lastResult) {
      ++countResults;
      resultContainer.style.display = "none";
      lastResult = decodedText;
      alert(countResults);
      alert(decodedText);
      // Optional: To close the QR code scannign after the result is found
      html5QrcodeScanner.clear();
    }
  }

  // Optional callback for error, can be ignored.
  function onScanError(qrCodeError) {
    // This callback would be called in case of qr code scan error or setup error.
    // You can avoid this callback completely, as it can be very verbose in nature.
  }

  html5QrcodeScanner.render(onScanSuccess, onScanError);
  const ReqBtn = document.querySelector(
    "#qr-reader-results__camera_permission_button"
  );
  ReqBtn.click();
});
qrcodeBtn.addEventListener("click", () => {
  const select = document.querySelector("#qr-reader-results select");
  const startBtn = document.querySelector("#qr-reader-results button");
  const video = document.querySelector("#qr-reader-results video");
  const container = document.querySelector("#qr-reader-results");
  openFullscreen(video);
  select.children[1].selected = true;
  startBtn.click();
  container.style = `
    display:block;
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top:0;
  `;
});
