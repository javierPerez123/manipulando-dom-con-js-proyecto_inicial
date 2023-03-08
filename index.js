(() => {

  const btn = document.querySelector('[data-form-btn]');
  const btnCheck = document.querySelector('.far .fa-square .icon')

  const checkBox = () => {
    const iconCheck = document.createElement('i');
    iconCheck.classList.add('far', 'fa-square', 'icon');
    iconCheck.addEventListener('click', activateDesactivate)
    return iconCheck;
  }

  const activateDesactivate = (evento) => {
    const elemento = evento.target;
    elemento.classList.toggle('fas');
    elemento.classList.toggle('fa-check-square');
    elemento.classList.toggle('completeIcon');
    elemento.classList.toggle('far');
    elemento.classList.toggle('fa-square');
  }

  const nameCourse = (text) => {
    const course = document.createElement('span');
    course.classList.add('task');
    course.textContent = text
    return course;
  }

  const checkDelete = () => {
    const iconDelete = document.createElement('i');
    iconDelete.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    iconDelete.addEventListener('click', checkDeleteActivate)
    return iconDelete;
  }

  const checkDeleteActivate = (evento) => {
    evento.preventDefault();
    const lista = document.querySelector('[data-form-lista]');
    const item = document.querySelector('li')
    lista.removeChild(item)
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

})

  ();