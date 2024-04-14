"use strict";

/* dohvaćanje određenog elementa pomoću taga i od tog se elementa izrađuje lista unutar koejga se pomoću [] dohvaća neki element kao da e dohvaća iz liste*/
console.log(document.getElementsByTagName("h1")[0].innerHTML);

/*dohvaćanje određenog elementa i na njega psotavljanje novog atributa */
document.getElementById("naslov").setAttribute("class", "naslov_h1");

const naslov = docuemnt.getElementById("naslov");
naslov.innerHTML = "<strong>Ovo je novi naslov</strong>";

/* Ovo među ostalim možemo onda elegantno koristiti i za izmjenu CSS-a */
naslov.style.color = "FF000";
naslov.style.backgroundColor = "#eee";
naslov.style.padding = "2rem";
naslov.style.borderRadius = "5px";

/* Query selectorom možemo odobrati što god hoćemo po atributu - razlika od prvog je što ne trebamo pisati innerHTML */

console.log(document.querySelector("h1"));
console.log(document.querySelector(#naslov));
console.log(document.querySelector(.container));

/* QuerySelectorAll funkcionira isto kao i QuerySelector, ali s njim sekektiramo sve instance koje imaju podešen atribut kojeg targetiramo */

const lista = document.querySelectorAll("ul li");
console.log(lista);
console.log(lista[2].innerHTML);

lista.forEach((clan_liste,kljuc) => {
    clan_liste.style.color = "#ff0000";

    if (kljuc === 1) {
        clan_liste.remove();
    }

    if(kljuc === 2) {
        clan_liste.innerHTML = `Kupi novine <mark>u trgovini</mark>`;
    
    }
});

/* GetElementByClassName */

const dijete = docuemnt.getElementsByClassName("diejte");
console.log(dijete);
console.log(dijete[2].innerHTML);

//primjer

let podaci;
const roditelj = document.querySelector(".roditelj");
console.log(roditelji);

podaci = roditelj.children;
podaci = roditelj.children[1].innerHTML;
podaci = roditelj.children[1].innerText;
podaci = roditelj.children[1].className;

roditelj.children[1].innerText = "Promijenio sam tekst";
roditelj.children[1].innerHTML = "Promijenio sam tekst <mark>opet</mark>";
roditelj.children[1].style.color = "#ff0000";

roditelj.firstElementChild.innerText = "Ovako mijenjamo prvog člana";
roditelj.lastElementChild.innerText = "Ovako mijenjamo zadnjeg člana";

//primjer drugog smjera kretanja

const drugoDijete = document.querySelector(".dijete:nth-child(2)");
console.log(drugoDijete);

podaci = drugoDijete.nextElementSibling;
drugoDijete.nextElementSibling.style.fontSize


