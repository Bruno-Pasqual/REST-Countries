import CreateCards from './CreateCards.js';

const HandleFilterClick = () => {
  //! Variables ---
  const filterContainer = document.querySelector('.filter_container');
  const optionsContainer = document.querySelector('.filter_options_container');

  //! Logic ---
  filterContainer.addEventListener('click', (e) => {
    const arrowIcon = document.querySelector('.arrow_icon');
    arrowIcon.classList.toggle('active');

    //! -- Options logic
    const filterOptions = document.querySelectorAll('.filter_option');
    console.log(optionsContainer.classList.contains('hidden'));
    if (optionsContainer.classList.contains('hidden')) {
      optionsContainer.style.display = 'flex';
      optionsContainer.classList.remove('hidden');
    } else {
      // console.log(e.target.textContent);
      CreateCards(e.target.textContent);
      optionsContainer.classList.add('hidden');
      setTimeout(() => {
        optionsContainer.style.display = 'none';
        console.log('escondido');
      }, 500);
    }
  });
};

export default HandleFilterClick;
