const auti = [
    { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
    { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
    { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
    { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
    { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
  ];

  /*Koristeći filter metodu iz postojeće liste auta, u novu listu npr. limuzine spremite aute koji su limuzine */

const limuzine = auti.filter((auto) => {
    return (auto.kategorija === "limuzina");
  }); 

  console.log(limuzine);
 
  //ili

  const limuzina = auti.filter((auto)=>auto.kategorija === "limuzina");
  console.log(limuzina);


  //MAP METODA omogućava da uzmemo jednu listu i iz nje napravimo drugu listu u kojoj će naši članovi liste izgledati malo drugačije

  const lista = [
    {proizvod: "Bicikl", cijena:1500},
    {proizvod: "Frižider", cijena: 2500},
    {proizvod:"Perilica",cijena:2000},
    {proizvod:"Romobil",cijena:800},
    {proizvod:"Automobil", cijena: 6000},
    {proizvod:"Tipkovnica",cijena:80},
  ];

  const listaProizvoda = lista.map ((objekt) => objekt.proizvod);
  console.log(listaProizvoda);


  const automobili = [
    { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
    { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
    { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
    { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
    { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
  ];

  const marka = automobili.map((auto) => auto.ime);
  console.log(marka);

  //

  const markaKat = automobili.map(auto) => {
    return { marka: automobili.ime, kategorija: automobili.kategorija }
  };
  console.log(markaKat);