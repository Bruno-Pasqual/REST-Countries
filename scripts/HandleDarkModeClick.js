const HandleDarkModeClick = () => {
  const darkModeBtn = document.querySelector('.dark_mode_btn');
  darkModeBtn.addEventListener('click', () => {
    //setting a toggle in all elements that changes within the darkMode

    const BODY = document.body;
    const container = document.querySelector('.container');
    const filterContainer = document.querySelector('.filter_container');
    const searchInput = document.querySelector('#search_input');
    const modal = document.querySelector('.modal');
    const countryCards = document.querySelectorAll('.country_card');

    // const borderCountry = document.querySelector('.border_country');

    const arr = [BODY, container, filterContainer, searchInput, modal];

    //! changing the darkMode --

    arr.forEach((element) => {
      element.classList.toggle('darkMode');
    });

    countryCards.forEach((card) => {
      card.classList.toggle('darkMode');
    });
  });
};

export default HandleDarkModeClick;
