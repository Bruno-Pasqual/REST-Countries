//! Main function --
const ChangeInfoModal = (country) => {
  //Destruction
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
  } = country[0];

  console.log(country);
  console.log(borders);

  //-- Formating and validation of data ----
  capital ? (capital = capital[0]) : (capital = '--');
  const nativeName = Object.values(name.nativeName)[0].common;
  //puting the population number in the right format
  const formatedPopulation = population.toLocaleString('en-GB');

  // --
  const modal = document.querySelector('.modal');
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
        <p class="border_country">France</p>
        <p class="border_country">Germany</p>
        <p class="border_country">Netherlands</p>
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
};

export default ChangeInfoModal;

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
  console.log(Object.values(what));
  Object.values(what).map((currency, index) => {
    if (Object.values(what).length - 1 === index) {
      HTMLElement.innerHTML += `${currency.name}. `;
    } else {
      HTMLElement.innerHTML += `${currency.name}, `;
    }
  });
};

//! Functions ----------------