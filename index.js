import checkDelete from "./components/iconDelete.js";
import checkBox from "./components/checkBox.js";
import nameCourse from "./components/nameCourse.js";

const btn = document.querySelector('[data-form-btn]');


const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  input.value = '';
  const item = document.createElement('li');
  item.classList.add('card');
  const lista = document.querySelector('[data-form-lista]');
  const contenedor = document.createElement('div');
  contenedor.appendChild(checkBox());
  contenedor.appendChild(nameCourse(value));
  item.appendChild(contenedor)
  item.appendChild(checkDelete());
  lista.appendChild(item);

}

btn.addEventListener("click", createTask)
