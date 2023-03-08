const btn = document.querySelector('[data-form-btn]');
const btnClear = document.querySelector("[data-form-clear]");
const btnCheck = document.querySelector('.far .fa-square .icon')

const checkBox = () => {
  const iconCheck = document.createElement('i');
  iconCheck.classList.add('far');
  iconCheck.classList.add('fa-square');
  iconCheck.classList.add('icon');
  iconCheck.dataset()
  return iconCheck;
}

const nameCourse = (text) => {
  const course = document.createElement('span');
  course.classList.add('task');
  course.textContent = text
  return course;
}

const checkDelete = () => {
  const iconDelete = document.createElement('i');
  iconDelete.classList.add('fas');
  iconDelete.classList.add('fa-trash-alt');
  iconDelete.classList.add('trashIcon');
  iconDelete.classList.add('icon');
  return iconDelete;
}

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
btnCheck.addEventListener("click", createTask)