"use strict";

const search = document.getElementById('search');
const results = document.getElementById('results');

setTimeout(() => {
    console.log("Loading...");
  }, 1000);
  
search.addEventListener('input', function(e) {
    fetch(`https://itunes.apple.com/search?term=indie&entity=song`)
      .then(res => res.json())
      .then(data => {
        const results = data.results;
        if (results.length > 0) {
            results.innerHTML = '';
            results.forEach(result => {
              const song = result.track;
              const artist = result.artist;
              results.innerHTML += `<p>${song}, ${artist}</p>`;
            });
          } else {
            results.innerHTML = 'Search input not found.';
          }
        })
        .catch(error => {
          results.innerHTML = 'Sorry, something went wrong.';
        });
    }, 500);