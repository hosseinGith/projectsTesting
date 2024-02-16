const qrCodeFiles = document.querySelector("#qrCodeFiles");
const qrcodeBtn = document.querySelector("#qrCodeReader");
qrcodeBtn.addEventListener("click", () => {
  qrCodeFiles.click();
});
qrCodeFiles.addEventListener("change", () => {
  let img = (new Image().src = URL.createObjectURL(qrCodeFiles.files[0]));
  QCodeDecoder().decodeFromImage(img, function (er, res) {
    alert(res);
  });
});
