let nullish;

nullish = 10 ?? 20;
nullish = "lijeva" ?? "desna";
nullish = "" ?? "desna";
nullish = 0 ?? "desna";
nullish = null ?? "desna";
nullish = false ?? "desna";
nullish = undefined ?? "desna";

console.log (nullish);

/* && će vratiti prvu falsie vrijednost ili zadnju truthy vrijednost */

let x;

x = 10 && 20;
x = 10 && 20 && 30;
x = 10 && 0 && 20;
x = 10 && "" && 0 && 20;

console.log (x);

/* npr. kada želimo izlistati nešto iz liste koja je prazna */

let lista = [];

console.log(lista[0]);
// u ovom slučaju je undefined jer je lista prazna. ako je lista veća od 0 onda ispiši console.log(lista[0] (jer lista.length nije veća od 0, console.log se neće odvrtit

lista = [1,2];
lista.length > 0 && console.log(lista[0]); /*ovdje imamo članove liste, samim time dužina liste je veća od 0 i console.log će se ispisati*/


//|| će vratiti prvu truthie vrijednost ili zadnju falsie vrijednost
let y;

y = 10 || 20;
y = 0 || 20;
y = 0 || null || "" || undefined; 

console.log(y); /*izbacit će udnefined jer je to zadnja falsie vrijednost */
