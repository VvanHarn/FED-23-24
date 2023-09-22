// JavaScript Document
console.log("hi");

/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var menuButton = document.querySelector("header nav button");
var hetMenu = document.querySelector("nav");
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu () {
  hetMenu.classList.toggle("open");
}