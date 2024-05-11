"use strict";

const obecanje = newPromise ((resolve, reject) => {
    setTimeout(() => {
        resolve({ ime: "Zrinka", prezime: "Bikic"});
    }, 1000);
});

obecanje.then = ((data) => console.log(data));

/* Ovako nešto bi mogli napisati i koristeći Async/Await metodu*/

async function cekajObecanje () {
    const odgovor = await obecanje;
    console.log(odgovor);
}

cekajObecanje();

/* Ajmo vidjeti kako bi koristili Async/Await metodu za dohvaćanje sa API-a.*/

async function dohvatiUsera() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users"):
    const data = await res.json();
    console.log(data);
}

dohvatiUsera();