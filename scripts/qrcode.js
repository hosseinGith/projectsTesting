const qrcodeBtn = document.querySelector("#qrCodeReader");
const video = document.createElement("video");
/* View in fullscreen */
function openFullscreen() {
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

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
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

      lastResult = decodedText;
      resultContainer.innerHTML += `<div>[${countResults}] - ${decodedText}</div>`;
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
});
qrcodeBtn.addEventListener("click", () => {
  const ReqBtn = document.querySelector(
    "#qr-reader-results__camera_permission_button"
  );
  const reqSelect = document.querySelector("qr-reader-results select");
  alert(reqSelect.value);
  ReqBtn.click();
});
