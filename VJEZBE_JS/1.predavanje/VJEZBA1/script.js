/* Shift + Alt + A - shortcut za višelinijski komentar */

/* Možete definirati varijable pomoću const. let i var.
 */

/* const je varijabla koja se mora odmah inicijalizirat*/
const js = "JS je suuuuper";


/* let način definiranja varijable se može mijenjat vrijednost i može se deklarirat, naknadno inicijalizirat i može mu se mijenjati vrijednost */
let js2;
js2 = "JS je super";


/*var je treći način deklariranja varijable. Samo se s varom može redeklarirat varijabla*/
var varX =  5;
var varX = 6;

/* clg je kratica za console.log */
console.log(js);
console.log(js2, varX);


let x = 10 + 5; /* =15*/
/* x = x + 10; */ /* =25*/
x += 10; /*=25*/

x *= 4;
x = x + 1;
x++; /*uvećanje varijable x za 1*/
x--; /*smanjenje variajble x za 1*/


/* USPOREDNI OPERATERI - rezultat je uvijek boolean - true ili false*/

console.log(godineStarostiJura > godineStarostiSara); false
const punoljetan = godineStarostiJura >= 18;
console.log(punoljetan); true


//Kombinranje matematičkih i usporednih operatera

console.log(trenutnaGod - 1991 > ternutnaGod - 1988); false

/* Zadatak 1 - definirajte 3 varijable i dodijelite im vrijednosti. Nakon toga ih ispišite u konzoli. */

let ime2;
ime2 = "Zrinka";
console.log(ime2);

const ime3 = "Zrinka";
const prezime = "Bikić";
let godine = 26;

console.log(ime3, prezime, godine);