const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      // here we need to figure out if the city or state matches what was searched
   // return place.city.match(`${wordToMatch}`,'gi'); return only one match
    
      const regex = new RegExp(wordToMatch, 'gi');//returns all the matches
      return place.city.match(regex) || place.state.match(regex)
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  
  function displayMatches() {
   // console.log(this.value);//this will be the html element which fires the event
   //it will show what you type in the search box


    const matchArray = findMatches(this.value, cities);//this gets the array of data  and stores in matcharray
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);//
      //replace the word typed with a higglhight tesxt or colord 
      const stateName = place.state.replace(regex, `<span style="color:red">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }
  

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

