export default function Modal() {
  function open() {
    //Funcionalidade de atribuir a class "active" para a modal
    document.querySelector('.modal-wrapper').classList.add('active')
  }

  function close() {
    //Funcionalidade de remover a class "active" da modal
  }

  return {
    open,
    close
  }
}
