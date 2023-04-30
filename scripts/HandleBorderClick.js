import ChangeInfoModal from './ChangeInfoModal.js';

const HandleBorderClick = () => {
  const neighbourCountries = document.querySelectorAll('.border_country');
  neighbourCountries.forEach((country) => {
    country.addEventListener('click', (e) => {
      const countries = JSON.parse(sessionStorage.getItem('allCountries'));
      const selectedCountry = countries.filter((country) => {
        return country.name.common === e.target.textContent ? true : false;
      });

      uptadeModal(selectedCountry);
    });
  });
};

export default HandleBorderClick;

const uptadeModal = (selectedCountry) => {
  const modal = document.querySelector('.modal');
  console.log(modal);
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
  } = selectedCountry;

  console.log(selectedCountry.name);

  /*   capital ? (capital = capital[0]) : (capital = '--');
  if (selectedCountry.name.nativeName) {
    const nativeName = Object.values(name.nativeName)[0].common;
  }
 */
  //puting the population number in the right format
  const formatedPopulation = population.toLocaleString('en-GB');

  // --

  modal.innerHTML = `  <button class="close_modal_btn"> <img src="./scripts/back.png" alt="">  Back</button>
  <div class="flag_container_modal"></div>
  <div class="details_country_modal">
    <p class="country_title">${name.common}</p>

    <!--  -->
    <div class="details_wrapper">

      <!-- ! separador de blocos -->
      <div class="first_block">
        <p class="country_info"><span>Native Name: </span> ${nativeName}</p>
        <p class="country_info"><span>Population: </span>${formatedPopulation}</p>
        <p class="country_info"><span>Region: </span> ${region}</p>
        <p class="country_info"><span>Sub Region: </span> ${subregion}</p>
        <p class="country_info"><span>Capital: </span> ${capital}</p>
      </div>

      <!-- ! separador de blocos -->
      <div class="second_block">
        <p class="country_info"><span>Top Level Domain: </span>${tld}</p>
        <p class="country_info currency_paragraph"></p>
        <p class="country_info languages_phrase"></p>
      </div>
    </div>
    <!--  -->

    <div class="borders_container">
      <p class="border_title">Border Countries:</p>
      <div class="borders_wrapper">
      </div>`;

  //! adding the corresponding languages and currencies ---
  //Language
  const languageParagraph = document.querySelector('.languages_phrase');
  languageParagraph.innerHTML += '<span>Languages: </span>';
  //Currencies
  const currenciesParagraph = document.querySelector('.currency_paragraph');
  currenciesParagraph.innerHTML += '<span>Currencies: </span>';

  moreThanOne(languages, languageParagraph);
  moreThanOneCurrencies(currencies, currenciesParagraph);

  //! Changing the flag --
  const flagContainer = document.querySelector('.flag_container_modal');
  flagContainer.style.backgroundImage = `url('${flags.png}')`;

  //!changing the neighbour countries
  uptadeNeighbourCountries(borders);
  HandleBorderClick();
};

//! Functions ----------------
// Function used in case there is more than one of whatever is going to be put in the phrase

const moreThanOne = (what, HTMLElement) => {
  Object.values(what).map((language, index) => {
    // Checking if the language will be the last one, if o, a period is placed instead of the comma.
    if (Object.values(what).length - 1 === index) {
      HTMLElement.innerHTML += `${language}. `;
    } else {
      HTMLElement.innerHTML += `${language}, `;
    }
  });
};
const moreThanOneCurrencies = (what, HTMLElement) => {
  Object.values(what).map((currency, index) => {
    if (Object.values(what).length - 1 === index) {
      HTMLElement.innerHTML += `${currency.name}. `;
    } else {
      HTMLElement.innerHTML += `${currency.name}, `;
    }
  });
};

const uptadeNeighbourCountries = (borders) => {
  const acronymName = JSON.parse(sessionStorage.getItem('acronymName'));

  const neighbourContainer = document.querySelector('.borders_wrapper');
  if (!borders) {
    neighbourContainer.innerHTML = ` <p >Neighbourless country</p>`;
  } else {
    borders.map((country) => {
      if (acronymName[country])
        neighbourContainer.innerHTML += `<p class="border_country">${acronymName[country]}</p>`;
    });
  }
};
