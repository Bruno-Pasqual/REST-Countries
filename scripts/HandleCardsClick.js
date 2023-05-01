import ChangeInfoModal from './ChangeInfoModal.js';
import HandleBorderClick from './HandleBorderClick.js';

const controlModal = (selectedCountry) => {
  //todo -- Destructuring to easier acess to the informations
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

  //todo -- Fazendo a seleção dos elementos no DOM
  const container = document.querySelector('.container');
  const modalContainer = document.querySelector('.modal');

  //todo -- Alterando o innerHTML do modal

  ChangeInfoModal(selectedCountry);

  //Overflow hidden is useful to hide what's out of the limits of the user's screen, in that way is possible to make the windows be fixed in the same place while the modal is visible, preventing the scroll.
  document.body.style.overflow = 'hidden';
  modalContainer.classList.remove('desativo');
  modalContainer.classList.add('ativo');

  // ---
  const closeModal = document.querySelector('.close_modal_btn');
  closeModal.addEventListener('click', () => {
    modalContainer.classList.add('desativo');
    document.body.style.overflow = 'auto';
  });
  //----
};

const HandleCardsClick = () => {
  const cards = document.querySelectorAll('.country_card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      //Puxando os dados do session storage
      const countries = JSON.parse(sessionStorage.getItem('allCountries'));

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
