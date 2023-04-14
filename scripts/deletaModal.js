const deletaModal = (card) => {
  const modal = document.querySelector('.modal');
  const botaoFecha = document.querySelector('.goBack_btn');
  botaoFecha.addEventListener('click', () => {
    modal.style.transform = 'scale(0.01)';
    card.removeChild(card.children[2]);
    console.log(card);
  });
};

export default deletaModal;
