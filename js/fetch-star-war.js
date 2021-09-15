const starWars = document.getElementById("star-wars");
const temp = document.createElement("div");
temp.innerText = "Loading ..., please wait!";
starWars.appendChild(temp);



let numPlanetas = 0;
let planetas = [];
var planetasName = [];
getPlanets()
    .then(() => {
        createList();
    })
    .then(() => {
        cearFuncion();
    })
    ;

function cargarDom(data) {
    data.innerText = data;
}
function getPlanets() {
    return fetch(`http://swapi.dev/api/planets/`)
        .then(data => data.json())
        .then(planets => getPlanetas(planets.count))
        .catch(err => console.log(err.message));
}

function getPlanetas(numPlanets) {
    let promesas = [];
    numPlanetas = numPlanets;
    let i = 0;
    for (i = 1; i <= numPlanetas; i++) {
        promesas.push(fetch(`http://swapi.dev/api/planets/${i}/`)
            .then(data => data.json())
            .then(d => cargarPlaneta(d))
            .catch(err => console.log(err.message)));
    }
    return Promise.all(promesas);
}
function cargarPlaneta(planeta) {
    const planet = new Object();
    for (const p in planeta) {
        planet[`${p}`] = planeta[p];
    }
    planetas.push(planet);
    cargarNombrePlanetas(planeta.name);
}

function cargarNombrePlanetas(nombre) {
    if (typeof nombre === "string") {
        planetasName.push(nombre);
    }
};

function createList() {
    let p = `<select name="planets" id="planets">
    <option value=" ">Please choose an option</option>`;
    for (const i in planetasName) {
        p += `
        <option value="${i}">${planetasName[i]}</option>
        `;
    }
    p += `</select>`;
    starWars.removeChild(temp);
    starWars.innerHTML = p;
    cearFuncion();
}

function cearFuncion() {
    const myButton = document.getElementById("planets");
    myButton.addEventListener("submit", viewPlants);
}
function viewPlants(e) {
    console.log(e.target);
}