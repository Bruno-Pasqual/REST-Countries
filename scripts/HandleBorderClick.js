import ChangeInfoModal from './ChangeInfoModal.js';

const HandleBorderClick = () => {
  //!Selecting elements on DOM
  const neighbourCountries = document.querySelectorAll('.border_country');
  const modalContainer = document.querySelector('.modal');

  neighbourCountries.forEach((country) => {
    country.addEventListener('click', (e) => {
      const countries = JSON.parse(sessionStorage.getItem('allCountries'));
      const selectedCountry = countries.filter((country) => {
        return country.name.common === e.target.textContent ? true : false;
      });

      const modalContainer = document.querySelector('.modal');
      modalContainer.classList.add('changing');
      console.log(modalContainer);
      ChangeInfoModal(selectedCountry);

      //Close modal --
      const closeModal = document.querySelector('.close_modal_btn');
      closeModal.addEventListener('click', () => {
        modalContainer.classList.add('desativo');
        document.body.style.overflow = 'auto';
      });
    });
  });
};

export default HandleBorderClick;
