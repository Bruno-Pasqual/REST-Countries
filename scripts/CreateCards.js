const CreateCards = (countriesRegion) => {
  if (
    countriesRegion === 'Asia' ||
    countriesRegion === 'Africa' ||
    countriesRegion === 'Americas' ||
    countriesRegion === 'Oceania' ||
    countriesRegion === 'Europe'
  ) {
    //! creating variable with data in the sessionStorage. --

    const allCountries = JSON.parse(sessionStorage.getItem('allCountries'));
    const sortedCountries = JSON.parse(
      sessionStorage.getItem('sortedCountries')
    );

    //! Logic --

    //! Function --

    //! Function --

    const cardsContainer = document.querySelector('.output_container');
    cardsContainer.innerHTML = '';
    sortedCountries[countriesRegion].map((country, index) => {
      //todo destruction of informations
      const {
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

      //!puting the population number in the right format
      const formatedPopulation = population.toLocaleString('en-GB');

      console.log(flags);

      cardsContainer.innerHTML += `    <div class="country_card">
    <div class="flag_container"></div>
    <div class="country_information">
      <p class="country_name">${country.name.common}</p>
      <p class="country_info"><span>Population: </span> ${formatedPopulation}</p>
      <p class="country_info"><span>Region: </span> ${region}</p>
      <p class="country_info"><span>Capital: </span> ${capital[0]}</p>
    </div>
  </div>`;

      //! ---
      const flagContainer = document.querySelectorAll('.flag_container');
      flagContainer[index].style.backgroundImage = `url('${flags.png}')`;
    });
  }
};

export default CreateCards;
