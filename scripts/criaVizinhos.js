const criaVizinhos = (arrayPaises, borders, listaSiglas) => {
  console.log(listaSiglas);
  const containerVizinhos = document.querySelector('.neighbors_container');

  console.log('Array paises');
  console.log(arrayPaises);

  console.log('borders');
  console.log(borders);

  console.log(listaSiglas);

  if (borders) {
    borders.map((sigla) => {
      console.log(listaSiglas[sigla]);
      if (listaSiglas[sigla])
        containerVizinhos.innerHTML += `        <p class="neighbor">${listaSiglas[sigla]}</p>`;
    });
  }
};

export default criaVizinhos;
