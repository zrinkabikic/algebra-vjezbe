"use strict";

/* Fetch je moderniji pristup HTTP requestovima. Za razliku od XMLHttpRequesta Fetch sam po sebi vraća promise. Fetch je metoda koju imamo samo u samom window objektu. */

const url = "https://jsonplaceholder.typicode.com/todos/1";

function dohvatiPodatke () {
    const response = fetch(url) //ovdje se umjesto url može direktno staviti link
    .then((response) => response.json())
    .then((data));
}

dohvatiPodatke();


fetch("./filmovi.json")
.then((response) => response.json())
.then((podaci) => console.log(podaci));

fetch("./test.txt")
.then((response) => response.text())
.then((data) => console.log(data));



//primjer:dohvatite s adrese todova fetchom podatke i zamijenite ih h1 u DOM-u sa sadržajem titela u data responsu fetcha

fetch("./todo.txt")
.then((response) => response.json()) //ovaj drugi .json poslije strelice zapravo pretvara objekt u oblik json koji možemo pročitati
.then((data) => (document.querySelector("h1").textContent = data.title));


/*
Fetch metoda po deafultu ima GET metodu u fetch requestu, ako ako nešto želimo poslati metodom POST, to moramo i napisati. U svakom requestu se u biti nalaze 3 stvari:
1. method: HTTP metoda koju želimo koristiti, po defaultu GET
2. body: podaci koje želimo poslati
3. headers: bilo kakav HTTP header koji želimo koristiti
*/

function kreirajPost(post){
    fetch("https://jsonplaceholder.typicode.com/posts ", {
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify({
        title: body.title,
        body: post.body,
    }),
    });
}

kreirajPost({title: "Moj post", body: "Ovo je moj post"});

//DESTRUKTURANI PRIMJER OD GORE
//Možemo iskoristiti i dekonstruiranje i umjesto posta kao paramterta poslati title i body, a onda skraćeno i napisati u našem bodyju title i body. U headersu definiramo COntent-Type kao application/json jer šaljemo json podatke. Ako postoji potreba za pristupnim tokenom šaljemo i token sa vrijednosti.

function kreirajPost(title, body){
    fetch("https://jsonplaceholder.typicode.com/posts ", {
        method:"POST",
        headers:{
        "Content-Type":"application/json",
        token: "abc123",
    },
        body: JSON.stringify({
        title: title,
        body: body,
    }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

kreirajPost({title: "Moj post", body: "Ovo je moj post"});