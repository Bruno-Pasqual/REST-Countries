const clickOnCard = (arrayPaises) => {
  const cards = document.querySelectorAll('.countrie_card');

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      const modal = document.createElement('div');
      if (card.children.length === 2) {
        //Criando o modal --
        modal.classList.add('modal');
        modal.innerHTML = `<button class="goBack_btn">Back</button>
        <div class="container_bandeira"></div>
  
        <!-- Detalhes país -->
        <div class="container_pai_detalhes">
          <div class="detalhes_pais_selecionado">
            <h2 class="nome_pais">Belgium</h2>
            <p class="subtitle">
              <span class="title">Native Name: </span>Belgie
            </p>
            <p class="subtitle">
              <span class="title">Population: </span>11.319.511
            </p>
            <p class="subtitle"><span class="title">Region: </span>Europe</p>
            <p class="subtitle">
              <span class="title">Sub Region: </span>Western Europe
            </p>
            <p class="subtitle">
              <span class="title">Capital: </span>Brussels
            </p>
          </div>
          <div class="detalhes_pais_selecionado_dois">
            <p class="subtitle">
              <span class="title">Top Level Domain: </span>.be
            </p>
            <p class="subtitle">
              <span class="title">Currencies: </span>Euro
            </p>
            <p class="subtitle">
              <span class="title">Languages</span>Dutch, French, German
            </p>
          </div>
          <div class="borders_container">
            <p class="borders_title">Border Countries:</p>
            <div class="neighbors_container">
              <p class="neighbor">France</p>
              <p class="neighbor">Germany</p>
              <p class="neighbor">Netherlands</p>
            </div>
          </div>
        </div>
        <!-- Detalhes país -->`;
        card.appendChild(modal);
        //Criando o modal --
      } else {
        modal.style.transform = 'scale(0.01)';
        card.removeChild(card.children[2]);
      }
    });
  });
};

export default clickOnCard;
