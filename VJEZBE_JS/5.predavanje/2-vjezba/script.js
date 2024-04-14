"use strict";

const osoba1 = {
    ime: "Iva",
};

const osoba2 = osoba1;

console.log(osoba1,osoba2);

osoba2.ime = "Luka";

console.log(osoba1,osoba2);

//izrada kopije objekta, ali samih vrijednosti u heap memoriji

const user1 = {
    ime: "Darko",
    prezime: "Horvat",
    godien:30,
    zanimanje:"poštar",
    prijatelji:["Marko","Luka","Matija"],
}

const user2 = {
    ...user1,
    ime:"Marija",
    prezime:"Marić",
}

user1.ime = "Marko";


user1.prijatelji.shift();

console.table(user1);
console.table(user2);

const stariObjekt = {
    a: {b:10},
    c:2,
}

//DEEP COPY

const noviObjekt = structuredClone(stariObjekt);

stariObjekt.c = 5;
stariObjekt.a.b = 5;
console.table(stariObjekt);
console.table(noviObjekt);


//implementacija ključne riječi this na ovom objektu

const osoba = {
    ime:"Darko",
    prezime:"Horavt",
    godRodjenja:1994,
    zanimanje:["Luka","Matija","Marko"],
    vozackaDozvola:true,
    starost: function (godRodjenja){
        return 2024 - godRodjenja
    },
}
