
// función anónima

function sum(num1, num2) {
    return num1 + num2;
}
let result = sum(5,8);
console.log('funcion anónima ' + result);

// 
var hola = function() {
    console.log("función simple");
}

// ECMA6
var holaFunctFlecha = () => {
    console.log("función de flecha");
}

hola();
holaFunctFlecha();


// función con parámetros

const multiplier = function (num1, num2) {
    return num1 * num2;
}

console.log(multiplier(8,3));

// ECMA6

const multipl = (num1, num2) => {
    return num1 * num2;
}

// si solo es una linea se puede expresar asi:

const mult = (num1, num2) => num1 * num2;

// si solo tiene un argumento se puede eliminar los parectesis

// si no hay argumentos se requiere agregar los paréntesis.

const multiplicacion = num => num * num;

console.log(multipl(8,8));
console.log(mult(3,2));
console.log(multiplicacion(9));

// Object

const users = [
    {name: "Mario", age: 51},
    {name: "XInia", age: 51},
    {name: "Daniel", age: 22},
    {name: "Andrés", age: 20}
];

const userNameList = users.map(function(user) {
    return user.name;
});

const userNameList2 = users.map((user) => {
    return user.name;
})

const userNameList3 = (myArray) => users.map((user) => {
    return user.name;
});

// función equivalente
const userNameList4 = (myArray) => users.map((user) => user.name);
console.log(userNameList);
console.log(userNameList2);
console.log(userNameList3(users));
console.log(userNameList4(users));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(function(num) {
    return num === 5;
});
console.log(filteredNumbers);

const filteredNumbers2 = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(filteredNumbers2);
const filteredNumbers3 = numbers.filter((num) =>
    num % 2 === 0
);
console.log(filteredNumbers3);

// quitar el paréntesis por que es solo un argumento
const filteredNumbers4 = numbers.filter( num =>
    num % 2 === 0
);
console.log(filteredNumbers4);

const doubleNumbers = (num) => {
    const numberContainer = [];
    num.forEach( n => {
        const doubled = n * 2;
        numberContainer.push(doubled);
    });
    return numberContainer;
}

console.log(doubleNumbers(numbers));

function numberMultiplier(x, y) {
    x = x || 5;
    y = y || 3;
    return x * y;
}

console.log(numberMultiplier());

function numberMultiplier2(x=5, y=3) {
    x = x || 5;
    y = y || 3;
    return x * y;
}
console.log(numberMultiplier2());


function stringSplitter(str) {
    return str.split(" ");
}
console.log(stringSplitter("Hola lola"));

const bankAccount = {
    canSpendMoney: true,
    hasCreditCard: true,
    balance: 100
}
function purchaseItem(price, acct=bankAccount) {
    if (acct.canSpendMoney) {
        acct.balance -= price;
        if (acct.balance < 0) {
            acct.canSpendMoney = false;
            return false;
        }
        return true;
    } else {
        return false;
    }
}
console.log(purchaseItem(99));

function Dog(years, breed) {
    this.age = years;
    this.type = breed;
    // setInterval( () => {
    //     this.age += 1;
    //     console.log(this);
    // }, 1000)
}

const loki = new Dog(3, "perro");
