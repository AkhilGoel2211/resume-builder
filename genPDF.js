let doc = new jsPDF();
let specialElementHandlers = {
    '#pdf': function (element, renderer) {
        return true;
    }
};
    
     
$('#generatePDF').click(function () {
    doc.fromHTML($('#container').html(), 15, 15, {
        'width': 880,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample_file.pdf');
});
