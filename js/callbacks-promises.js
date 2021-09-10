/*
Una función de devolución de llamada es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
Sin embargo, tenga en cuenta que las devoluciones de llamada se utilizan a menudo para continuar la ejecución del código después de que se haya completado una operación asincrónica ; se denominan devoluciones de llamada asincrónicas. Un buen ejemplo son las funciones de devolución de llamada ejecutadas dentro de un .then()bloque encadenado al final de una promesa después de que esa promesa se cumple o se rechaza. Esta estructura se utiliza en muchas API web modernas, como fetch().
*/
function shouldGoFirst() {
    setTimeout(() => { // se agrega un delay
        console.log("I should always go first");
    }, 1000);
}
function shouldGoSecond() {
    console.log("I should always go second");
}
// shouldGoFirst();
// shouldGoSecond();

function shouldGoFirst2(callBack) {
    setTimeout(() => { // se agrega un delay
        console.log("I should always go first");
        callBack();
    }, 1000);
}
function shouldGoSecond2() {
    console.log("I should always go second");
}
// shouldGoFirst2(shouldGoSecond2);

function sumUpNumbers(num1, num2, cb) {
    let summedValue;
    setTimeout(() => {
        const sommedValue = num1 + num2;
        cb(sommedValue);
    }, 1000)

}
function logSommedValue(val) {
    console.log(`El nombre propio es: ${val}`);
}
// sumUpNumbers(100, 50, logSommedValue);
// callback function
function sayWhenDone(txt) {
    console.log(`Done! el nombre es ${txt}`);
}
// parent function
function looper(arr, cb) {
    let i;
    for (i = 0; i < arr.length; i++) {
        // console.log(i);
        const name = arr[i];
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        arr[i] = capitalizedName;
        cb(arr[i]);
    }
    // cb(i);
}
// looper(6, sayWhenDone);
const myNames = ["mARIO", "xINIA", "andres", "daniel"];
// looper(myNames, sayWhenDone);
// console.log(myNames);
// function low(txt){
//     console.log(txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
// }
// low("xINIA");

// con función anónima
function anotherLogger(num1, num2, cb) {
    const squaredAndSummedNums = (num1 * num1) + (num2 * num2);
    console.log(squaredAndSummedNums);
    cb();
}
anotherLogger(10,50, function() {
    console.log("Hey!");
})