const zemlja = "Hrvatska";
const kontinent = "Europi";
const populacija = 3.8e6;

//Zadatak je prepoloviti populaciju na pola, nakon toga uvećati za 1. Nakon toga definirajte novu varijablu koja će predstavljati populaciju neke druge zemlje (po vašem odabiru), nakon toga usporedite da li je populacija Hrvatske veća od te zemlje koju ste definirali.Za kraj, koristeći string i template literal način i varijable, spremite u varijable rečenicu : „Hrvatska ima 3800000 stanovnika i nalazi se u Europi“. 

console.log((populacija/2)+1);

const zemlja2 = "Francuska";
const populacija2 = 67e6;
const usporedba = populacija>populacija2;

console.log(usporedba);

console.log(zemlja + " ima " + populacija + " stanovnika i nalazi se u " + kontinent +".");

const recenica = `${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}`;
console.log(recenica);


//Izračunaj ITM (Indeks tjelesne mase) Marka i Josipa, ispiši ih i provjeri boolean vrijednost true/false da li je Markov ITM veći od Josipovog ITM-a. Računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)

const MarkoKG = 78;
const MarkoM = 1.69;
const JosipKG = 92;
const JosipM = 1.95;

console.log(MarkoKG, MarkoM, JosipKG, JosipM);

const MarkoITM = MarkoKG/MarkoM ** 2;
console.log(MarkoITM);

const JosipITM = JosipKG/JosipM ** 2;
console.log(JosipITM);

const usporedba2 = JosipITM>MarkoITM;
console.log(usporedba2);

