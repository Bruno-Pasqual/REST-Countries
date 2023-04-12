const atualizaImagens = (array) => {
  const containersImagens = document.querySelectorAll('.container_imagem');

  //Utilizando os dados para atualizar as imagens
  array.map((elemento, index) => {
    const bandeira = elemento.flags.svg;

    containersImagens[index].style.backgroundImage = `url('${bandeira}')`;
  });
};

export default atualizaImagens;
