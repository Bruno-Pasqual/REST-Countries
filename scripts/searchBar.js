import criaCards from './criaCards.js';

const searchBar = (arrayPaises) => {
  const searchBar = document.querySelector('#search_input');

  searchBar.addEventListener('input', () => {
    //Criando variável para a entrada do usuário
    let entradaPesquisa = searchBar.value.toLowerCase();
    console.log(entradaPesquisa);

    //Realizando um filtro que usa a pesquisa do usuário como parâmetro
    const paisesCorrespondentes = arrayPaises.filter((objeto) => {
      let nomePais = objeto.name.common.toLowerCase();

      return nomePais.includes(entradaPesquisa) ? true : false;
    });

    //Executando função criaCards com o array de países correspondentes a pesquisa do usuário
    criaCards(paisesCorrespondentes, arrayPaises);
  });
};

export default searchBar;
