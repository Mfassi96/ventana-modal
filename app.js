//selecionar btn, modal overlay,close-btn 
//escuchar el evento click
//cuando el usuario clickee modal-btn agregar .OPEN-MODAL a modal-overlay 
//cuando el usuario clickee close-btn quitar .OPEN-MODAL

const  modalBtn=document.querySelector('.modal-btn')
const modal=document.querySelector('.modal-overlay')
const closeBtn=document.querySelector('.close-btn')


modalBtn.addEventListener('click',()=>{
    modal.classList.add('open-modal')
})


closeBtn.addEventListener('click',()=>{
    modal.classList.remove('open-modal')
})















