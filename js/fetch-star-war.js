let numPlanetas = 0;
let planetas = [];
let planetasName = [];
getPlanets();
cargarNombrePlanetas();

function getPlanets() {
    fetch(`http://swapi.dev/api/planets/`)
        .then(data => data.json())
        .then(planets => getPlanetas(planets.count))
        .catch(err => console.log(err.message));
}

function getPlanetas(numPlanets) {
    numPlanetas = numPlanets;
    let i = 0;
    for (i = 1; i <= numPlanetas; i++) {
        fetch(`http://swapi.dev/api/planets/${i}/`)
            .then(data => data.json())
            .then(d => cargarPlaneta(d))
            .catch(err => console.log(err.message));
    }
}
function cargarPlaneta(planeta) {
    const planet = new Object();
    for (const p in planeta) {
        planet[`${p}`] = planeta[p];
    }
    planetas.push(planet);
}
// TODO: Pendiente
function cargarNombrePlanetas() {
    console.log(planetas);
    for (const p of planetas) {
        // planetasName.push = p.name;
        // console.log("lola");
        console.log(p.name);
    }
    console.log(planetasName);
};


