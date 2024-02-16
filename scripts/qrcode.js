const qrCodeFiles = document.querySelector("#qrCodeFiles");
const qrcodeBtn = document.querySelector("#qrCodeReader");

function startScan() {
  function onScanSuccess(decodedText, decodedResult) {
    alert(decodedText, decodedResult);
  }

  function onScanError(errorMessage) {}

  var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    disableFlip: true,
  });
  html5QrcodeScanner.render(onScanSuccess, onScanError);
}
startScan();

let reqBtn = document.querySelector("#reader__camera_permission_button");
reqBtn.click();
qrcodeBtn.addEventListener("click", () => {
  let reader = document.querySelector("#reader");
  let startBtn = document.querySelector("#reader button");
  reader.style = `
    position: fixed;
    width: 100%;
    height: 100%;
    border: 0;
    `;
  reader.querySelector("video").controls = false;
  reader.querySelectorAll("button").forEach((item, index) => {
    item.style = `display:none;`;
  });
  reader.querySelector("select").style = `display:none;`;
  reader.querySelector(">div:first-child").style = `display:none;`;
  reader.querySelector("img").style = `display:none;`;
  reader.querySelector("#reader__dashboard").style = `display:none;`;
  // qrCodeFiles.click();
  startBtn.click();
});
