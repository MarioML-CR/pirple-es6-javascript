// Fetch API
/*
SWAPI
La API de Star Wars (60 planetas)
*/
const planet = document.getElementById("planet");
const myButton = document.getElementById("btn_planet");
myButton.addEventListener("click", getPlanet);
const listPlanets = document.getElementById("btn_ListPlanets");
listPlanets.addEventListener("click", getPlanets);
const lPlanets = new Object();
let consecutivo = 0;
// alternativa con RegEx
// function getPlanets() {
//     fetch(`http://swapi.dev/api/planets/`)
//         .then(data => data.json())
//         .then(planets => {
//             const { next } = planets;
//             const newURL = next.replace(/^http:\/\//i, "https://");
//             console.log(newURL);
//             return fetch(newURL)
//         })
//         .then(morePlanets => console.log(morePlanets))
//         .catch(err => console.log(err.message));
// }
function getPlanets() {
    console.log("adentro");
    fetch(`http://swapi.dev/api/planets/`)
        .then(data => data.json())
        .then(planets => listaDePlanets(planets.count))
        .catch(err => console.log(err.message));
}
function listaDePlanets(numPlanets) {
    let i = 0;
    for (i = 1; i <= numPlanets; i++) {
        fetch(`http://swapi.dev/api/planets/${i}/`)
            .then(data => data.json())
            .then(d => cargarPlanetas(d.name))
            .catch(err => console.log(err.message));
    }
    console.log(lPlanets);
}
function cargarPlanetas(planetName) {
    consecutivo += 1;
    lPlanets[`${consecutivo}`] = planetName;
}
function getPlanet() {
    const randonNum = Math.floor(Math.random() * 60) + 1;
    fetch(`http://swapi.dev/api/planets/${randonNum}/`)
        .then(data => data.json())
        .then(d => planetCharacteristic2(d, randonNum))
        .catch(err => console.log(err.message));
}
// se puede pasar directamente el parámetro name de una vez en lugar del objeto completo
function populatePlanet(planetObj, num) {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = planetObj.name;
    planet.appendChild(newParagraph);
    console.log(num);
    console.log(planetObj);
}
// hay que destruir el div para que vuelva a funcionar, para esto se puede crear, de esta forma no funciona más de una vez. Es una lista
function planetCharacteristic(planetObj, num) {
    const { name, rotation_period, orbital_period, diameter, climate, created, gravity, population, surface_water, terrain, edited } = planetObj;
    let pop;
    if (population === "unknown") {
        pop = population;
    } else {
        pop = parseInt(population).toLocaleString();
    }
    parameters = `
    <div>
        <h2>${name}</h2>
        <p>It's the planet number ${num} an has those cacharacteristics:</p>
        <ul>
            <li> <b>rotation period</b>: ${rotation_period}</li>
            <li> <b>orbital period</b>: ${orbital_period}</li>
            <li> <b>diameter</b>: ${diameter}</li>
            <li> <b>climate</b>: ${climate}</li>
            <li> <b>created</b>: ${created}</li>
            <li> <b>gravity</b>: ${gravity}</li>
            <li> <b>population</b>: ${pop}</li>
            <li> <b>surface water</b>: ${surface_water}</li>
            <li> <b>terrain</b>: ${terrain}</li>
            <li> <b>edited</b>: ${edited}</li>
        </ul>
    </div>`
    // solo sirve una vez
    // planet.innerHTML = parameters;
    // para que el botón sea reusable se pued usar alguno de los siguientes 4 comandos:
    // para agregar antes del botón y de primero
    // planet.insertAdjacentHTML("afterbegin", parameters);
    // para insertar después del botón y en parte superior
    planet.insertAdjacentHTML("afterend", parameters);
    // para insertar antes del botón y último
    // planet.insertAdjacentHTML("beforebegin", parameters);
    // para insertar después del botón y al final
    // planet.insertAdjacentHTML("beforeend", parameters);
}
// forma correcta, se crea un div, se le agregan los parámetros y se agrega al div existente
function planetCharacteristic2(planetObj, num) {
    const { name, rotation_period, orbital_period, diameter, climate, created, gravity, population, surface_water, terrain, edited } = planetObj;
    // forma corta,pero se puede insertar directamente en el código
    // population === "unknown" ? pop = population : pop = parseInt(population).toLocaleString('en-US');
    // let pop;
    // if (population === "unknown") {
    //     pop = population;
    // } else {
    //     pop = parseInt(population).toLocaleString('en-US');
    // }
    const myPlanetDiv = document.createElement("div");
    console.log(planet.childNodes);
    planet.childNodes[4].remove(); // remueve en nodo 
    parameters = `
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
    planet.appendChild(myPlanetDiv); // agrega el nodo
}
// fetch("http://swapi.dev/api/planets/2/")
//     .then(data => data.json())
//     .then(d => console.log(d))
//     .catch(err => console.log(err.message));

/*
{name: 'Umbara', rotation_period: 'unknown', orbital_period: 'unknown', diameter: 'unknown', climate: 'unknown', …}
climate: "unknown"
created: "2014-12-20T20:18:36.256000Z"
diameter: "unknown"
edited: "2014-12-20T20:58:18.525000Z"
films: []
gravity: "unknown"
name: "Umbara"
orbital_period: "unknown"
population: "unknown"
residents: ['https://swapi.dev/api/people/82/']
rotation_period: "unknown"
surface_water: "unknown"
terrain: "unknown"
url: "https://swapi.dev/api/planets/60/"

*/