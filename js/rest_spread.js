/*
Spread syntax
- Can be used in places where (e.g.) functions expect multiple arguments, multiple elemnts, or multiple variables
*/

function spreadFuncion (...multipleArgs) {
    console.log(multipleArgs);
}

// spreadFuncion(1, 20, false, "hi", "hey");

const myArray = [1, 2, 3, 4];
// los ... le permite iterar, de forma que imprimen los elementos del array, si se quitan, se imprime el array
// console.log(...myArray);
const mySecondArray = [5, 6, 7, 8, 9];
// mySecondArray.push(myArray);
// console.log(mySecondArray);
const myThirdArray = [...myArray, ...mySecondArray];
// console.log(myThirdArray);
// alternative to Function.prototype.apply
function sayHello(x, y, z) {
    console.log(`Hello, ${x}, ${y}, ${z}`)
}
const helloArray = ["Bob", "Jane", "Peter"];
// sayHello.apply(null, helloArray);
// Spread syntax way:
// sayHello(...helloArray);
/*
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
*/
// de esta forma se agrega un arreglo del arreglo
// arr1.push(arr2);
// console.log(arr1);
// de esta forma se agrega porque arr2 itera
// arr1.push(...arr2);
// console.log(arr1);
// la forma equivalente, ca
// arr1.push.apply(arr1, arr2);
// console.log(arr1);

// concat()
const myArr = ["jelly beans"];
const myArr2 = ["donuts", "chocolate"];
const myArr3 = ["pie", "lemonade"];
// console.log(myArr.concat(myArr2, myArr3));
const newMyArr = myArr.concat(myArr2, myArr3);
// es igual a
const newMyArr2 = [...myArr, ...myArr2, ...myArr3];
// console.log(newMyArr);
// console.log(newMyArr2);

const listOfCarParts = ["gasket", "tires", "radiator", "muffler"];
const listOfPartsToInsert = ["wipers", "headlights"];

function listInserter(arr1, arr2, index){
    const firstPartOfArray = arr1.slice(0, index);
    const secondPartOfArrar = arr1.slice(index);
    const assembledCar = firstPartOfArray.concat(arr2, secondPartOfArrar)
    console.log(assembledCar);
}
// listInserter(listOfCarParts, listOfPartsToInsert, 2);
// .slice es una funcion que separa, el primer argumento, cuando lo tiene es para separar el arreglo desde esta posicion, en este caso el indice 1, que corresponde a tires, hasta el indice 3 pero no es inclusive, así que llega al indice 2, es decir a radiator
// listOfCarParts.slice(0,1)
// console.log(listOfCarParts); // el arreglo no se modifica
// console.log(listOfCarParts.slice(0,1));
// listOfCarParts.splice(0,2); // elimina los elementos desde el indice 0 al 2 (no inclusive) y modifica el arreglo
// console.log(listOfCarParts);

// las siguientes formas son equivalentes
const anotherArr = [10, 121994, 1076];
const yetAnotherArr = [...anotherArr];
// console.log(yetAnotherArr);
const yetAnotherArr2 = anotherArr.slice();
// console.log(yetAnotherArr2);

/*
vs rest operator
*/
function hasManyArgs(...allArgs){
    for(const prop of allArgs){
        console.log(prop + 10);
    }
}
// hasManyArgs(1, 50, 123, 6465, 1332, 243);

function hasManyArgs2(x, y, ...allArgs){
    console.log(`Esto es ${x} y ${y}`);
    for(const prop of allArgs){
        console.log(prop + 5);
    }
}
// hasManyArgs2("hi", "Helo", 5, 15, 25, 35, 45, 55);

/*
Method definitions
pre-ES6, in object literals, methods are defined as function expressions
E.G:
*/
const myObj = {
    id: 10,
    sayHi: function() {
        console.log("hi");
    }
}
myObj.sayHi();

// ES6 has methos definitions for creating methods

const myES6Obj = {
    id: 11,
    sayHi() {
        console.log("ES6 is coll");
    },
    sayBye() {
        console.log("Bye now");
    }
}
// myES6Obj.sayHi();

const anotherObj = {
    greet(arg1) {
        console.log(`Hey ${arg1}!`)
    },
    anotherMethod(...args) {
        this.greet(args[0]); // esta función llama a greet(arg1) con el valor del indice 0
        console.log(`I have ${args.length} arguments`);
    }
}

anotherObj.anotherMethod("Tim", 1, false, true, [123], 61);
