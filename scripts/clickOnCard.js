import criaVizinhos from './criaVizinhos.js';

const clickOnCard = (array, arrayPaises, listaSiglas) => {
  const cards = document.querySelectorAll('.countrie_card');

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      const modal = document.createElement('div');
      if (card.children.length === 2) {
        //! Identificando o país do card clicado
        const nomePaisClicado =
          event.target.parentElement.children[1].children[0].textContent;

        //! Realizando um filtro no array de países e retornando o correspondente ao card clicado

        const paisDoModal = arrayPaises.filter((objeto) => {
          return objeto.name.common === nomePaisClicado;
        });

        // flag, native name, population, region, sub region, capital, top level domain, currencies, languages, border countries

        //todo -- Destruction do objeto para facilitar o acesso a variáveis
        let {
          flags,
          name,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
        } = paisDoModal[0];

        let nomeNativo = Object.values(name.nativeName)[0].common;

        population = population.toLocaleString('pt-BR');

        //todo ajustando variáveis
        flags = flags.svg;
        name = name.common;
        capital = capital[0];
        tld = tld[0];

        currencies = Object.values(currencies)[0].name;
        languages = Object.values(languages);

        //! Criando o modal --

        modal.classList.add('modal');
        modal.innerHTML = `<button class="goBack_btn">Back</button>
        <div class="container_bandeira"></div>
  
        <!-- Detalhes país -->
        <div class="container_pai_detalhes">
          <div class="detalhes_pais_selecionado">
            <h2 class="nome_pais">${name}</h2>
            <p class="subtitle">
              <span class="title">Native Name: </span>${nomeNativo}
            </p>
            <p class="subtitle">
              <span class="title">Population: </span>${population}
            </p>
            <p class="subtitle"><span class="title">Region: </span>${region}</p>
            <p class="subtitle">
              <span class="title">Sub Region: </span>${subregion}
            </p>
            <p class="subtitle">
              <span class="title">Capital: </span>${capital}
            </p>
          </div>
          <div class="detalhes_pais_selecionado_dois">
            <p class="subtitle">
              <span class="title">Top Level Domain: </span>${tld}
            </p>
            <p class="subtitle">
              <span class="title">Currencies: </span>${currencies}
            </p>
            <p class="subtitle paragrafo_linguagens">
              <span class="title">Languages: </span>
            </p>
          </div>
          <div class="borders_container">
            <p class="borders_title">Border Countries:</p>
            <div class="neighbors_container">
             
           
            </div>
          </div>
        </div>
        <!-- Detalhes país -->`;

        card.appendChild(modal);
        //Criando o modal --

        //! Atualizando informações de idiomas---------
        const paragrafoIdiomas = document.querySelector(
          '.paragrafo_linguagens'
        );
        languages.map((idioma) => {
          paragrafoIdiomas.innerHTML += `${idioma}, `;
        });
        //! Atualizando informações de idiomas

        //! Atualizando informações dos países vizinhos------------

        criaVizinhos(arrayPaises, borders, listaSiglas);

        //! Atualizando informações dos países vizinhos
      } else {
        modal.style.transform = 'scale(0.01)';
        card.removeChild(card.children[2]);
      }
    });
  });
};

export default clickOnCard;
