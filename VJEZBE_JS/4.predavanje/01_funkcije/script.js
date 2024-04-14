const godine = 23;

if (godine >=18) {
    console.log("Punoljetan si");
} else console.log("Maloljetan si");

//TROJNI OPERATOR ternary operator je drgu način pisanja if else funkcije

godine >=18 ? console.log("Može") : console.log("Ne može");

const punoljetan = godine>=18 ? "Može" : "Ne može";
console.log(punoljetan);

console.log(`${godine >=18 ? "može" : "ne može"}`);

//praktičan primjer

const auth = true;
let redirect;

if (auth) {
    alert ("Autorizacija je prošla");
    redirect = "/dashborad";
} else {
    alert ("Autorizacija nije prošla");
    redirect = "/login"
}

// ili s trojnim operatorom

redirect = auth
 ? (alert ("autorizacija je prošla"), (redirect = "/dashboard"))
 : (alert ("autorizacija nije prošla");(redirect = "/login"));

 console.log(redirect);