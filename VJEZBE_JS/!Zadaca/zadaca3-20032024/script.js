"use strict";

/*Zadatak 1 */
/*Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca), koliko iz Istre (brojLovaca2 = 500 lovaca) i koliko iz Dalmacije (brojLovaca3 = 1440 lovaca)*/
/* 
const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;
const ostatakLovaca = (7900 - (brojLovaca1 + brojLovaca2 + brojLovaca3))
const TotalLovciHR = brojLovaca1 + brojLovaca2 + brojLovaca3 + ostatakLovaca

console.log(brojLovaca1);
console.log(brojLovaca2);
console.log(brojLovaca3);
console.log(ostatakLovaca);
console.log(TotalLovciHR);

console.log(brojLovaca1 + brojLovaca2 + brojLovaca3)
console.log(brojLovaca1 + brojLovaca2 + brojLovaca3 + ostatakLovaca);

const udioBrojLovaca1 = brojLovaca1/TotalLovciHR*100;
console.log(udioBrojLovaca1);

const udioBrojLovaca2 = brojLovaca2/TotalLovciHR*100;
console.log(udioBrojLovaca2);

const udioBrojLovaca3 = brojLovaca3/TotalLovciHR*100;
console.log(udioBrojLovaca3);

const udioBrojLovacaOstatak = ostatakLovaca/TotalLovciHR*100;
console.log(udioBrojLovacaOstatak);  */

const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

const zadatak1 = (postotak) => (postotak/7900) * 100;

const postotakLovaca1 = zadatak1 (brojLovaca1);
const postotakLovaca2 = zadatak1 (brojLovaca2);
const postotakLovaca3 = zadatak1 (brojLovaca3);

console.log(postotakLovaca1, postotakLovaca2, postotakLovaca3);

/* Zadatak 2 
Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10, Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija. Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`*
*/

function postotak(populacija) {
    return (populacija / 10000)*100;
}

function opisZemlje (zemlja, populacija){
  const postotakZemlje = postotak(populacija);
  const opis = `${zemlja} ima ${populacija} igrača što je oko ${postotakZemlje}% svijeta`;
  return opis;
}

console.log(opisZemlje("Hrvatska",10));;
console.log(opisZemlje("Kina",3441));
console.log(opisZemlje("USA",332));



/* Zadatak 3 
Imamo 2 tima, koji su igrali međusobno 6 puta i svaki ima po 3 pobjede. Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju.
Tim pobjeđuje jedino ako ima u prosjeku više golova od drugog tima.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka.
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.
Možete iskoristi if-else petlju kako bi složili ispis.

primjer:
Barca : 2, 3, 3, 3, 4, 1
Real : 1, 4, 1, 5, 0, 5
*/

const prosjek = (a,b,c,d,e,e,f) => (a + b + c + d + e +f) / 6;

const prosjekBarca = prosjek(2, 3, 3, 3, 4, 1);
const prosjekReal = prosjek(1, 4, 1, 5, 0, 5);

const zadatak3 = (prosjekBarca, prosjekReal) => {
  if (prosjekBarca > prosjekReal) {
    console.log(`Barca je pobijedila zato što iam prosjek golova od ${prosjekBarca} : 
    ${prosjekReal}`);
  } else if (prosjekReal > prosjekBarca) {
    console.log(`Real je pobijedio zato što ima prosjek golova od ${prosjekReal} : ${prosjekBarca}`);
  } else {
    console.log("Rezultat je izjednačen");
  }
}

zadatak3(prosjekBarca,prosjekReal);
console.log(zadatak3(prosjekBarca,prosjekReal));



/* jednostavni primjeri za probu

  const proba = "proba";
  console.log(proba);

  console.log(proba.length);
  console.log(proba.charAt(2));
  console.log(proba.trim());
  console.log(proba.replace("replace"));


var count = 0;

while(count < 10) {
    console.log(count);
} 

do{
    console.log(count);
    } while (count < 10);

/*kod DO petlje prvo se izvršava naredba koja se prva nalazi te ako je ona zadovoljena, while se neće odvrtiti */
 



