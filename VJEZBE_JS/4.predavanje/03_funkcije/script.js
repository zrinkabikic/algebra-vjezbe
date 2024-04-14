"use strict";

//deklariranje funkcije

function ispis () {
console.log("Zovem se Zrinka");
}

//pozivanje funkcije (calling, running, invoking, executing a function)
ispis ();

const test = nutriBullet(7,2);

function nutriBullet(jabuke,kruske) {
    console.log(jabuke,kruske);
    const sok =`Sok od ${jabuke} jabuka i ${kruske} krušaka`;
    return sok;
}

nutriBullet(3,2);

const sokOdJabuke = nutriBullet(5,1);
const sokOdKruske = nutriBullet(2,4);

console.log(sokOdJabuke,sokOdKruske,test);

//ARROW FUNKCIJA

function rodjenje (godRodjenja){
    return 2024 - godRodjenja;
}

console.log(rodjenje(2001));

//ista funkcija napisana arrow funkcijskom sintaksom

const arrowRodjenje = (godRodjenje) => 2024 - godRodjenje;
console.log(arrowRodjenje(2003));

//primjer arrow funkcije

const godDoMirovine = (godRodjenja, imePrezime) => {
    const godine = 2024 = godRodjenja;
    const mirovina = 65 - godine;
    if (mirovina > 0) {
        return`${imePrezime} će se umiroviti za ${mirovina} godina/e.`
    } else 
    return `${imePrezime} je već u mirovini.`
};

console.log(godDoMirovine(1942,"Stjepan Stjepić"));
console.log(godDoMirovine(2004,"Hrvoje Horvat"));