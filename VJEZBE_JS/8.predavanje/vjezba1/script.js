"use strict";

//KEYBOARD EVENTS

const inputKey = document.getElementById("zadatak-input");

const keyDown = (e) => {
    if (e.key === "Enter") {
        alert("Stisnuo si Enter");
    }
};

inputKey.addEventListener("keydown",keyDown);

const onKeyPress = () => {
    console.log("keypress");
    if(e.repeat){
        alert(`Pusti tipku ${e.key}`)
    }
};

const keyUp = () => {
    console.log("keyup");
};

inputKey.addEventListener("keypress",onKeyPress); //bilo što da stisnete clg-at će se
inputKey.addEventListener("keyup",keyUp);
inputKey.addEventListener("keydown",keyDown); // čim stisnemo enter, okinut će se alert

//INPUT EVENTS
//za kreiranje evenata, odnosno spajanje evenata s dokuemntom trebamo imati definirane elemente u HTML 

const inputForma = docuemnt.getElementById("filter");
const naslov = document.querySelector("h2");

const onInput = (e) => {
    console.log(e.target.value); // daje vrijednost koja je tretnutno upisana u input
    naslov.textContent = e.target.value; // s ovim mijenjamos adržaj h2 s onim što je upisano u input polju
}

const onFocus = () => {
    console.log("input je u fokusu");
}

const onBlur = () => {
    console.log("input nije u fokusu");
}

inputForma.addEventListener("input", onInput); // input će raditi isto što i keyDown ali ga je bolje upotrijebiti kod input polja
inputForma.addEventListener("focus", onFocus); //provjerava jesmo li kliknuli na input polje
inputForma.addEventListener("blur", onBlur); //provjerava jesmo li kliknuli van input polja

const forma = document.getElementById("zadatak-forma");

const onSubmit = (e) => {
    e.preventDefault();
}

const zadatak = document.getElementById("zadatak-input"){
if (zadatak.value === "") {
    alert("Niste unijeli zadatak");
    return;
}
console.log(zadatak.value);
}

forma.addEventListener("submit", onSubmit);

//EVENT BUBBLING

const gumb = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

gumb.addEventListener("click", () => {
    alert("Gumb je stisnut");
    e.stopPropagation(); // ovo dodajemo kako bi sprječili event bubbling
});

div.addEventListener("click", () => {
    alert("Div je stisnut");
});

form.addEventListener("click", () => {
    alert("Forma je stisnuta")
})

//BRISANJE ELEMENTA IZ HTML DOM-a

const lista = document.querySelector("#zadatak-list");

lista.addEventListener("click", (e) => {
    if (e.target.className === "pojedinacni-zadatak") {
        e.target.remove();
    }
});



