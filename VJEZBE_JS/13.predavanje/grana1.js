console.log("grana1");

const students = [
    { name: "Alice", score: 92 },
    { name: "Bob", score: 87 },
    { name: "Charlie", score: 95 },
    { name: "David", score: 78 },
    { name: "Emma", score: 90 },
  ];

  console.log(students);

  const highScorers = students.filter((student) => {
    return student.score >= 90;
  });

  console.log(highScorers);

for (let i = 0; i < highScorers.length; i +=1) {
    console.log(highScorers[i].name);
}



// filter metoda iz liste isfiltrira one vrijednosti koje odgovaraju našem parametru, a to je naredba pod return sa zadanim parametrom student i ta konstanta kreira novu listu kroz .filter
//da bismo iz te liste dobili samo imena trebamo tu konstantu highScorers provući kroz for loop. Stavljamo varijablu i koja označuje indeks vrijednosti u listi i kao zadnji parametar da se svaki put poveća za 1. Srednji parametar nam označava što želimo da se dogodi i to je u ovom slučaju da stane kada dođe do zadnjeg indeksa.