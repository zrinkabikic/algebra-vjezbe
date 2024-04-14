"use strict";

const objekt = {
    firstName: "Darko",
    lastName: "Horvat",
    godine: 30,
    zanimanje: "poštar",
    prijatelji: ["Marko","Maja","Josipa"],

}

console.log(objekt);

console.log(objekt.prijatelji[2]);

console.log(objekt["godine"]);


//demonstracija kada korisititi bracket notaciju
console.log(objekt.firstName);
console.log(objekt["firstName"]);

//konkretno kada koristiti bracket notaciju

const spojnica = "Name";

console.log(objekt["first"+spojnica]);
console.log(objekt["last" + spojnica]);

/*
const upitnik = prompt (
    "Što vas zanima o osobi? Izaberi između firstName, lastName, godine, zanimanje, prijatelji"
);

//dot notacijom ne možemo ovo ispisati, tj. ne znamo što je ovo, jer naravno upitnik nije član objekta
console.log(objekt.upitnik);

//bracket notacijom ovo možemo dohvatiti (bracket notacija je jednostavnija za pozivanje jer poziva i preko prompta)
console.log(objekt[upitnik]);
*/


//par korisnih o listama
const prijatelji = ["Marko","Maja","Josipa"];

//indexOf metoda - vraća broj u listi na kojem se nalazi taj član
console.log(prijatelji.indexOf("Josip"));

//includes - boolean provjera

console.log(prijatelji.includes("Josipa"));

if (prijatelji.includes("Josipa")) {
    console.log("Imam prijatlejicu Josipu");
}

//NAČINI SPAJANJA LISTI

let x;
const voce = ["jabuke", "kruske", "tresnje"];
const bobice  = ["kupine","maline","borovnice"];

//1. nestanje - .push()
/*
voce.push(bobice);
console.log(voce);
*/
//2. concat - .concat()

x = voce.concat(bobice);
console.log(x);

//3. spread operator - služi za expandiranje listi/objekata u jednu varijbalu- U biti ćemo ga koristiti za spajanje objekata prije nego listi. Koristimo 3 točke prije postojeće liste u koju dodajemo nove članove

const brojevi = [1,2,3];
const noviBrojevi = [...brojevi, 4]
console.log(noviBrojevi);

const brojevi2 = [4,5,6];
console.log(brojevi2) 

const noviBrojevi2 = [...brojevi, ...brojevi2];
console.log(noviBrojevi2);

//prije se koristila flat metoda
const lista = [voce, bobice];
const slozenaLista = lista.flat();
console.log(slozenaLista);

