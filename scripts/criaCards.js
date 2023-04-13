import atualizaImagens from './atualizaImagens.js';
import clickOnCard from './clickOnCard.js';

const criaCards = (paisesCorrespondentes, arrayPaises) => {
  const outputContainer = document.querySelector('.output_container');

  outputContainer.innerHTML = '';
  const listaSiglas = {};
  paisesCorrespondentes.map((objeto) => {
    let { population, name, region, capital, flags, fifa } = objeto;

    //Checando a existência da capital no objeto
    if (capital === undefined) {
      capital = '';
    } else {
      capital = capital[0];
    }

    outputContainer.innerHTML += `<div class="countrie_card">
    <div class="container_imagem">
   
    </div>
    <div class="detalhes_pais">
      <h2 class="nome_pais">${name.common}</h2>
      <p class="subtitle">
        <span class="title">Population: </span>${population}
      </p>
      <p class="subtitle">
        <span class="title">Region: </span>${region}
      </p>
      <p class="subtitle">
        <span class="title">Capital: </span> ${capital}
      </p>
    </div>
  </div>`;

    //Atualizando imagem
  });

  arrayPaises.map((pais) => {
    const { fifa, name } = pais;

    listaSiglas[fifa] = name.common;
  });

  atualizaImagens(paisesCorrespondentes);
  clickOnCard(paisesCorrespondentes, arrayPaises, listaSiglas);
};

export default criaCards;
