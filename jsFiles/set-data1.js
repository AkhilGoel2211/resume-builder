let data = JSON.parse(localStorage.getItem('data'));
console.log(data);

document.getElementById("name").innerHTML = data.firstName + " " + data.lastName;

let summaryArray = (data.summary).split('\n');
let summaryDiv = document.getElementById("summary");
for (i in summaryArray) {
    if (summaryArray[i] !== '') {
        let summaryArrayP = document.createElement('p');
        summaryArrayP.innerHTML = summaryArray[i];
        summaryDiv.appendChild(summaryArrayP);
    }
}

for (let key in data.workHistory) {
    let workDescription = data.workHistory[key]["description"].split("\n");
    listString = "";
    for (i in workDescription) {
        listString += `<li> ${workDescription[i]} </li>`;
    };

    if (data.workHistory[key]["role"] !== '' && data.workHistory[key]["date_start"] !== '' && data.workHistory[key]["date_end"] !== '' && data.workHistory[key]["location"] !== '' && data.workHistory[key]["description"] !== ''){
        let workDiv = document.createElement('div');
        workDiv.innerHTML = `<h3 class="date" id="role" > ${data.workHistory[key]["role"]} ,</h3> <p class="date" id="date" > ${data.workHistory[key]["date_start"]} - ${data.workHistory[key]["date_end"]}</p><p id="location" > ${data.workHistory[key]["location"]}</p><ul class="work-history--list" id="description">${listString}</ul>`;
        let workHistoryDiv = document.getElementById("work-history");workHistoryDiv.appendChild(workDiv);
    };
    
}

document.getElementById("adress").innerHTML = "&nbsp;&nbsp;" + data.adress;
document.getElementById("telephone").innerHTML = "&nbsp;&nbsp;" + `(${(data.number).slice(0,3)}) ${(data.number).slice(3,6)}-${(data.number).slice(6,10)}`;
document.getElementById("email").innerHTML = "&nbsp;&nbsp;" + data.email;

let skillsArray = (data.skills).split('\n');
let skillsUL = document.getElementById("skillsUL");
for (i in skillsArray) {
    if (skillsArray[i] !== '') {
        let skillsArrayLi = document.createElement('li');
        skillsArrayLi.innerHTML = skillsArray[i];
        skillsUL.appendChild(skillsArrayLi);
    }
}

document.getElementById("degree").innerHTML = data.degree;
document.getElementById("university").innerHTML = data.college;

let affiliationArray = (data.affiliation).split('\n');
let affiliationUL = document.getElementById("affiliationUL");
for (i in affiliationArray) {
    if (affiliationArray[i] !== '') {
        let affiliaionArrayLi = document.createElement('li');
        affiliaionArrayLi.innerHTML = affiliationArray[i];
        affiliationUL.appendChild(affiliaionArrayLi);
    };
}