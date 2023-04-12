const clickOnCard = (arrayPaises) => {
  const cards = document.querySelectorAll('.countrie_card');
  console.log(cards[0].children[1].children[0].textContent);
  console.log(arrayPaises);
};

export default clickOnCard;
