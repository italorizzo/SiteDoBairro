var bt_menu = document.querySelector('.overlay-button')
var form = document.querySelector('.form_bt_menu')
bt_menu.addEventListener("click", () => {
    form.classList.toggle('apertado')
})