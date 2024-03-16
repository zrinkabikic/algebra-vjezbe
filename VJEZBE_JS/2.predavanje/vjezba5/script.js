const godina = 18;

if(godina === 18){
    console.log("Punoljetni ste");
}
/*ovo će se ispisati jer stroga (strict) provjera će provjeriti vrijednosti podataka i tipove podataka i ako se oboje slaže, onda će to biti true...*/

if("18"===18){
    console.log("ovo neće ispisati");
}
/*ovo se neće ispisati jer iako je vrijednost podataka ista, tipovi nisu isti (string nije jednak broju) */

if("18"==18){
    console.log("ovo će se ispisati...");
}
/*ovo će se ispisati jer je labava (loose) provjera koja će samo provjeriti da li su vrijednosti podataka iste, neće provjeriti tipove podataka*/


const istina = true;
const laz = false;


console.log (istina && laz);
//"I" operator se piše s 2 znaka "&&" i rezultat njegove provjere će biti true samo ako su svi članovi provjeri true


console.log(istina||laz||false);
//"ILI" operator se piše s dva znaka || i rezultat njegove provjere će biti true čim je jedan od članova provjere true

//NOT operator - definira se znakom "!" i za potrebe provjere mijenja vrijednost u suprotnu do zadane
const punoljetan=true;
if(istina&&!punoljetan){
    console.log("Ovo je istinita tvrdnja i ovo će se ispisati...");
}

//NULLISH COALESCING OPERATOR nulti operator spajanja - logički operator koji će vratiti operand sa desne strane ako je sa lijeve strane vrijednost operanda null ili undefined, inače će vratiti lijevog operanda (za razliku od truthy i falsy koji će vratiti i 0 i prazan string.Definira se s 2 upitnika "??"

let nullish;



