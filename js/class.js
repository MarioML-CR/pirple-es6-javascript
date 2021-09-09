// previo a ES6
/*
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.greetings = function(){
    console.log("Greetings :D");
}
function Employee(name, age, role){
    Person.call(this, name, age);
    this.role = role;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const bill = new Employee("Bill", 41, "janitor");
bill.greetings();
*/
// Class method utilizando declaración de clase
/*
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const bob = new Person("Bob", 34);
console.log(bob);
*/
// usando expresión de clase
/*
const Person2 = class {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const bill = new Person2("Bill", 30);
console.log(bill);
*/
// agregar métodos
class Person3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log("Classes R");
    }
    static sayHey(){
        console.log("Hey...!");
    }
}
const janeDoe = new Person3("Jane Doe", 45);
// console.log(janeDoe);
// janeDoe.greeting();
// para modificar un método desde fuera de la
// clase se debe usar el prototype, ej
Person3.prototype.greeting = function() {
    return "Now is different";
}
// janeDoe.greeting();
// herencia
// super keyword calls functions on an object's
// parect class
class Employee extends Person3{
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    testGreeting() {
        super.greeting();
    }
    sayGreeting() {
        const parentString = super.greeting();
        console.log(`${this.name} thinks ${parentString}`)
    }
}
const barb = new Employee("Barb", 27, "developer");
// console.log(barb);
// barb.testGreeting(); // no es necesario
// barb.greeting();
// barb.sayGreeting();
class Customer extends Person3{
    constructor({name="customer", age="n/a", contactMethod}){
        super(name, age);
        this.contactMethod = contactMethod;
        this.accountCredit = null;
    }
    static temp = 0;
    addCredit(amount){
        this.accountCredit += amount;
    }
    reduceCredit(amount){
        this.accountCredit -= amount;
    }
    static sayHi(){
        console.log("Hi!");
    }
    static sayCustomerNames(...customers){ // cualquier número de customers
        // console.log(customers);
        for (const c of customers){
            console.log(c.name);
        }
    }
    static transferCredit(amount, source, target){
        if (source.accountCredit >= amount){
            target.accountCredit += amount;
            source.accountCredit -= amount;
        } else {
            console.log(`${source.name} have no fond`);
        }
        
    }
}
const customer1 = new Customer({contactMethod: "email"});
const customer2 = new Customer({name: "Mario", contactMethod: "phone"});
// console.log(customer1);
// const customer2 = new Customer({name: "Billy Bob", contactMethod: "email"});
// console.log(customer2);
// customer1.addCredit(100);
/*
Métodos y propiedades static
La palabra clave estática define un método o propiedad 
estática para una clase. Los miembros estáticos 
(propiedades y métodos) se llaman sin instanciar 
su clase y no se pueden llamar a través de una instancia 
de clase. Los métodos estáticos se utilizan a menudo 
para crear funciones de utilidad para una aplicación, 
mientras que las propiedades estáticas son útiles para 
cachés, configuración fija o cualquier otro dato que no 
necesite replicar en todas las instancias.
*/
// Customer.sayHi();
// Customer.sayHey();
// Customer.sayCustomerNames(customer1, customer2);
// Customer.temp = 2;
// console.log(Customer.temp);
// customer1.addCredit(100);
// console.log(customer1.accountCredit, customer2.accountCredit);
// Customer.transferCredit(101, customer1, customer2);
// console.log(customer1.accountCredit, customer2.accountCredit);
class Family {
    constructor(lastName){
        this.lastName = lastName;
    }
    sayFamilyName() {
        console.log(`We are the ${this.lastName}`);
    }
}

class Parents extends Family{
    constructor(lastName, fistName){
        super(lastName);
        this.mother = fistName;
    }
}
const dad = new Parents("Smith", "George");
const mom = new Parents("Smith", "Patty");
const annie = new Parents("Smith", "Jimmy");
const willy = new Parents("Smith", "Willy");
// annie.sayFamilyName();
// composicion
class FamilyMember {
    constructor(firstName, lastName, relationship){
        this.firstName = firstName;
        this.lastName = lastName;
        this.relationship = relationship;
    }
    sayFamilyName() {
        console.log(`We are the ${this.lastName}`);
    }
}
const dad2 = new FamilyMember("George", "Smith", "dad");
const mom2 = new FamilyMember("Patty", "Smith", "mom");
const annie2 = new FamilyMember("Jimmy", "Smith", "daugther");
const willy2 = new FamilyMember("Willy", "Smith", "son");
class FamilyGroup{
    constructor(parents=[], children=[]) {
        this.parents = parents;
        this.children = [];
    }
    addMember(member){
        this.children.push(member);
    }
}
// const theSmiths = new FamilyGroup([dad2, mom2]);
// theSmiths.addMember([annie2, willy2]);
// console.log(theSmiths);
const smithFamily = {
    1: ["George", "Smith", "dad"],
    2: ["Patty", "Smith", "mom"],
    3: ["Jimmy", "Smith", "daugther"],
    4: ["Willy", "Smith", "son"],
}
const createFamilyGroup = (famArray)=>{
    const famGroup = new FamilyGroup();
    for (const prop of famArray){
        if (prop.relationship === "mom" || prop.relationship === "dad") {
            famGroup.parents.push(prop);
        } else {
            famGroup.children.push(prop);
        }
    }
    // console.log(famGroup);
    return famGroup;
}

const createFamily = (famObj) => {
    // const allMembers = [];
    const newFamGroup = new FamilyGroup();
    for (const prop in famObj){
        console.log(prop);
        const [first, last, relationship] = famObj[prop];
        const newMember = new FamilyMember(first, last, relationship);
        // allMembers.push(newMember); 
        if (relationship === "mom" || relationship === "dad") {
            newFamGroup.parents.push(newMember);
        } else {
            newFamGroup.children.push(newMember);
        }
    }
    // console.log(allMembers);
    // const famGroup = createFamilyGroup(allMembers);
    // return famGroup;
    return newFamGroup;
}


const theSmiths = createFamily(smithFamily);
console.log(theSmiths);