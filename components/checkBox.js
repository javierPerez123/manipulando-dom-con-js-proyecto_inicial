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


export default checkBox;