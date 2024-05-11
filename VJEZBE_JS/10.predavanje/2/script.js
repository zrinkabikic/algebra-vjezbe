"use strict";

const obecanje = new Promise ((resolve, reject) => {
    setTimeout(() => {
    console.log("Async zadatak je dovršen");
    resolve();
},1000);
});

obecanje.then(() => {
    console.log("obećanje je ivršeno...");
});

console.log("Pozz iz globalnog scopea");

new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve({ ime: "Igor", prezime:"Jevremović"});
    }, 1000);
}).then((osoba) => console.log(`${osoba.ime} ${osoba.prezime} je tu... `));


