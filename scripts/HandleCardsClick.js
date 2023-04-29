const controlModal = (selectedCountry) => {
  //!Destructuring to easier acess to the informations
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

  //! -- Colocando o fundo escuro ao mostrar o modal
  const container = document.querySelector('.container');
  container.classList.add('showing_modal');

  //!Criando o modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `  <button class="close_modal_btn"> <img src="./scripts/back.png" alt="">  Back</button>
        <div class="flag_container_modal"></div>
        <div class="details_country_modal">
          <p class="country_title">Belgium</p>

          <!--  -->
          <div class="details_wrapper">

            <!-- ! separador de blocos -->
            <div class="first_block">
              <p class="country_info"><span>Native Name: </span> Belgie</p>
              <p class="country_info"><span>Population: </span> 11,319,511</p>
              <p class="country_info"><span>Region: </span> Europe</p>
              <p class="country_info"><span>Sub Region: </span> Western Europe</p>
              <p class="country_info"><span>Capital: </span> Brussels</p>
            </div>

            <!-- ! separador de blocos -->
            <div class="second_block">
              <p class="country_info"><span>Top Level Domain: </span> .be</p>
              <p class="country_info"><span>Currencies </span> Euro</p>
              <p class="country_info"><span>Languages: </span> Dutch, French, German</p>
            </div>
          </div>
          <!--  -->

          <div class="borders_container">
            <p class="border_title">Border Countries:</p>
            <div class="borders_wrapper">
              <p class="border_country">France</p>
              <p class="border_country">Germany</p>
              <p class="border_country">Netherlands</p>
            </div>`;
  container.appendChild(modal);
  document.body.style.overflow = 'hidden';

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('showing_modal')) {
      container.classList.remove('showing_modal');
      document.body.style.overflow = 'auto';
      container.removeChild(modal);
    }
  });
};

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

      controlModal(selectedCountry);
    });
  });
};

export default HandleCardsClick;
