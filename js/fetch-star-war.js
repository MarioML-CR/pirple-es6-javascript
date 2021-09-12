let numPlanetas = 0;
let planetas = [];
var planetasName = [];
getPlanets();
cargarNombrePlanetas();
// console.log(planetas);
function getPlanets() {
    fetch(`http://swapi.dev/api/planets/`)
        .then(data => data.json())
        .then(planets => getPlanetas(planets.count))
        .catch(err => console.log(err.message));
}

function getPlanetas(numPlanets) {
    numPlanetas = numPlanets;
    console.log(numPlanetas);
    let i = 0;
    for (i = 1; i <= numPlanetas; i++) {
        fetch(`http://swapi.dev/api/planets/${i}/`)
            .then(data => data.json())
            .then(d => cargarPlaneta(d))
            .catch(err => console.log(err.message));
    }
    console.log(planetas);
    console.log(planetasName);
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
        // console.log(nombre);
        planetasName.push(nombre);
    }
};
console.log(planetasName);
function createList() {
    for (const i in planetasName) {
        console.log(i, value);
    }
}
createList();
let array1 = [];
let uno = "uno";
let dos = "dos";
let tres = 3;
array1.push(uno);
array1.push(dos);
array1.push(tres);
console.log(array1 instanceof Array);
// for (const i of array1) {
//     console.log(typeof i);
// }
// console.log(array1);
// let array2 = [];
// let myObj = new Object();
// myObj["nombre"] = "pamela";
// myObj["apellido"] = "benavides";
// array2.push(myObj);
// let myObj2 = new Object();
// myObj2["nombre"] = "xinia";
// myObj2["apellido"] = "vargas";
// array2.push(myObj2);
// array2.forEach(e => console.log(e));
// console.log(array2);
// console.log(array1.length);
// const objPatron = {nombre: "xinia", apellido: "vargas", age: 1};
// function fillObj(obj, arr) {
//     let newObj = new Object();
//     let par, value;
//     for (const p in obj) {
//         // console.log(`nombre parametro: ${p}, valor: ${obj[p]}`);

//         // par = `newObj.${p}`
//         // console.log(par);
//         // value = `${obj[p]}`
//         // par = value;
//         // console.log(value);
//         newObj.p = obj[p]
//     }
//     console.log(newObj);
// }
// fillObj(objPatron, array1);
// function fillArray(){

// }

// var keys = [];
// with (Array.prototype) {
//     let n = "uno";
//     let m = "dos";
//     for (let i = 0; i < 4; i++) {
//         const obj = {nombre: n + i, apellido: m + i};
//         keys.push(obj);
//     }  
// }
// console.log(keys);
