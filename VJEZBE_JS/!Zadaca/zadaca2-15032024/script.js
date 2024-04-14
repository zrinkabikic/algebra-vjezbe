//Imamo definiranu varijablu koja sadrži broj stanovnika Hrvatske. Recimo da je prosjek svih zemalja EU 33e6. Provjeri, koristeći varijablu koju ćeš definirati kao „prosjek“ da li je populacija Hr veća od prosjeka EU i ispiši koristeći if/else petlju što će se dogoditi ako je populacija veća/manja od prosjeka EU. Koristite template literal za ispis.

const populacija = 3.8e6;
const prosjekEU = 33e6;

const usporedba = prosjekEU>populacija;
console.log(usporedba);

if(usporedba){
    console.log("Populacija Hrvatske nije veća od prosjeka EU.");
} else{
    console.log("Populacija je veća od prosjeka EU.");
}

//ILI

if (populacija>prosjekEU){
    console.log("Hrvatska ima ${populacija} stanovnika i ima više od prosjeka EU");
} else {
    console.log("Hrvatska ima ${populacija} stanovnika i ima manje od prosjeka EU")
}


//provjeri ITM (Indeks tjelesne mase) Marka i Josipa i utvrdi čiji je veći. Neka piše Markov koeficijent mase je veći od Josipovog koeficijenta mase ili Josipov koeficijent mase je veći od Markovog koeficijenta mase. Koristite if else pristup i template string za console.log. Podsjetnik: računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)

const MarkoKG = 78;
const MarkoM = 1.69;
const JosipKG = 92;
const JosipM = 1.95;

const MarkoITM = MarkoKG/MarkoM**2;
console.log(MarkoITM);

const JosipITM = JosipKG/JosipM**2;
console.log(JosipITM);

if(MarkoITM>JosipITM){
    console.log("Markov ITM je veći od Jospiovog.");
} else{
    console.log("Markov ITM nije veći od Josipovog.");
}



//Riješite koristeći logičke operatore: zamislimo da želimo živjeti u zemlji u kojoj se priča engleski, koja ima manje od 50 m stanovnika i koja nije otok. Utvrdi da li Hrvatska ispunjava te uvjete i ako da ispiši : "Zemlja u kojoj želite živjeti je Hrvatska". Ako ne, onda ispiši : "Hrvatska nije za vas.". Koristite logičke operatore i if else petlju za rješenje zadatka.

const jezik = "engleski";
const zemlja = 50e6;
const uvjetZemlja = zemlja <=50e6;
const lokacija = "otok";

if(jezik && uvjetZemlja && !lokacija){
    console.log("Zemlja u kojoj želite živjeti je Hrvatska.");
} else {
    console.log("Hrvatska nije za vas");
}
