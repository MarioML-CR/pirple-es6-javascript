/*
La sintaxis de asignación de desestructuración es una 
expresión de JavaScript que permite descomprimir valores 
de matrices o propiedades de objetos en distintas variables.
*/
const myArray = [1, 2, 3, 4, 5];
const [x,y] = myArray;
// console.log(x + ", " +y);

const mySecondArray = ["xinia", "dani", "andres"];
let name1, name2, name3, name4;
// si no existe toma el valor default
[name1, name2, name3, name4="default"] = mySecondArray;
// console.log(name1 + " " + name2 + " " + name3 + " " + name4);
// swap two variables
let aa = 100;
let bb = 250;
let cc = 500;
// console.log(aa, bb, cc);
// intercambiar valores para no utilizar valores temporales
[bb, cc] = [cc, bb];
// console.log(aa, bb, cc);

// use with functions
function returnArray(){
    return ["donuts", "chocolate", "candy", "gummy bears"];
}
// console.log(returnArray());

const [donuts, chocolate, candy, gummybears] = returnArray();
// console.log(candy);

function foodFilter(arr, term){
    return arr.filter((t) => t === term);
}
const [result] = foodFilter(["chicken", "fish", "tofu"], "chicken");
// console.log(result);

// can ignore some values
const anotherArr = [10, 20, 50, 100, 1000, 30];
const [numA, numB, , numC, , numD] = anotherArr;
// console.log(numA, numB, numC, numD);

// can use rest pattern
function sayHi(firstArg, ...restOfArgs){
    // console.log(`Hi, ${firstArg}`);
    // console.log(restOfArgs);
}
sayHi("Mario", 51, "San Remo");

const yetAnotherArr = ["dogs", "cats", "birds", "snakes", "hedgehogs"];
const [dogsString, catString, ...otherAnimals] = yetAnotherArr;
// console.log(dogsString);
// console.log(catString);
// console.log(otherAnimals);
// console.log(...otherAnimals); // los separa

// console.log(otherAnimals.filter((t) => {
//     return t === "snakes";
// }));

// object destructuring

const myOBj = {
    firtName: "Mario",
    lastName: "Martinez",
    age: 51,
    height: 172
};
// console.log(myOBj.firtName);
// requiere que sea con la misma sintaxis con que se agregó el 
// parámetro al objeto, ej. firstNam no funciona
let {firtName, lastName, age, height} = myOBj;
// console.log(firtName, lastName, age, height);

let myVar1, myVar2;
const myObj2 = {myVar1: "a", myVar2: "b"};
// requiere que todo el código esté entre () pues ya fue inicializado
({myVar1, myVar2} = myObj2); 
// console.log(myVar1, myVar2);

// assinging new variable names
const myObj3 = {q: "cool!", w: "oh yeah!", e: "nice :D", r: "awwesome!"};
// const {q, w, yy, r } = myObj3;
// console.log(yy);
// reasignar nombres
const {q: cool, w: yeah, e: nice, r: awesome } = myObj3;
// console.log(nice);

const myObj4 = {uuid: 131212121, userName: "es6ru", loggedIn: new Date()};
const {uuid: userID, userName: nema, loggedIn: lastLoginDate} = myObj4;
// console.log(userID);

// defaults
const myObj5 = {a1: 10, b1: 20, c1: 30, d1: 40, e1: 100};
const {a1, b1, c1, d1, e1 = 50} = myObj5;
// console.log(e1);

function stateUser({user="Mario", memberType}) {
    console.log(`user: ${user}, membership type: ${memberType}`);
}
// stateUser({user: "Xinia", memberType: "premium"});
// stateUser({ memberType: "premium"});

function stateUser2(obj) {
    const {user = null, memberType} = obj;
    if (!user){
        console.log("Error! no ingresó el usuario");
    } else {
        console.log(`user: ${user}, membership type: ${memberType}`);
    }
}
// stateUser2({ memberType: "premium"});
const member1 = {user: "Daniel", memberType: "permium"};
const member2 = {user: "andres", memberType: "free"};
const member3 = {memberType: "free"};
// stateUser2(member3);

const myObj7 = {
    title: "My address book",
    entries: [
        {
            name: "Mario",
            number: "525256",
            address: "san remo",
            other: {
                cell: "2564-8787",
                email: "mml@mvanalytic.com"
            }
        },
        {
            name: "Xinia",
            number: "8790",
            address: "la petra",
            other: {
                cell: "2678-8787",
                email: "xvb@mvanalytic.com"
            }
        },
        {
            name: "Daniel",
            number: "876785490",
            address: "Oreamuno",
            other: {
                cell: "9877-8787",
                email: "dmv@mvanalytic.com"
            }
        },
        {
            name: "Andres",
            number: "7689",
            address: "San Rafael",
            other: {
                cell: "8765-8787",
                email: "amv@mvanalytic.com"
            }
        }
    ],
    myPhone: "2591-0987",
};
// const {title, entries} = myObj7;
// console.log(entries);
// const {title, entries: [{address}]} = myObj7;
// console.log(address);
// rename
// const {title, entries: [{address: dir}]} = myObj7;
// console.log(dir);

const myObj8 = {
    myProp1: "Ahhh!",
    myProp2: [20, 50],
}
const {myProp1, myProp2: [xx, yy]} = myObj8;
// console.log(xx, yy);

// const {title, entries: [{name: nnn, address}]} = myObj7;
// console.log(nnn);
const {title, entries} = myObj7;
for (const {name: n, address: a, other: {cell:c}} of entries) {
    console.log(`Name: ${n}, address: ${a}, cel: ${c}`);
}

