"use strict";

//DEFINIRANJE VARIJABLI
// potrebna je forma za kreiranje novog elementa:
const forma = document.getElementById("zadatak-forma");

//dohvaćanje input elementa iz html-a:
const zadatakInput = document.getElementById("zadatak-input");

const listaZadataka = document.getElementById("zadatak-list");

const brisiSve = document.getElementById("clear");

const filter = document. getElementById("filter");

const zadaci = listaZadataka.querySelectorAll("li");

/* ovo su 4 varijable u koje spremamo za ono što nam je potrebno za to do listu*/

//DEFINIRANJE FUNKCIJA

//funkcija za kreiranje novog zadatka:

//za JS razmisljam ovako: trebam definirat kako će izgledat element koji kreiram - odnosno kako list itemi u mom HTML-u izgledaju. Onako kako izgleda u HTML dokuemtnu isot tako ga moram prepisati i u JS file, a na kraju ću ih mroti moći dohvatiti s gore kreiranim varijablama. Na submit se te funkcije dohvaćaju odnosno kreiraju se novi lsit itemi i spremaju kao novi članovi liste. To se radi pmoću funkcija i eventListenera.

//funkcija za kreiranje novog zadatak:


const dodajZadatak = (e) => {
    //prvi korak koji radimo je sprječavamo da se nakon refresha list item briše pomoću e.preventDefault. Nakon toga dodajemo varijablu u if funkciju:
e.preventDefault();
    //drugi korak je spriječiti dodavanje praznog polja - ako je input polje prazno neka se pojavi ovaj alert:
if (zadatakInput.value === ""){
    alert("Molimo vas unesite zadatak")
}

    //zatim je kreiranje elementa s createElement. li je novi list item koji smo kreirali kao novu varijablu unutar funkcije, a pokuplja se iz input polja s pomoću createtextnode.value. Ono što je unutar polja će se pojaviiti u novom list itemu 
    const li = document.createElement("li");

    li.appendChild(document.createtextNode(zadatakInput.value));
    console.log(li); // provjera da li nam je li element kreiran i da sadrži sadržaj iz input polja
 
    //kreiranje delete gumbića u list itemu i dodavanje klase na gumb
    const delGumb = document.createElement("button");
    delGumb.className = "ukloni-zadatak btn-link";

    //kreiranje font-awesome ikonice i klase za tu ikonicu
    const ikona = document.createElement("i");
    ikona.className = "fa-solid fa-xmark";

    //dodavanje ikonice unutar buttona
    delGumb.appendChild(ikona);

    //dodavanje buttona unutar list itema
    li.appendChild(delGumb);

    //dodavanje list itema na lsitu zadataka
    listaZadataka.appendChild(li);

    //nakon ovoga je još potrebno dodati i naredbu da se očisti input polje nakon što smo appendali vrijednost na listu zadatka - resetiranje input polja tako da stavimo prazan string pod .value
    zadatakInput.value = "";
};

//FUNKCIJA ZA BRISANJE POJEDINAČNOG ZADATKA
const obrisiZadatak = (e) => {
    if(e.target.parentElement.classList.contains("ukloni-zadatak")) {
        e.target.parentElement.parentElement.remove();
    }
    //ako njegov parent element u klasi lista ima (contains) "ukloni-zadatak", onda će uklonit cijeli list item, odnosno ako nema, na odućem e.targetu se pomičemo još do razine iznad  (prvo do buttona, onda do list itema) i removat čemo taj element. Ispod je dodan eventListener koji na klik producira ovu funkciju
};

//funkcija brisanje svih zadataka

//ovdje nam čak ne treba (e) i u funckiji ostavljamo prazan string 
const obrisiZadatke = () => {
    listaZadataka.innerHTML = "";
};


//funkcija koja provjerava ima li zadataka u listi na temelju koje definiramo postoji li button s "Pobriši sve elemente" i poljem za filter. Gore na global scope su dodane jos varijable filter i zadaci za ovu funkciju
//funkcija za provjeru ima li elemenata u listi

const provjeriListu = () => {
    /* console.log(zadaci); --> ako ovaj dio je samo za provjeru imamo li sve list iteme na popisu u konzoli */
//za ovo možemo iskoristiti CSS. if na filteru je duljina 0, odnosno nema ničega, da je display (u css-u) NONE, a ako je nešto drugo (else) da bude "block" (.style.display = "block")
if (zadaci.length === 0) {
        filter.style.display === "none";
        brisiSve.style.display = "none";
    } else {
        filter.style.display = "block";
        brisiSve.style.display = "block";
    }
}

//Event listeneri

forma.addEventListener("submit", dodajZadatak)
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
provjeriListu();

//funkcija za filtriranje zadatka

const filtrirajZadatke = (e) => {
    //ove dvije varijable mogu biti pospremljene i na globalnom scopu
    const zadaci = listaZadataka.querySelectorAll("li");
    const tekst = e.target.value.toLowerCase();

    //pomoću .forEach moetode na svakom zadatku kreiramo funkciju (može biti i filter i map ali je ovo kao kreativnije). Jer u svakom list itemu imamo button, odnosno treba nam samo prva vrijednost untuar list itema, tj. treba nam samo vrijednost, a ne i button pa koristimo first child metodu - za svaki zadatak biramo samo first child i biramo text content koji se na kraju pretvara u mala slova 
    zadaci.forEach((zadatak)  => {
        const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
        /*console.log(imeZadatka);*/
        if (imeZadatka.indexOf(tekst) != -1) {
            zadatak.style.display = "flex";
        } else {
            zadatak.style.display = "none";
        }
    })
};

