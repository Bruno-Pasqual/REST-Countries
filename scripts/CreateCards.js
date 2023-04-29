import GenerateCards from './GenerateCards.js';

const CreateCards = (countriesRegion) => {
  //! Function --

  const generateCards = (array) => {};

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

    GenerateCards(sortedCountries[countriesRegion]);
  } else {
    const allCountries = JSON.parse(sessionStorage.getItem('allCountries'));
    GenerateCards(allCountries);
  }
};

export default CreateCards;
