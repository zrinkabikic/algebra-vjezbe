"use strict";

/*Recimo da želimo napraviti više asinkronih poziva jer imamo podatke koji dolaze iz različitih izvora i koji se 
moraju učitati u ispravnom redoslijedu. To bi mogli napraviti koristeći callback funkcije, međutim velika količina takvih
poziva rezultira callback hellom iliti ovako ugniježđenim pozivima funkcija koji se onda budu zahvaljujući tom ugniježđivanju
izvodili u redoslijedu kako bi mi htjeli. */

function getData (putanja) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET",putanja);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response));
        }
    };

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
}

getData("./filmovi.json");
getData("./glumci.json");
getData("./redatelji.json");

function getData(putanja) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open("GET", putanja);
  
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.response));
          } else {
            reject("Dogodila se greška...");
          }
        }
      };
  
      setTimeout(() => {
        xhr.send();
      }, Math.floor(Math.random() * 2000) + 100);
    });
  }
  
  getData("./filmovi.json")
    .then((filmovi) => {
      console.log(filmovi);
    })
    .catch((greska) => {
      console.log(greska);
    });


