const HandleCardsClick = () => {
  const cards = document.querySelectorAll('.country_card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      //Puxando os dados do session storage
      const countries = JSON.parse(sessionStorage.getItem('allCountries'));
      console.log(countries);

      //Selecting the name of the card clicked
      const clickedCountryName = card.children[1].children[0].textContent;

      //Using the name of the country as a parameter to a filter in the array with all countries
      const selectedCountry = countries.filter((country) => {
        return country.name.common === clickedCountryName ? true : false;
      });

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
      } = selectedCountry;
    });
  });
};

export default HandleCardsClick;
