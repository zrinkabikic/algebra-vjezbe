const dan = prompt ("Koji je danas dan?");

//switch zahtijeva input vrijednost (vrijednost u caseu koju uspoređuje s parametrom u zagradi. Ako je case ponedjeljak ispisuje se vrijednost posliej dvotočke). Nakon što definiramo što želimo da case ispišie, definiramo break. 
switch (dan){
    case "ponedjeljak":
        console.log("danas je prvi dan tjedna"); // ovaj case radi provjeru kao da smo upisali dan  === ponedjeljak
        console.log("danas smo 4 dana udaljeni od vikenda");
        break; //kada ovdje ne bi bilo breaka, kod će ispisati i idući dan, u biti sve dok ne naleti na drugi break
        case "utorak":
            console.log("danas je drugi dan tjedna");
            break;
        case "srijeda":
            console.log("sredina tjedna");
        case "četvrtak":
            console.log("mali petak");
            break;
        case "petak":
            console.log("PETAK JE!!!");
            break;
        case "subota":
        case "nedjelja":
            console.log("vikend...");
            break;
        default: 
        console.log("niste unijeli dan u tjednu");
}


//Napišite while petlju koja će ispisivati sve brojeve od 3 do 20

let broj = 3;

while (broj < 20) {
    console.log(broj);
    broj++;
}

//Ispišite sve brojeve koji su djeljivi s 9
while (broj <= 20) {
    if (broj % 9 === 0) {
      console.log(broj);
    } else if (broj %  9 != 0) {
        console.log(broj);
    }
    broj++;
  }
