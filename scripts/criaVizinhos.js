const criaVizinhos = (arrayPaises, borders, listaSiglas) => {
  const containerVizinhos = document.querySelector('.neighbors_container');

  if (borders) {
    borders.map((sigla) => {
      if (listaSiglas[sigla])
        containerVizinhos.innerHTML += `        <p class="neighbor">${listaSiglas[sigla]}</p>`;
    });
  }
};

export default criaVizinhos;
