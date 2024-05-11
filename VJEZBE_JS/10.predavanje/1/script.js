"use strict";

/* 
HyperText Transfer protocol je protokoal za slanje i primanje podataka na webu. zahtjev inicijalizirate vi (klijent), a server će reagirati sa odgovorom.
Odgovor može sadržavati HTML/CSS/JS fileove. slike ili druge resurse kao što su podaci u XML ili JSON obliku.

Najčešće dpphvaćamo, podatke i ispisujemo ih putem DOM manipulacije, ili updatamo/brišemo određene podatke.

Imamo GET, POST, PUT&PATCH (EDIT) i DELETE zathjeve.

GET - traži podatke sa servera
POST - šalje pdoatke na server
PUT&PATCH - update podataka na serveru
DELETE - briše podatke za servera

HTTP status kodovi:

100 - continue

200 - uspjeh
201 - uspjeh (nešto je kreirano)
204 - uspjeh (nema sadržaja)

300 - redirect
301 - trajni redirect
302 - privremeni redirect

400 - error kod klijenta (Bad request)
401 - neautorizirani zahtjev
403 - zabranjen zathjev
404 - zahtjev za nečim što ne postoji (server ne može naći)

500 - greška na serveru

*/

//prvi korak je definirati XMLHttpRequest kao novi objekt koji sadržava naše podatke, metodu (je li dohvaćanje ili slanje podataka na server) i putanju (url). ovo nam omogućava da radimo zahtjeve prema serveru bez refresha stranice.

const xhr = new XMLHttpRequest();
const metoda = "GET";
const url = ".imena.json";


const xhr2 = new XMLHttpRequest();

xhr2.open = (metoda, url);

xhr2.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        data.forEach ((osoba) => {
            const li = document.createElement("li");
            li.innerHTML = `${osoba.ime} ${osoba.prezime} ima ${osoba.godina} godina/e`;
            document.getElementById("imena").appendChild(li);
        });
    }
}


xhr2.send();


const xhr3 = new XMLHttpRequest();
chr3.open("GET","https.api.github.com/users");

xhr3.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        data.forEadch((user) => {
            const li = document.createElement("li");
            document.getElementsById("useri").appendChild(li);
        });
    }
}

xhr3.send();

