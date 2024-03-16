//kreću s riječi "if" i uvjet se piše u zagrade i otvara se blok unutar koje se upisuje zadatak za koji smo naveli uvjet

if(true){
    console.log("Funkcioniram jer sam true");
}

if(false){
    console.log("Ne funkcioniram jer sam true");
}

//false se automatski nije dogodio jer je uvjet false koji JS iscitava vec u samom pocetku i staje kod uvjeta false

//Primjer iz prakse

const godina = 19;
const punoljetan = godina >= 18;
/*u ovom slučaju se ispisuje true */

if(punoljetan){
    console.log("Punoljetan si, možeš glasat.")
}
/*u ovom slučaju ako je zadovoljen uvjet punoljetnosti od gore (da je >=18 konzola će ispisati "Punoljetan si, možeš glasat.") Isti ovaj uvjet se može upisati i u zagradu kod if -if(godina>=18) */

//if-else petlja će definirati što će se dogoditi ako je "if" tvrdnja istinita, a "else" blok ako nije istinita
if(godina<=18){
    console.log("Rezultat provjere je false i ovo se neće izvrtiti")
}else {
    console.log("Ovo će se ispisati jer je ovo sad rezultat if-else petlje.");
}


//Block scope - "let" unutar bloka je definiran samo unutar bloka, ali ako ga postavimo u console.log izvan tog block scope-a on se nece moci izvrtiti
const godRodjenja = 1983;

if(godRodjenja>=2000){
    let stoljece = 21;
} else {
    let stoljece = 20;
}



