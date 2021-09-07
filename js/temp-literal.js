var myName = "Mario";
var myLastName = "Martínez";
var myAge = 51;

console.log(`Hello ${myName} ${myLastName}, you have ${myAge}`);

// agregar elementos al html
const myNewList = `
<ul>
    <li>Item # 1</li>
    <li>Item # 2</li>
    <li>Item # 3</li>
    <li>Item # 4</li>
</ul>`;

const addDiv = document.getElementById("myDiv");
addDiv.innerHTML = myNewList;

const dateNow = new Date();
console.log(`Today is: ${dateNow.toLocaleDateString("En-en")}`);

const myArray = [1, 2, 3, 4, 5];

// const newArray = myArray.map( num => num + 5);
// console.log(newArray);

// es igual
console.log(`${myArray.map(num => `${num + 5}`)}`);

const pizzaToppings = ["cheese", "moshrooms", "sauce", "pepperoni", "pineapple"];

const myPizzaArticle = (
    `<article>
        <h1>Pizza Ingredients</h1>
        <ul>
            ${pizzaToppings.map((ingredients) => 
                `<li>${ingredients}</li>`).join("\n            ")}
        </ul>
    </article>`
);

console.log(myPizzaArticle);

const pizzaDiv = document.getElementById("pizzaDiv");
pizzaDiv.innerHTML = myPizzaArticle;

function templateParser(arrayOfStrings, expresion1, expresion2) {
    console.log(`"${arrayOfStrings}", "${expresion1}" "${expresion2}"`);
}
const person = "Mario";
const personAge = 51;
const myTeplateLiteral = templateParser`I am ${person}, aged: ${personAge}`;