const init = function (e) {
  let submit1 = document.querySelector("#submit1");
  let submit2 = document.querySelector("#submit2");
  let data1 = {};
  let data2 = {};

  submit1.addEventListener("click", function () {
    data1 = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      summary: document.getElementById("summary").value,
      workHistory: {
        history1: {
          role: document.getElementById("role1").value,
          date_start: document.getElementById("date1start").value,
          date_end: document.getElementById("date1end").value,
          description: document.getElementById("description1").value,
          location: document.getElementById("location1").value,
        },
        history2: {
          role: document.getElementById("role2").value,
          date_start: document.getElementById("date2start").value,
          date_end: document.getElementById("date2end").value,
          description: document.getElementById("description2").value,
          location: document.getElementById("location2").value,
        },
        history3: {
          role: document.getElementById("role3").value,
          date_start: document.getElementById("date3start").value,
          date_end: document.getElementById("date3end").value,
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
    console.log(data1);
    localStorage.setItem("data", JSON.stringify(data1));
    window.document.location = "template-one.html";
  });

  submit2.addEventListener("click", function () {
    data2 = {};
    console.log(data2);
    localStorage.setItem("data", JSON.stringify(data2));
    window.document.location = "template-two.html";
  });
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
