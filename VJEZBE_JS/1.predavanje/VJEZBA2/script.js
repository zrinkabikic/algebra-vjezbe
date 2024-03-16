const ime = "Matko";
const zanimanje = "učitelj";
const godinaRodjenja = 2004;
const trenutnaGod = 2024;


/* string literal*/
const osoba = "Ja sam " + ime + "," + " " + (trenutnaGod - godinaRodjenja) + "-godišnji" + " " + zanimanje + ".";

console.log(osoba);

/* Template literal -- koristi se kako bi se gornji primer sttring literala mogao puno jasnije napisati. Oni se jasnije pišu i logičniji su. Koristi se desni alt + 7 (koristi se backtick) za otvaranje template literal načina pisanja. Kad se pozivamo na varijablu stavljamo ${x} (dolar i vitčaste zagrade i unutar zagrada varijabla) */

const osobaNovo=`Ja sam ${ime}, ${trenutnaGod - godinaRodjenja}-godišnji ${zanimanje}`;
console.log(osobaNovo);

/* 2. zadatak - Zadane su konstante, potrebno je napraviti rečenicu "Hrvatska ima 3.8m stanovnika i nalazi se u Europi." */

const zemlja = "Hrvatska";
const kontinent = "Europi";
const populacija = 3.8;

const recenica = `${zemlja} ima ${populacija}m stanovnika i nalazi se u${kontinent}.`;
console.log(recenica);

/* Matematičke metode s brojevima i varijablama */

let x; /*trenutno je undefined */

//izračun korijena broja
//matematičku metodu pozivamo s Math
x = Math.sqrt(16);
console.log(x);

//definiranje apsolutne vrijednosti
x = Math.abs(-5);
console.log(x);

//zaokruživanje decimalnog broja; postoji i prisilno zaokruživanje
x = Math.round(5.4);
console.log(x);

//prisilno zaokruživanje an gore
x = Math.ceil(5.2);
console.log(x);

//prisilno zaokruživanje na dolje
x = Math.floor(5.2);
console.log(x);

//uklanjanje decimalne vrijednosti (izgleda jednako kao prisilno zaokruživanje na dolje, ali ima drugačiju vrijednost)
x = Math.trunc(4.4);
console.log(x);

//min. broj iz liste/niza brojeva
x = Math.min(2, 5, 6, 7, 1);
console.log(x);


//max. broj iz liste/niza brojeva
x = Math.max(2, 5, 6, 7, 1);
console.log(x);


//random broj
x = Math.random() * 10;
console.log(x);

//Zadatak - kako dobiti random broj između 1 i 10

/*ovo je kombinacija random i floor metode*/
const x = Math.floor(Math.random() * 10 + 1);
console.log(x);

/*ovo je kombinacija random i trunc metode*/
const x = Math.trunc(Math.random() * 10 + 1);
console.log(x);

/*Zadatak - 
Definirajte 2 varijable (a,b). Neka varijabla a bude random borj između 1-100, a varijabla između 1-50.
Napravi varijable za sumu i razliku ta 2 broja (a i b) i zapiši putem template literala rezultat tih računskih operacija u te varijable, sume i razlike.*/

const a = Math.floor(Math.random() * 100) + 1;
const b = Math.floor(Math.random() * 50) + 1;

const zbroj = a + b;
const razlika = a - b;

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`Suma od a i b: ${zbroj}`);
console.log(`Razlika od a i b: ${razlika}`);

/*rješenje:

const a = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
const b = Math.floor(Math.random() * 50) + 1;  // Random number between 1 and 50


const suma = a + b;
const razlika = a - b;


console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`Suma od a i b: ${suma}`);
console.log(`Razlika od a i b: ${razlika}`);

*/




