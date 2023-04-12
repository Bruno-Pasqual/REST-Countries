import criaCards from './criaCards.js';

const selecaoRegiao = (data) => {
  //todo -- Selecionador de região
  const selecionadorCategoria = document.querySelector('#region_filter');
  selecionadorCategoria.addEventListener('change', () => {
    //Região selecionada pelo usuário
    const regiaoSelecionada = selecionadorCategoria.value;
    //Realizando o filtro dos países correspondentes
    const filtrados = data.filter((elemento) => {
      return elemento.region === regiaoSelecionada ? true : false;
    });
    console.log(filtrados);
    criaCards(filtrados, data);
  });
};

export default selecaoRegiao;
