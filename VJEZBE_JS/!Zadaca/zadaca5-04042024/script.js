"use strict";

/* 
Zadatak 1
Imamo listu ljudi. Iz te liste koristeći map metodu prođite kroz sve članove liste, kreirajte za svakog od njih karticu (div element) koji će sadržavati vrijednosti polja „name“ i „age“ iz liste.
Tu map metodu pozovi koristeći Event listener koji koristi click event. Taj click event složi na neki HTML element koji kreirate po volji u vašem HTML fileu.
Testni podaci:
*/

let data = [
    {
      name: "Marko",
      age: "30",
    },
    {
      name: "Luka",
      age: "32",
    },
    {
      name: "Ivan",
      age: "24",
    },
    {
      name: "Stjepan",
      age: "33",
    },
    {
      name: "Domagoj",
      age: "22",
    },
    {
      name: "Kristijan",
      age: "25",
    },
  ];

data.forEach((ime) => console.log(ime.name));

const listaImena = data.map((ime) => ime.name);
console.log(listaImena);

function kreirajdiv () {
  listaImena.createElement("div");
};


// const noviZadatak = document.createElement("div");
  

  /*
  Zadatak 2
  Kreiraj Event listener  koji će ciljati gumb koji kreirate u HTML dokumentu.
  Kao event postavite klik a u funkciji definirajte listu boja i složite izmjenu pozadinske boje body elementa koristeći tu listu na način da svaki klik gumba za pozadinsku boju bodya postavi idućeg člana liste boja.
  Bonus zadatak: osmislite rješenje kako se prebaciti na prvog člana liste kada dođete kraja liste.
  Primjer liste boja:
  const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];

  */
  
