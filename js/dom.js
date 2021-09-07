// parte 1
// const _nombre = document.getElementById("nombre");
// _nombre.innerText = `We did it user `
// parte 2
// const memberUl = document.getElementById("members")
// const allMemberNames = memberUl.getElementsByTagName("li");
// allMemberNames[3].innerHTML = "<h3>Lola</h3>"

// for (let prop of allMemberNames) {
//     if (prop.innerText !== "Juan") {
//         prop.innerText = "prueba";
//     }
// }
// cargar una lista con datos de un arreglo
// const gruop = ["Mario", "Daniel", "Andrés", "Xinia"];
// for (let m in allMemberNames) {
//     allMemberNames[m].innerText = gruop[m];
// }

// query selector toma el primer elemento del DOM
// const _color = document.querySelector("div");

// _color.style.color = "red";
// para arreglos, en este caso toma todos los que tienen la class="primero"
// const dummyDiv = document.querySelector(".dummy span");
// console.log(_primero.length);
// for (const p of _primero) {
//     p.style.color = "purple";
// }
// dummyDiv.style.color = "green";
// parent
// console.log(dummyDiv);
// parent de _primero
// console.log(dummyDiv.parentNode);
// console.log(dummyDiv.parentElement);
// parent de parent de _primero span
// console.log(dummyDiv.parentNode.parentNode);
// const testDiv = document.getElementById("test");

// console.log(testDiv.childNodes.length);
// console.log(testDiv.childNodes[1]);
// console.log(testDiv.childNodes[2]);
// IDS and Classes
// const element = document.getElementById("footer");
// const elID = element.id;
// console.log(elID);
// const replacementId = "bottom";
// element.id = replacementId;
// console.log(element);

// const el = document.getElementsByTagName("div");
// const footerDiv = el[el.length - 1];
// footerDiv.id = "footer2";

// determinar la clase
// const dummyDiv = document.querySelector(".dummy");
// console.log(dummyDiv.className);

// const purpleDiv = document.querySelector(".purple");
// purpleDiv.style.backgroundColor = "purple";
// purpleDiv.style.height = "100px";
// purpleDiv.style.width = "100px";
// // agregar una clase
// purpleDiv.classList.add("foo");
// remover una clase
// purpleDiv.classList.remove("foo");
// setTimeout( () => {
//     purpleDiv.classList.remove("foo");
// }, 5000);
// para manipular el comportamiento por intervalos, si no está lo agrega, y si está lo quita
// const changeDiv = document.querySelector(".change")
// console.log(changeDiv);
// setInterval( () => {
//     changeDiv.classList.toggle("foo");
//     changeDiv.classList.toggle("foo2");
// }, 100);

// Elements

// const creationDiv = document.getElementById("created");
// const newElement = document.createElement("p");
// console.log(newElement);
// newElement.innerText = "I was created by science!";
// newElement.classList.add("purple");
// creationDiv.appendChild(newElement);

// un elemento
// const myFaveIceCreams = ["vainilla", "chocolate", "caramelo","frutas"];
// const creationDiv = document.getElementById("created");
// const newElement = document.createElement("div");
// const newUL = document.createElement("UL");
// const newLi = document.createElement("li");
// newLi.innerText = myFaveIceCreams[0];
// newUL.appendChild(newLi);
// newElement.appendChild(newUL);
// console.log(newElement);
// creationDiv.appendChild(newElement);

// varios elementos
const myFaveIceCreams = ["vainilla", "chocolate", "caramelo","frutas"];
const creationDiv = document.getElementById("created");
const newElement = document.createElement("div");
const newUL = document.createElement("UL");
for(let i = 0; i < myFaveIceCreams.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = myFaveIceCreams[i];
    newUL.appendChild(newLi);
}
newElement.appendChild(newUL);
creationDiv.appendChild(newElement);
console.log(newElement);

// const unlikedIceCream = newUL.childNodes[3];
// if (unlikedIceCream.innerText === "frutas") {
//     newUL.removeChild(unlikedIceCream);
// }
// error que se genera al intentar remover un child que no pertenece
// if (unlikedIceCream.innerText === "frutas") {
//     newElement.removeChild(unlikedIceCream);
// }
function removeIceCream(t) {
    for(const prop of newUL.childNodes) {
        if (prop.innerText === t) {
            newUL.removeChild(prop);
        }
    }
}
removeIceCream("frutas");
