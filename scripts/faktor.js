var gadget = new cloudprint.Gadget();
gadget.setPrintButton(cloudprint.Gadget.createDefaultPrintButton("gcpPrint"));
gadget.setPrintDocument(
  "text/html",
  "Print",
  document.documentElement.innerHTML
);
