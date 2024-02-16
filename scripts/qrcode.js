const qrCodeFiles = document.querySelector("#qrCodeFiles");
const qrcodeBtn = document.querySelector("#qrCodeReader");

function startScan() {
  function onScanSuccess(decodedText, decodedResult) {
    let reader = document.querySelector("#reader");
    reader.querySelector("#reader select").style = `display:none;`;
    alert(decodedText, decodedResult);
    reader.querySelector("video").controls = false;
  }
  function onScanError(errorMessage) {}

  var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    disableFlip: true,
  });
  html5QrcodeScanner.render(onScanSuccess, onScanError);
  // setTimeout(() => {
  // }, 1000);
}
startScan();
let reqBtn = document.querySelector("#reader__camera_permission_button");
reqBtn.addEventListener("click", () => {});
reqBtn.click();
qrcodeBtn.addEventListener("click", () => {
  let reader = document.querySelector("#reader");
  console.log(reader.style);
  let startBtn = document.querySelector("#reader button");
  reader.style.position = "fixed";
  reader.style.display = "block";
  reader.style.width = " 100%";
  reader.style.height = " 100%";
  reader.style.border = 0;
  reader.querySelectorAll("button").forEach((item, index) => {
    item.style = `display:none;`;
  });

  reader.querySelector("div:first-child").style = `display:none;`;
  reader.querySelector("img").style = `display:none;`;
  reader.querySelector("#reader__dashboard").style = `display:none;`;
  // qrCodeFiles.click();
  startBtn.click();
});
