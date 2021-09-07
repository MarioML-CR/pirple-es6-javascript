// const clickDiv = document.getElementById("clicky");
// const clicakbleButton = clickDiv.querySelector("button");
// console.log(clickDiv);
// clicakbleButton.addEventListener("click", function(event) {
//     console.log(event);
// });
// otra forma de hacerlo agregando al htm onClick=""
// var handleClick = () => {
//     console.log("Lo logramos...")
// }

// clicakbleButton.addEventListener("click", logEvent);

// clicakbleButton.addEventListener("focus", logEvent);

// clicakbleButton.addEventListener("focusin", logEvent);

// clicakbleButton.addEventListener("focusout", logEvent);

// function logEvent (e) {
//     console.log(e.type);
// }

// function logEvent (e) {
//     clicakbleButton.innerText = e.timeStamp;
//     console.log(e.type);
//     clicakbleButton.removeEventListener("click", logEvent);
//     console.log(e.type);
// }
// toggle es true/false, si es true lo cambia a false y viceversa
// const bckgrnd = document.getElementById("background");
// bckgrnd.addEventListener("mousedown", switchBackground);
// function switchBackground(e) {
//     console.log(e.which);
//     if (e.which === 1) {
//         bckgrnd.classList.toggle("background-color")
//     }
// }
// add es permanente
// function switchBackground(e) {
//     bckgrnd.classList.add("background-color");
// }
// activar un evento cuando se hace click en un objetivo, o fuera de él
const bckgrnd = document.getElementById("background");
const listItemsUl = bckgrnd.querySelector("ul");
const allLis = bckgrnd.querySelectorAll("li");
document.addEventListener("click", switchBackground);
listItemsUl.addEventListener("click", addGreenBackground);

function switchBackground(e) {
    // console.log(e);
    const hasBeenClicked = bckgrnd.contains(e.target);
    // console.log(hasBeenClicked);
    if (hasBeenClicked) {
        bckgrnd.classList.add("background-color");
    } else {
        bckgrnd.classList.remove("background-color");
    }
}
// remueve todas las clases llamadas green
function addGreenBackground (e) {
    console.log(e.target);
    e.stopPropagation();
    for (const prop of allLis) {
        prop.classList.remove("green");
    }
    const targetLi = e.target;
    targetLi.classList.add("green");
}
// busca la clase green y la remueve para luego activar la que se hizo clic
function addGreenBackground (e) {
    e.stopPropagation();
    const targetLi = e.target;
    if (targetLi.nodeName !== "LI"){
        return;
    }
    const green = document.querySelector(".green");
    if (green) {
        green.classList.remove("green");
    }
    targetLi.classList.add("green");
}

// const bckgrnd2 = document.getElementById("background2");
// const allLIs = bckgrnd2.querySelectorAll("li");
// console.log(allLIs);

// for (const prop of allLIs){
//     prop.addEventListener("click", function(e){
//         // console.log("clicked! " + e.target);
//         console.log(this);
//     })
// }

// preventing default
const div2 = document.getElementById("div2").querySelector("a");
console.log(div2.text);

div2.addEventListener("click", (event) => {
    event.preventDefault();
    alert("deshabilitado temporalmente");
});
// otro forma pero no funicionó
// div2.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
//     alert("deshabilitado temporalmente");
// });

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", addToList);

function addToList(e) {
    e.preventDefault();
    const myInput = document.getElementById("myInput").value;
    console.log(myInput);
    const newLi = document.createElement("li");
    newLi.innerText = myInput;
    console.log(newLi);
    listItemsUl.appendChild(newLi);
    myForm.reset();
}

// key events

// document.addEventListener("keydown", (KeyboardEvent) => {
//     console.log(KeyboardEvent.keyCode);
// });

// document.addEventListener("keydown", (event) => {
//     console.log(event.keyCode);
// })

// document.addEventListener("keyup", (e) => {
//     console.log(e.keyCode);
// })

const div3 = document.getElementById("div3");
const para = div3.querySelector("p");
const textArea = div3.querySelector("textarea");
const paraText = "user is typing";
let timer;
let count = 1; // para contar las letras ingresadas

textArea.addEventListener("keydown", addText);
textArea.addEventListener("keyup", removeText);

function addText(e) {
    para.innerText = paraText;
}
function removeText(e) {
    // count ++;
    // console.log(count);
    clearTimeout(timer); // reset el timer para que se mantenga estable
    timer = setTimeout(() => {
        para.innerText = "";
    }, 1000)
}