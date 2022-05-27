function Convert_HTML_To_PDF() {
  let btnElement = document.getElementById("generatePDF");
  btnElement.remove();
  window.print();
  document.body.appendChild(btnElement);
}
