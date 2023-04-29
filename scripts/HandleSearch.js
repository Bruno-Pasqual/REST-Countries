import CreateCards from './CreateCards.js';
import GenerateCards from './GenerateCards.js';

const HandleSearch = () => {
  const searchInput = document.querySelector('#search_input');

  searchInput.addEventListener('input', () => {
    const valueSearched = searchInput.value;

    const countries = JSON.parse(sessionStorage.getItem('allCountries'));
    const correspondingCountries = countries.filter((country) => {
      return country.name.common.includes(valueSearched) ? true : false;
    });
    GenerateCards(correspondingCountries);
  });
};

export default HandleSearch;
