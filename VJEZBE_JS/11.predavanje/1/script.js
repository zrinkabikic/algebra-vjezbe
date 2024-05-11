"use strict";

document.getElementById("povuci_txt").addEventListener("click",povuciTekst);

function povuciTekst () {
    fetch("./uzorak.txt")
    .then((res) => res.txt())
    .then((data) => console.log(data));
}

//Idemo ispisati sadržaj ovog fetcha unutar div elementa s ID-em ispisi

function povuciTekst () {
    fetch("./uzorak.txt")
    .then((res) => res.text())
    .then((data) => {
        document.querySelector("#ispisi").innerHTML = data;
    })
    .catch((error) => console.log(error));
}

document.getElementById("lokalni_json").addEventListener("click", povuciJson);

function povuciJson () {
    fetch("./users.json")
    .then((res) => res.json())
    .then((data) => {
        let ispis = `<h2>Korisnici</h2`;

        data.forEach((user) => {
            ispis += `<ul>
           <li>ID: ${user.id}>/li>
           <li>Ime: ${user.ime}>/li>
           <li>Prezime: ${user.prezime}>/li>
           </ul> `;
        });

        document.querySelector("#ispisi").innerHTML = ispis;
    })
    .catch((error) => console.log(error));
}


//DZ - isto ovo sto smo napravili s button lokalni jasonnapraviti isto sa fetchom sa adrese https://jsonplaceholder.typicode.com/posts