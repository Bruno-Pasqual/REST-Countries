import criaCards from './criaCards.js';
import selecaoRegiao from './selecaoRegiao.js';
import searchBar from './searchBar.js';
import clickOnCard from './clickOnCard.js';

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
  criaCards(data, data);
  //Event listener que realiza a atualização do output com base na seleção de região pelo option
  selecaoRegiao(data);
  //Executa função que irá habilitar a pesquisa na barra de pesquisa
  searchBar(data);
});
