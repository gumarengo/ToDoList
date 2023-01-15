const form = document.querySelector(".form");
const tarefa = document.querySelector(".tarefa");
const lista = document.querySelector(".listaTarefas");

form.onsubmit = (e) => {
  e.preventDefault();
  if (tarefa.value === "") return;

  criaTarefa(tarefa.value);
};

function criaTarefa(tarefa) {
  const li = criaLi();
  li.innerText = tarefa;
  lista.appendChild(li);
  limpaInput();
  botaoApagar(li);
  salvarTarefas();
}

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  tarefa.value = "";
  tarefa.focus();
}

function botaoApagar(li) {
  li.innerText += " ";
  const botao = document.createElement("button");
  botao.innerText = "Apagar";
  botao.setAttribute("class", "apagar");
  li.appendChild(botao);
}

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = lista.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
  console.log(tarefasJSON);
}

function addTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const converteTarefas = JSON.parse(tarefas);

  for (let tarefa of converteTarefas) {
    criaTarefa(tarefa);
  }
}
addTarefasSalvas();
