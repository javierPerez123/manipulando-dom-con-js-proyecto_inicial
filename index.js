const btn = document.querySelector("[data-form-btn]");
btn.addEventListener("click", (evento) => {
    evento.preventDefault
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
})
