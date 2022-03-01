


console.log("*****Elementos del documento*****");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);


// ***** Gets Elements y Query*****
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("a"));//Tiene la misma funcion de agregar por id que getElementById, tambien es un poco mas lento
console.log(document.querySelectorAll("a"));
document.querySelectorAll("a").forEach((el) => console.log(el));

//**** Atributos y Data-attributes****
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

//*****ESTILOS Y VARIABLES EN CSS ***** */

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(window.getComputedStyle($linkDOM));
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign  = "center";
// $linkDOM.style.marginLeft  = "auto";
// $linkDOM.style.padding  = "1rem";
// $linkDOM.style.borderRadius  = ".5rem";

// Variables CSS-Custom Properties CSS

// const $html = document.documentElement,
//     $body = document.body;

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
//     varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

// console.log(varDarkColor,varYellowColor);


// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;


// $html.style.setProperty("--dark-color","#000");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// $body.style.setProperty("background-color",varDarkColor);

// Clases CSS

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");
$card.classList.toggle("rotate-45");

