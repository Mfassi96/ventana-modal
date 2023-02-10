//selecionar btn, modal overlay,close-btn 
//escuchar el evento click
//cuando el usuario clickee modal-btn agregar .OPEN-MODAL a modal-overlay 
//cuando el usuario clickee close-btn quitar .OPEN-MODAL

const  modalBtn=document.querySelector('.modal-btn')
const modal=document.querySelector('.modal-overlay')
const closeBtn=document.querySelector('.close-btn')
const emailInput=document.getElementById('email')
const enviarBtn=document.getElementById('enviarBtn')




modalBtn.addEventListener('click',()=>{
    modal.classList.add('open-modal')
})


closeBtn.addEventListener('click',()=>{
    modal.classList.remove('open-modal')
})

enviarBtn.addEventListener('click',()=>{
    const email=emailInput.value
    const confirmacion=document.getElementById('confirmacion')

    confirmacion.classList.remove('confirmacion-oculta')
    confirmacion?.classList.add('confirmacion')
    
    console.log(email)
})













