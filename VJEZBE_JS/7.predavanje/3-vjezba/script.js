"use strict";

/* Idemo koristeći createElement metodu koristiti novi div element, na njemu napraviti klasu i postaviti ga */

const noviZadatak = document.createElement("div");
noviZadatak.className = "novi-element";
noviZadatak.id = "id-novog-elementa";
noviZadatak.setAttribute("name", "ovo je ime novog atributa");
noviZadatak.innerHTML = "Ja sam novi zadatak.";

console.log(noviZadatak);

/* sa appendChild metodom dodajemo element tamo gdje hoćemo */

document.querySelector("#zadatak-list").appendChild(noviZadatak);

//idemo kreirati novi zadatak da izgleda isto kao i ostali

function kreirajZadatak (zadatak) {
    const li = document.createElement("li");

    li.innerHTML = `${zadatak}`
    <button class = "ukloni-zadatak btn-link">
    <i class = "fa-solid fa x-mark"></i>
    </button>;

    document.querySelector("#zadatak-list").appendChild(li);
}

kreirajZadatak("Kupi novine");

//idemo vijdeti kako možemo zamijeniti postojeće elemente

//1. koristeći replace metodu

function zamijeniZadatak () {
    const zadatak = document.querySelector("li.first-child");
    const li = document.createElement("li");
    li.innerText = "Zamijenili smo priv zadatak";

    zadatak.replaceWith(1);
}

zamijeniZadatak();

function zamijeniDrugiZadatak () {
    cosnt zadatak = document.querySelector("li:nth-child(2)");
    zadatak.outerHTML = "<li>Zamijenili smo drugi zadatak.</li>"
}

zamijeniDrugiZadatak();

//3. koristeći neku drugu metodu

function zamijeniTreciZadatak () {
    const lista = document.querySelectorAll("li");
    lista.forEach((zadatak,kljuc)) => {
        if(kljuc === 2) {
        zadatak.outerHTML = "<li>Zamijenili smo i ovaj zadatak koristeći forEach emtodu i if petlju untuar nje.</li>";
        }
    };
}

zamijeniTreciZadatak();

//Brisanje elementa removeChild metodom

function ukloniZadatak () {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");
    ul.removeChild(li);
}

ukloniZadatak();

/* OnClick metoda */

const naslov = document.querySelector("h1");
const listaZadataka = document.querySelector(".zadatak");
const zadaci = listaZadataka.querySelectorAll("li");

function pokreni() {
    console.log(1);
}

document.querySelector("#clear").onclick = pokreni;