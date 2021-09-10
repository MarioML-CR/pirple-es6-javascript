/*
Las etiquetas permiten dar instrucciones, por ejemplo ante un evento en el loop con etiqueta
innerLoop, se detenga este Loop interno, o incluso que se detenga el externo (outerLoop)
*/
// outerLoop:
// for (let i = 0; i < 10; i++) {
//     console.log("bucle " + i);
//     innerLoop:
//     for (let j = 0; j < 10; j++) {
//         console.log("dentro de bucle " + j);
//         if (j > 4) {
//             break outerLoop;
//         }
//     }
// }
// activar por tiempo, al usar var que una variable global se requiere dos funciones separadas
// function looper(value) {
//     setTimeout(function() {
//         console.log(value);
//     }, value *  2000)
// }

// for (var i = 0; i < 10; i++) {
//     looper(i);
// }
// usando let se puede hacer directamente por ser variable local
// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i *  2000)
// }

// const users = { 1: "Xinia", 2: "Mario", 3: "Daniel", 4: "Andrés"};
/*
    For ... in loop, loop through an object's properties in arbitrary order
    user for looping over object properties
    For Of Loop recorre los valores de un objeto iterable.
*/
// for (let indice in users) {
//     console.log(indice);
// }

// for (let indice in users) {
//     console.log(users[indice]);
// }
// usando forEach, es solo para array, el object no funciona
// const drinks = ["café", "jugo de naranja", "leche", "limonada"];
// drinks.forEach( (d) => {
//     console.log(d);
// })
/*
    For ... of loop utilizado para recorrer objetos iterables (arrays, strings, maps, sets, etc.)
    used for looping for data - like values in an array
*/
// const drinks = ["café", "jugo de naranja", "leche", "limonada"];
// for (const d of drinks) {
//     if (d === "café") {
//         continue;
//     }
//     console.log(d);
// }
// const myString = "hola lola";
// const mySimbols = "😇😍";
// for (const char of mySimbols) {
//     console.log(char);
// }
// const originalArray = [10, 15, 20, 25, 30];
// for (let num of originalArray) {
//     console.log(num);
// }

// const originalArray = ["Mario", "Daniel", "Mario","Andrés", "Xinia"];
// const uniqueNameSet = new Set(originalArray);

// for (const n of originalArray) {
//     console.log(n);
// }

// for (const n of uniqueNameSet) {
//     console.log(n);
// }

// for of: recorre los valores de 
// un objeto iterable.
const cars = ["BMW", "Volvo", "Mini"];
const person = {
    name: "Mario",
    apellido: "Martinez",
    edad: 51,
}
for (let x of cars) {
    console.log(x);
}
// error of no es iterable, pues 
// person tiene propiedades
// for (let x of person){
//     console.log(x);
// }
// for in: recorre las propiedades de 
// un objeto:
for (let x in cars) {
    console.log(`El valor es ${x}`);
}
// es iterable, pero optengo solo
// el nombre de las propiedades
for (let x in person) {
    console.log(`los parámetros son: ${x}`);
}