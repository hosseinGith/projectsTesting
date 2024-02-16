const qrCodeFiles = document.querySelector("#qrCodeFiles");
const qrcodeBtn = document.querySelector("#qrCodeReader");

function startScan() {
  function onScanSuccess(decodedText, decodedResult) {
    alert(decodedText, decodedResult);
    let reqBtn = document.querySelector("#reader");
    reqBtn.style = `
    position: fixed;
    width: 100%;
    height: 100%;
    border: 0;
    `;
    reqBtn.querySelector("video").controls = false;
    reqBtn.querySelectorAll("button").forEach((item, index) => {
      item.style = `display:none;`;
    });
    reqBtn.querySelector("select").style = `display:none;`;
    reqBtn.querySelector(">div:first-child").style = `display:none;`;
    reqBtn.querySelector("img").style = `display:none;`;
    reqBtn.querySelector("#reader__dashboard").style = `display:none;`;
  }

  function onScanError(errorMessage) {
    alert("error");
  }

  var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
    fps: 10,
    qrbox: 250,
    disableFlip: true,
  });
  html5QrcodeScanner.render(onScanSuccess, onScanError);
}
startScan();

qrcodeBtn.addEventListener("click", () => {
  let reqBtn = document.querySelector("#reader__camera_permission_button");
  // qrCodeFiles.click();
  reqBtn.click();
});
