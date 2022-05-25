let data1 = JSON.parse(localStorage.getItem('data'));
console.log(data1);

document.getElementById("name").innerHTML = data1.firstName + " " + data1.lastName;
document.getElementById("summary").innerHTML = data1.summary;

for (let key in data1.workHistory) {
    let workDescription = data1.workHistory[key]["description"].split("\n");
    listString = "";
    for (i in workDescription) {
        listString += `<li> ${workDescription[i]} </li>`;
    };

    if (data1.workHistory[key]["role"] !== ''){
        let workDiv = document.createElement('div');
        workDiv.innerHTML = `<h3 class="date" id="role" > ${data1.workHistory[key]["role"]} ,</h3> <p class="date" id="date" > ${data1.workHistory[key]["date"]}</p><p id="location" > ${data1.workHistory[key]["location"]}</p><ul class="work-history--list" id="description">${listString}</ul>`;
        let workHistoryDiv = document.getElementById("work-history");workHistoryDiv.appendChild(workDiv);
    };
    
}

document.getElementById("adress").innerHTML = "&nbsp;&nbsp;" + data1.adress;
document.getElementById("telephone").innerHTML = "&nbsp;&nbsp;" + data1.number;
document.getElementById("email").innerHTML = "&nbsp;&nbsp;" + data1.email;

let skillsArray = (data1.skills).split('\n');
let skillsUL = document.getElementById("skillsUL");
for (i in skillsArray) {
    if (skillsArray[i] !== '') {
        let skillsArrayLi = document.createElement('li');
        skillsArrayLi.innerHTML = skillsArray[i];
        skillsUL.appendChild(skillsArrayLi);
    }
}

document.getElementById("degree").innerHTML = data1.degree;
document.getElementById("university").innerHTML = data1.college;

let affiliationArray = (data1.affiliation).split('\n');
let affiliationUL = document.getElementById("affiliationUL");
for (i in affiliationArray) {
    if (affiliationArray[i] !== '') {
        let affiliaionArrayLi = document.createElement('li');
        affiliaionArrayLi.innerHTML = affiliationArray[i];
        affiliationUL.appendChild(affiliaionArrayLi);
    };
}