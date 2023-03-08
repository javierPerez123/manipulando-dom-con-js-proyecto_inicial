const checkDelete = () => {
    const iconDelete = document.createElement('i');
    iconDelete.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    iconDelete.addEventListener('click', checkDeleteActivate)
    return iconDelete;
}

const checkDeleteActivate = (evento) => {
    evento.preventDefault();
    const elemento = evento.target.parentElement;
    elemento.remove();

}
export default checkDelete