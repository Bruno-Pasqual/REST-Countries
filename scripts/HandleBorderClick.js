const HandleBorderClick = () => {
  const neighbourCountries = document.querySelectorAll('.border_country');
  neighbourCountries.forEach((country) => {
    country.addEventListener('click', (e) => {
      console.log(e.target.textContent);
    });
  });
};

export default HandleBorderClick;
