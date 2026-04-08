let projetos = JSON.parse(localStorage.getItem("projetos")) || [];

function salvarProjetos() {
  localStorage.setItem("projetos", JSON.stringify(projetos));
}

function adicionarProjeto() {
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;

  if (titulo === "" || descricao === "") {
    alert("Preencha todos os campos!");
    return;
  }

  projetos.push({ titulo, descricao });
  salvarProjetos();
  renderizarProjetos();

  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";
}

function excluirProjeto(index) {
  projetos.splice(index, 1);
  salvarProjetos();
  renderizarProjetos();
}

function renderizarProjetos() {
  const lista = document.getElementById("lista-projetos");
  lista.innerHTML = "";

  projetos.forEach((projeto, index) => {
    lista.innerHTML += `
      <div class="projeto">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <button class="excluir" onclick="excluirProjeto(${index})">Excluir</button>
      </div>
    `;
  });
}

renderizarProjetos();