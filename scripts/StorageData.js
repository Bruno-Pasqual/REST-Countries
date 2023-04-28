const StorageData = (data) => {
  //declarando variáveis
  const Africa = [];
  const Americas = [];
  const Europe = [];
  const Asia = [];
  const Oceania = [];

  data.map((country) => {
    if (country.region === 'Asia') {
      Asia.push(country);
    } else if (country.region === 'Africa') {
      Africa.push(country);
    } else if (country.region === 'Americas') {
      Americas.push(country);
    } else if (country.region === 'Europe') {
      Europe.push(country);
    } else if (country.region === 'Oceania') {
      Oceania.push(country);
    }
  });

  const sortedCountries = {
    Africa,
    Americas,
    Asia,
    Oceania,
    Europe,
  };

  // Armazenando dados no session storage --

  const sortedCountriesJSON = JSON.stringify(sortedCountries);
  const countriesJSON = JSON.stringify(data);

  sessionStorage.setItem('sortedCountries', sortedCountriesJSON);
  sessionStorage.setItem('allCountries', countriesJSON);
};

export default StorageData;
