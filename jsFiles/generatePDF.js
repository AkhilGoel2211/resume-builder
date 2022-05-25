function Convert_HTML_To_PDF() {
  let btnElement = document.getElementById("generatePDF");
  btnElement.remove();
  window.print();
  document.body.appendChild(btnElement);
}



// let doc = new jsPDF();
// let specialElementHandlers = {
//     '#pdf': function (element, renderer) {
//         return true;
//     }
// };


// function Convert_HTML_To_PDF() {
//   let pdf = new jsPDF('p', 'pt', 'a4');
//   pdf.addHTML($('#container'))[0], function() {
//     pdf.save('Test.pdf');
//   }
// }
     

// $('#generatePDF').click(function () {
//     doc.fromHTML($('#container').html(), 15, 15, {
//         'width': 880,
//             'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample_file.pdf');
// });


// async function generatePDF() {
//     let downloading = document.getElementById("container");
//     let doc = new jsPDF('l', 'pt');
//     await html2canvas(downloading, {
//         width: 900,
//     }).then((canvas) => {
//     doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5, 880, 1244);
// })
// doc.save("Document.pdf");
// }


// $(function () {
//     $("#downloadButton").click(function () {
//         var contents = $("#container").html();
//         var frame1 = $('<iframe />');
//         frame1[0].name = "frame1";
//         frame1.css({ "position": "absolute", "top": "-1000000px" });
//         $("body").append(frame1);
//         var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
//         frameDoc.document.open();
//         //Create a new HTML document.
//         frameDoc.document.write('<html><head><title>DIV Contents</title>');
//         frameDoc.document.write('</head><body>');
//         //Append the external CSS file.
//         frameDoc.document.write('<link href="style.css" rel="stylesheet" type="text/css" />');
//         //Append the DIV contents.
//         frameDoc.document.write(contents);
//         frameDoc.document.write('</body></html>');
//         frameDoc.document.close();
//         setTimeout(function () {
//             window.frames["frame1"].focus();
//             window.frames["frame1"].print();
//             frame1.remove();
//         }, 500);
//     });
// });


// function Convert_HTML_To_PDF() {
//     var elementHTML = document.getElementById('container');  
//     html2canvas(elementHTML, {
//       useCORS: true,
//       onrendered: function(canvas) {
//         var pdf = new jsPDF('p', 'pt', 'a4');
//         let pageHeight = 980;
//         let pageWidth = 900;
//         for (let i = 0; i <= elementHTML.clientHeight / pageHeight; i++) {
//           let srcImg = canvas;
//           let sX = 0;
//           let sY = pageHeight * i; // start 1 pageHeight down for every new page
//           let sWidth = pageWidth;
//           let sHeight = pageHeight;
//           let dX = 0;
//           let dY = 0;
//           let dWidth = pageWidth;
//           let dHeight = pageHeight;
  
//           window.onePageCanvas = document.createElement("canvas");
//           onePageCanvas.setAttribute('width', pageWidth);
//           onePageCanvas.setAttribute('height', pageHeight);
//           var ctx = onePageCanvas.getContext('2d');
//           ctx.drawImage(srcImg, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
  
//           var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);
//           var width = onePageCanvas.width;
//           var height = onePageCanvas.clientHeight;
  
//           if (i > 0) // if we're on anything other than the first page, add another page
//             pdf.addPage(595, 841); // 8.5" x 12" in pts (inches*72)
  
//           pdf.setPage(i + 1); // now we declare that we're working on that page
//           pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width * .62), (height * .62)); // add content to the page
//         }
              
//         // Save the PDF
//         pdf.save('document.pdf');
//       }
//     });
//   }


// function printDiv(divName) {
//   var printContents = document.getElementById(divName).innerHTML;
//   var originalContents = document.body.innerHTML;
//   document.body.innerHTML = printContents;
//   window.print();
//   document.body.innerHTML = originalContents;
// }