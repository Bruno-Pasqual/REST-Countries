const ChangeInfoModal = (country) => {
  //Destruction
  let {
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
  } = country[0];

  //-- Formating and validation of data
  capital ? (capital = capital[0]) : (capital = '--');
  console.log(name);

  console(nativeName);

  //!puting the population number in the right format
  const formatedPopulation = population.toLocaleString('en-GB');

  // --
  const modal = document.querySelector('.modal');
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
  modal.innerHTML = `  <button class="close_modal_btn"> <img src="./scripts/back.png" alt="">  Back</button>
  <div class="flag_container_modal"></div>
  <div class="details_country_modal">
    <p class="country_title">${name.common}</p>

    <!--  -->
    <div class="details_wrapper">

      <!-- ! separador de blocos -->
      <div class="first_block">
        <p class="country_info"><span>Native Name: </span> ${'name.nativeName.eng.official'}</p>
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
  console.log(modal);
};

export default ChangeInfoModal;
