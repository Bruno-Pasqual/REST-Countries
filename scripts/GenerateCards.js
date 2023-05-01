import HandleCardsClick from './HandleCardsClick.js';
import HandleDarkModeClick from './HandleDarkModeClick.js';

const GenerateCards = (array) => {
  const darkModeActive = document.body.classList.contains('darkMode')
    ? true
    : false;
  const cardsContainer = document.querySelector('.output_container');
  cardsContainer.innerHTML = '';

  array.map((country, index) => {
    //todo destruction of informations
    let {
      capital,
      population,
      name,
      region,
      subregion,
      tld,
      currencies,
      languages,
      flags,
      borders,
    } = country;

    capital ? (capital = capital[0]) : (capital = '');

    //!puting the population number in the right format
    const formatedPopulation = population.toLocaleString('en-GB');

    cardsContainer.innerHTML += `    <div class="country_card ${
      darkModeActive ? 'darkMode' : ''
    } "  >
    <div class="flag_container"></div>
    <div class="country_information">
      <p class="country_name">${country.name.common}</p>
      <p class="country_info"><span>Population: </span> ${formatedPopulation}</p>
      <p class="country_info"><span>Region: </span> ${region}</p>
      <p class="country_info"><span>Capital: </span> ${capital}</p>
    </div>
  </div>`;

    //! ---
    const flagContainer = document.querySelectorAll('.flag_container');
    flagContainer[index].style.backgroundImage = `url('${
      flags.svg ? flags.svg : flags.png
    }')`;
  });

  HandleCardsClick();
  HandleDarkModeClick();
};

export default GenerateCards;
