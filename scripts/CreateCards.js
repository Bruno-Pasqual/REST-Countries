const CreateCards = (countriesRegion) => {
  //! Function --

  const generateCards = (array) => {
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

      cardsContainer.innerHTML += `    <div class="country_card">
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
      flagContainer[index].style.backgroundImage = `url('${flags.png}')`;
    });
  };

  //! Function --

  if (
    countriesRegion === 'Asia' ||
    countriesRegion === 'Africa' ||
    countriesRegion === 'Americas' ||
    countriesRegion === 'Oceania' ||
    countriesRegion === 'Europe'
  ) {
    //! creating variable with data in the sessionStorage. --

    const sortedCountries = JSON.parse(
      sessionStorage.getItem('sortedCountries')
    );

    //! Logic --

    generateCards(sortedCountries[countriesRegion]);
  } else {
    const allCountries = JSON.parse(sessionStorage.getItem('allCountries'));
    generateCards(allCountries);
  }
};

export default CreateCards;
