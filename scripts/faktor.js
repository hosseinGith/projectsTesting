const doc = new jsPDF();
const screenshotTarget = document.querySelector("#screenShot");
html2canvas(screenshotTarget).then((canvas) => {
  let dataURL = canvas.toDataURL();
  new jsPDF({
    orientation: "l",
    unit: "pt",
    format: "a1",
  });
  let a = document.createElement("a");
  a.href = dataURL;
  a.download = "asd.png";
  a.click();
  doc.addImage(dataURL, "JPEG", 0, 0, canvas.width, canvas.height);
  doc.save("asd.pdf");
});
