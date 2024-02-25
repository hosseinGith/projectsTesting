var doc = new jsPDF("p", "", [1194, 2011]);
var imgData = "data:image/jpeg;base64";

window.open(URL.createObjectURL(doc.output("blob")));
