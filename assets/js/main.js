const numero = document.querySelector(".numero");
const form = document.querySelector(".form");
const lista = document.querySelector(".listaTarefas");

form.onsubmit = (e) => {
  e.preventDefault();
  if (numero.value === "") return;

  console.log(numero, parseInt(numero.value));
  fatorial(parseInt(numero.value));
};

function fatorial(numero) {
  let numFatorial = numero;
  if (numFatorial === 0 || numFatorial === 1) {
    limpaInput();
    return (lista.innerHTML += `Fatorial = 1 <br />`);
  }

  for (let i = numero - 1; i > 1; i--) {
    numFatorial = numFatorial * i;
  }
  limpaInput();
  return (lista.innerHTML += `${numero}! = ${numFatorial} <br />`);
}

function limpaInput() {
  numero.value = "";
  numero.focus();
}
