var doc = new jsPDF("p", "", [1194, 2011]);
var imgData = "data:image/jpeg;base64";
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
