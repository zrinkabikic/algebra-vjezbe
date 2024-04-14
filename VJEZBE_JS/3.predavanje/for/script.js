for (var count=0; count<10;count++){
    console.log(count);
}

console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");

//definiramo gornje zapise rkoz 1 i koristimo let je je vaijabla promjenjiva
for (let ponavljanje = 1; ponavljanje <=10; ponavljanje++){
    console.log("gol ${ponavljanje}");
}



//LISTA
const prijatelj1 ="Luka";
const prijatelj2 = "Ivan";
const prijatelj3 = "Hrvoje";

const prijatelji = ["Luka", "Ivan", "Hrvoje"]

const godine = new Array (24,28, 29);

console.log(prijatelji); //ispisuje cijelu listu
console.log(prijatelji[0]); //ispisuje prvog (nultog) člana liste [ ]


console.log(prijatelji.length); //.length ispisuje broj članova

console.log(prijatelji[prijatelji.length - 1]); //ispis trećeg člana liste: brojanje u listi kreće od 0 i zato se stavlja -1

prijatelji[2] = "Stjepan";
console.log(prijatelji);