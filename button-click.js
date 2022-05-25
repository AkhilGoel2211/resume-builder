const init = function(e) {
	let btn1 = document.querySelector("#item1");
	let btn2 = document.querySelector("#item2");
	let data = {}

	btn1.addEventListener('click', function() {
		data = {
			firstName: document.getElementById("firstName").value,
			lastName: document.getElementById("lastName").value,
			summary: document.getElementById("summary").value,
			workHistory: {
				history1: {
					role: document.getElementById("role1").value,
					date: document.getElementById("date1").value,
					description: document.getElementById("description1").value,
					location: document.getElementById("location1").value,
				},
				history2: {
					role: document.getElementById("role2").value,
					date: document.getElementById("date2").value,
					description: document.getElementById("description2").value,
					location: document.getElementById("location2").value,
				},
				history3: {
					role: document.getElementById("role3").value,
					date: document.getElementById("date3").value,
					description: document.getElementById("description3").value,
					location: document.getElementById("location3").value,
				},
			},
			adress: document.getElementById("adress").value,
			number: document.getElementById("number").value,
			email: document.getElementById("email").value,
			skills: document.getElementById("skills").value,
			degree: document.getElementById("education--degree").value,
			college: document.getElementById("education--college").value,
			affiliation: document.getElementById("affiliation").value,
		};
		console.log(data);
		localStorage.setItem('data', JSON.stringify(data));
		window.document.location = './TemplateOne/template-one.html';

	});
	btn2.addEventListener('click', function() {
		window.document.location = '/TemplateTwo/template-two.html';
	});
};

document.addEventListener('DOMContentLoaded', function() {
	init();});
