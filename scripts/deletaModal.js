const deletaModal = (card) => {
  const modal = document.querySelector('.modal');
  const botaoFecha = document.querySelector('.goBack_btn');
  botaoFecha.addEventListener('click', () => {
    modal.classList.add('diminuir');
    setTimeout(() => diminuiModal(card), 700);
  });
};

export default deletaModal;

const diminuiModal = (card) => {
  card.removeChild(card.children[2]);
  document.body.style.overflow = '';
  document.body.style.width = '';
  document.body.style.height = '';
  document.body.style.marginTop = '';
  document.body.style.marginLeft = '';
};
