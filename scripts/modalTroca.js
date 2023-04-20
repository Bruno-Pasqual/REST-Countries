import trocaPaisModal from './trocaPaisModal.js';

const modalTroca = (vizinhos, modal, arrayPaises, listaSiglas, card) => {
  console.log(arrayPaises);
  vizinhos.forEach((element) => {
    element.addEventListener('click', () => {
      trocaPaisModal(element, modal, arrayPaises, listaSiglas, card);
    });
  });
};

export default modalTroca;
