/* 
Zadatak 1 (Vježba sa funkcijama i listama)
Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je napojnica 20%..

- Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.
- Napravite Listu koja će koristiti testne podatke dolje.
- Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste dobili koristeći funkciju za izračun napojnica (ona prva gore).
- Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).

Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u posebne varijable prvo nego direktno u novu listu

testni podaci:

račun 125
račun 555
račun 44
*/

const kalkulator = (racun) => {
    if (racun >= 50 && racun < 300) {
        const napojnica = racun * 0.15; 
        return napojnica;
    } else {
        const napojnica = racun * 0.2; 
        return napojnica;
}
}

console.log(kalkulator(125));
console.log(kalkulator(555));
console.log(kalkulator(44));

const racuniLista = [125,555,44];

const napojniceLista = [(kalkulator(125)),(kalkulator(555)),(kalkulator(44))];
console.log(napojniceLista);


const total = (racun,kalkulator) => {const total = racun + kalkulator; return total};

const total1 = total(125,kalkulator(125));
const total2 = total(555,kalkulator(555));
const total3 = total(44,kalkulator(44));
console.log(total1,total2,total3);



/* 
Zadatak 2
Idemo opet do Marka i Josipa i njihovog ITM-a. Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije. Zapamtite: ITM = masa/visina ** 2

- Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina.
- Kreiraj calcITM metodu na svakom objektu koja će izračunati ITM (ista metoda na oba).
- Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return) ime
- logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti

NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!

Test data: 
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm
*/


const osoba1 = {
  ime: "Marko",
  tezina:78,
  visina: 1.69,
  ITM: function () {
    const ITM = tezina/visina**2;
    return ITM;
}
}

console.log(osoba1);

const osoba2 = {
  ime: "Josip",
  tezina:92,
  visina: 1.95,
  ITM: function () {
    const ITM = tezina/visina**2;
    return ITM;
}
}

const recenica = `${osoba1} ima viši ITM od ${osoba1} i iznosi ${osoba2["ITM"]}`;
console.log(recenica);





/*
Zadatak 3
Imamo objekt album. Napravi novi objekt (noviAlbum) i dodaj ga u prvi objekt kao drugog člana liste (ali isto kao objekt).

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};

*/

/*
Zadatak 4
Napravite listu imena (do 5 komada), neka jedno ime bude vaše ime. Napravite for petlju koja će kada naleti na vaše ime ispisati "Ime je super" dok će ostala imena samo ispisat.
**/

/*
Zadatak 5
Napravite pomoću while petlje rješenje za primjer bacanja kocke dok ne dobijemo 6.  Znači ne znamo kada ćemo prekinuti loop.
Pomoć: Kada koristimo Math.random to će biti broj između 0 i 1, doslovno decimalni broj stoga morate tome doskočiti. Kako bi maknuli decimalu pišemo Math.trunc ili Math.floor.
*/

const broj = Math.trunc(Math.random() * 10);


while (broj <= 6) {
  if (broj === 6) {
    return "Dobili smo 6";
   } else {
    broj++;
}
};




/*
Zadatak 6
Idemo opet nazad do Jože i njegovog kalkulatora napojnice. U njegovoj zemlji uobičajeno je dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

1) napravi listu racuni koja sadrži 10 vrijednosti između 1 i 400.
2) napravi prazne liste za napojnice i totale (racun + napojnica)
3)Vaš zadatak je izračunati napojnicu ovisno o veličini računa.Ovo smo već izračunali, koristimo istu funkciju koju smo koristili zadnji put. Onda upotrijebite for petlju kako bi napravili 10 kalkulacija.

Tip: pozovite napojnica varijablu iz točke 3 unutar petlje i upotrijebite push metodu kako bi dodali vrijednosti napojnici i ukupnim listama.

Savjet 1 : prvo zbrojite sve vrijednosti u listi. Za dio sa zbrajanjem krenite sa kreiranjem varijable sum koja kreće sa početnom vrijednosti 0. U svakoj iteraciji dodajte trenutnu vrijednost liste u sum varijablu.
Savjet 2 : za izračun prosjeka, podijelite sumu koju ste dobili sa brojem članova liste.
Savjet 3 : pozovite funkciju sa (racun + napojnica) listom
*/