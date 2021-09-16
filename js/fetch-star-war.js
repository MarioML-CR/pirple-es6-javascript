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
    // .then(() => {
    //     console.log(planetas);
    // })
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
    let p = `<select name="planets" id="planets" onChange="choosePlanet()">
    <option value=" ">Please choose an option</option>`;
    for (const i in planetasName) {
        p += `
        <option value="${i}">${planetasName[i]}</option>
        `;
    }
    p += `</select>`;
    starWars.removeChild(temp);
    starWars.innerHTML = p;
    // cearFuncion();
}

// function cearFuncion() {
//     const myButton = document.getElementById("planets");
//     myButton.addEventListener("onChange", viewPlants);
//     console.log(myButton[0]);
// }
function choosePlanet(e) {
    // console.log(e);
    const value = document.getElementById("planets");
    let valor = value.options[value.selectedIndex].value;
    planetCharacteristic(valor);
}
function planetCharacteristic(num) {

    const myPlanetDiv = document.createElement("div");
    console.log(starWars.childNodes);
    if (starWars.childNodes[1] !== undefined) {
        starWars.childNodes[1].remove(); // remueve en nodo
    }
    const { name, rotation_period, orbital_period, diameter, climate, created, gravity, population, surface_water, terrain, edited } = planetas[num];
    let parameters = `
        <h2>${name}</h2>
        <p>It's the planet number ${num} an has these cacharacteristics:</p>
        <ul>
            <li> <b>rotation period</b>: ${rotation_period}</li>
            <li> <b>orbital period</b>: ${orbital_period}</li>
            <li> <b>diameter</b>: ${diameter}</li>
            <li> <b>climate</b>: ${climate}</li>
            <li> <b>created</b>: ${created}</li>
            <li> <b>gravity</b>: ${gravity}</li>
            <li> <b>population</b>: ${population === "unknown" ? population : parseInt(population).toLocaleString('en-US')}</li>
            <li> <b>surface water</b>: ${surface_water}</li>
            <li> <b>terrain</b>: ${terrain}</li>
            <li> <b>edited</b>: ${edited}</li>
        </ul>`
        myPlanetDiv.innerHTML += parameters;
        starWars.appendChild(myPlanetDiv);
    // planet.appendChild(myPlanetDiv); // agrega el nodo
} 