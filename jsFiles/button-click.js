const init = function (e) {
  let btn1 = document.querySelector("#item1");
  let btn2 = document.querySelector("#item2");

  btn1.addEventListener("click", function () {
    window.document.location = "./TemplateOne/template-one-form.html";
  });
  btn2.addEventListener("click", function () {
    window.document.location = "./TemplateTwo/template-two-form.html";
  });
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
