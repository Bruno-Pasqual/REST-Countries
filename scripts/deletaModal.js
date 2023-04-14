const deletaModal = (card) => {
  const modal = document.querySelector('.modal');
  const botaoFecha = document.querySelector('.goBack_btn');
  botaoFecha.addEventListener('click', () => {
    modal.classList.add('diminuir');
    setTimeout(() => diminuiModal(card), 1200);
    console.log(card);
  });
};

export default deletaModal;

const diminuiModal = (card) => {
  console.log(card.children);
  card.removeChild(card.children[2]);
};
