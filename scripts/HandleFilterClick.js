const HandleFilterClick = () => {
  const filterContainer = document.querySelector('.filter_container');
  filterContainer.addEventListener('click', () => {
    const arrowIcon = document.querySelector('.arrow_icon');
    arrowIcon.classList.toggle('active');
    console.log(arrowIcon);
  });
};

export default HandleFilterClick;
