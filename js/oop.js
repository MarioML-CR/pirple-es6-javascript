/*
JavaScript es un lenguaje basado en 
objetos basado en prototipos, en lugar 
de estar basado en clases. Debido a 
esta base diferente, puede ser menos 
evidente cómo JavaScript le permite 
crear jerarquías de objetos y tener 
herencia de propiedades y sus valores.
*/
function Ship() {
    this.floats = true;
    this.material = "steel"
}
const myShip = new Ship();
// console.log(myShip.floats);

const myObj = {
    a: 1,
    b: 2
}
// console.log(Object.keys(myObj));
// console.log(myObj.valueOf());
const name1 = {
    name: "Mario",
    age: 51,
    sayName: function() {
        console.log(`My name is ${this.name}`);
    }
}

// name1.sayName();
// copia y hereda de name1
const name2 = Object.create(name1);
name2.name = "Xinia";
// console.log(name1.name);

// Object constructors

function Animal(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.sayBreed = () => {
        console.log(`My breed is: ${this.breed}`);
    }
}
const dog1 = new Animal("Loki", 3, "Coli");
// console.log(Animal.prototype);
const dog2 = new Animal("Kilo", 3, "Beegol");
// dog2.sayBreed();

// hacerlo separadamente
function Animal2(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
}
Animal2.prototype.sayBreed = function() {
    console.log(`My breed is: ${this.breed}`);
}
const dog3 = new Animal2("Bone", 16, "precioso");
// dog3.sayBreed();
// console.log(Animal2.prototype);

// Object inheritance
function Animal3(name, age, breed) {
    this.name = name;
    this.age = age;
}
Animal3.prototype.makeNoise = function() {
    console.log(`generic animal noise`);
}
function Dog(name, age, breed) {
    Animal3.call(this, name, age);
    this.breed = breed;
}
const loki = new Dog("Loki", 3, "labrador");
// console.log(loki);
// el objeto Dog no tiene el método makeNoise
// console.log(Dog.prototype.constructor);
// para agregarlo a la instancia Loki
Dog.prototype = Object.create(Animal3.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeNoise = function() {
    console.log("ladra");
}
// console.log(Dog.prototype.constructor);
const kilo = new Dog("Kilo", 3, "chineado");
// kilo.makeNoise();

// crear otro objeto Cat
function Cat(name, age, colaration) {
    Animal3.call(this, name, age);
    this.colaration = colaration;
}
Cat.prototype = Object.create(Animal3.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.scracthPost = function(){
    console.log("Cat has scratched the post");
}
const kitty = new Cat("Kitty", 3, "tabby");
// kitty.makeNoise();
// kitty.scracthPost();

// herencia de Cat
function Kitten(name, age, coloration, litter) {
    Cat.call(this, name, age, coloration);
    this.litter = litter;
}
Kitten.prototype = Object.create(Cat.prototype);
Kitten.prototype.constructor = Kitten;
const tinyKity = new Kitten("Spot", 0.3, "orange", 1);
// console.log(tinyKity.colaration);
// tinyKity.makeNoise();
