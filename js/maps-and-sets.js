/*
Maps object
-used for simple key/value pairs
- any value can be used for either a key or value (i.e object, string, functionn )
- Reasons for usings Map over Objects:
    - El prototipo de objeto tiene claves predeterminadas que pueden entrar en conflicto con sus propias claves
    - Las claves del mapa pueden ser cualquier cosa, mientras que con los objetos, tienen que ser una cadena o un símbolo.
    - Can easily get the size of Map
*/
const myMap = new Map();
const firstKey = "key";
const firtVal = "first value";
myMap.set(firstKey, firtVal);
// console.log(myMap.get(firstKey));
myMap.set('secondKey', "secondValue");
myMap.set("otherKey", "otherValue");
const thirdKey = {};
const fourthKey = function(){};
myMap.set(thirdKey, "objeto");
myMap.set(fourthKey, "función");
// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.get(firstKey));

// limpiar el Map

// myMap.clear();
// console.log(myMap);
// console.log(myMap.has(firstKey)); // un boolean que verifica si existe esa llave
// console.log(myMap);
// console.log(myMap.get(fourthKey));

// myMap.forEach((val) => console.log(val)); // recorrido del Map

// ver las funciones asociadas a Map
// console.log(Map.prototype);

// iterating
// keys(), values, entries()

// console.log(myMap.keys());

// for (const [key, value] of myMap.entries()) { // despliega key and value
//     console.log(`${key} => ${value}`);
// }

// for (const val of myMap.values()) { // despliega solo el valor
//     console.log(`${val}`);
// }

// for (const key of myMap.keys()) { // despliega solo la llave
//     console.log(`${key}`);
// }

const myMapData = [["keyA", "value one"],["keyB", "value two"]];
const anotherMap = new Map(myMapData);
// console.log(anotherMap);

/*
Set objects
    - lets you store unique values of any type
    - each element is unique
*/

const mySet = new Set();
mySet.add("Bob");
mySet.add(true);
mySet.add("Bob"); // no entra pues repite
const obj123 = {a: 1, b: 3};
mySet.add(obj123);
// console.log(mySet);
// console.log(mySet.size);
// mySet.delete("Bob");
// console.log(mySet);
// console.log(mySet.size);
// console.log(mySet.has(obj123));
// console.log(mySet.has(1));
// mySet.forEach((s) => console.log(s));

// for (const val of mySet.values()) {
//     console.log(val);
// }

// for (const val of mySet.keys()) {
//     console.log(val);
// }

// for (const [key, val] of mySet.entries()) {
//     console.log(`${key} => ${val}`);
// }

// converse set to array

const arrFromSet = Array.from(mySet);
arrFromSet.push(obj123);
console.log(arrFromSet);

const arrFromString = Array.from("hello there"); // hace un split
console.log(arrFromString);

// converse arra to set

const myArr123 = ["hola", 2, true, 4, 5];
const anotherSet = new Set(myArr123);
console.log(anotherSet);