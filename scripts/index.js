import criaCards from './criaCards.js';

const url = 'https://restcountries.com/v3.1/all';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('deu ruim');
  }
};

fetchData().then((data) => {
  console.log(data);
  criaCards(data);
});
