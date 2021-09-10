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
    // console.log(squaredAndSummedNums);
    cb();
}
anotherLogger(10,50, function() {
    // console.log("Hey!");
})

const myDiv = document.getElementById("main");
// console.log(myDiv);
const myButton = myDiv.querySelector("button");
// console.log(myButton);
const newParrafo = document.createElement("p");
const myPara = myDiv.appendChild(newParrafo);
// console.log(myPara);
const miBoton = document.getElementById("lorem");
// console.log(miBoton);
const fakeData = {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, possimus saepe nobis ipsam veritatis beatae dolorem modi! Culpa, aliquid quae! Dolorem quidem nemo aliquam voluptates assumenda fuga saepe animi tenetur!",
}
// a la función requestData se le pasa otra función
miBoton.addEventListener("click", function(){
    requestData(popultateDom);
});

function requestData(cb) {
    let data = "Loading...";
    cb(data);
    // Fake server request and response
    setTimeout(() =>{
        // Response from server
        data = fakeData.text;
        cb(data);
    }, 2000);
}
function popultateDom(data) {
    myPara.innerText = `${data}`;
}

function counter(){
    setTimeout(() => {
        console.log("First");
        setTimeout(() => {
            console.log("Second");
            setTimeout(() => {
                console.log("Third");
                setTimeout(() =>{
                    console.log("Fourth");
                }, 400)
            }, 600)
        }, 800)
    }, 1000)
}

// counter();

function numCruncher1(num, cb){
    const newNum = num * num;
    cb(newNum);
}
function numCruncher2(num, cb){
    const anotherNewNum = num / 100;
    cb(anotherNewNum);
}
function totalSum(a, b, cb){
    cb(a + b);
}
function crunchNumbers(a, b, cb1, cb2, cb3) {
    cb1(a, function(x) {
        cb2(b, function(y) {
            cb3(x, y, function(result) {
                console.log(result);
            });
        });
    });
}
// crunchNumbers(5, 10, numCruncher1, numCruncher2, totalSum);

/*
El Promiseobjeto representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
A Promisees un proxy de un valor que no se conoce necesariamente cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o la razón del fracaso de una acción asincrónica. Esto permite que los métodos asincrónicos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asincrónico devuelve una promesa de proporcionar el valor en algún momento en el futuro.

A Promiseestá en uno de estos estados:

pendiente : estado inicial, ni cumplido ni rechazado.
cumplido : significa que la operación se completó con éxito.
rechazado : significa que la operación falló.
Una promesa pendiente puede cumplirse con un valor o rechazarse con un motivo (error). Cuando ocurre cualquiera de estas opciones, thense llama a los controladores asociados en cola por el método de una promesa . Si la promesa ya se ha cumplido o rechazado cuando se adjunta un controlador correspondiente, se llamará al controlador, por lo que no hay condición de carrera entre la finalización de una operación asincrónica y la vinculación de sus controladores.
*/
const testPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        reject("Promises no good! Rejected");
    }
    setTimeout(() => {
        resolve("promese OK!");
    }, 1000);
});

// testPromise.then((resolveMessage) => {
//     console.log(`Looks like: ${resolveMessage}`);
// }).then(() => {
//     console.log("I should run after the promise is resolved");
// }).then(() => {
//     console.log("Promeses ara awesome");
// }).catch((rejectMessage) => {
//     console.log(`Error: ${rejectMessage}`);
// });

function numAdder(n1, n2) {
    return new Promise((resolve, reject) => {
        const addedNums = n1 + n2;
        setTimeout(() => {
            resolve(addedNums);
        }, 500);
    });
}
function numSquarer(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num);
        }, 900);
    })
}
numAdder(3, 7).then((data) => {
    return numSquarer(data);
}).then((moreData) => {
    console.log(moreData);
});