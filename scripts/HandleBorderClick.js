import ChangeInfoModal from './ChangeInfoModal.js';

const HandleBorderClick = () => {
  const neighbourCountries = document.querySelectorAll('.border_country');
  neighbourCountries.forEach((country) => {
    country.addEventListener('click', (e) => {
      const countries = JSON.parse(sessionStorage.getItem('allCountries'));
      const selectedCountry = countries.filter((country) => {
        return country.name.common === e.target.textContent ? true : false;
      });
      ChangeInfoModal(selectedCountry);

      //Close modal --
      const modalContainer = document.querySelector('.modal');
      const closeModal = document.querySelector('.close_modal_btn');
      closeModal.addEventListener('click', () => {
        modalContainer.classList.add('desativo');
        document.body.style.overflow = 'auto';
      });
    });
  });
};

export default HandleBorderClick;
