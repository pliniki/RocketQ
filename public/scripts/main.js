import Modal from './modal.js'

const modal = Modal()

//marcar todos os botões com a class "check"
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', event => {
    //Abrir modal
    modal.open()
  })
})
