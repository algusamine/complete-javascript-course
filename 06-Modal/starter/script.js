'use strict';
const openButtons = document.querySelectorAll('.show-modal');
const closeButton = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//console.log(overlay)
// for(let i = 0; i < openButtons.length; i++)
// openButtons[i].addEventListener('click', function(){
//     console.log('I was clicked!')
// })

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
//Use the forEach method instead of the for loop:
openButtons.forEach(function(btn){
btn.addEventListener('click', openModal)
})

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e)=>{
   // console.log(e.key)
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal()
    }
})