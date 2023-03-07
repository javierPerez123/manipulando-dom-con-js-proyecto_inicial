const btn = document.querySelector('[data-form-btn]');
const btnClear = document.querySelector("[data-form-clear]");

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  input.value = ''
  const lista = document.querySelector('[data-form-lista]');
  const elemento = document.createElement('li');
  elemento.classList.add('card');
  const contenido = `
    <div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon" data-form-clear></i>
  `
  lista.appendChild(elemento);
  elemento.innerHTML = contenido;
}

btn.addEventListener("click", createTask)
btnClear.addEventListener("click", clear)
