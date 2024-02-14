function decodeQrCode(img) {
  QCodeDecoder().decodeFromImage(img, function (er, res) {
    console.log(utf8.decode(res));
  });
}
decodeQrCode((new Image().src = "./assets/images/url.png"));
