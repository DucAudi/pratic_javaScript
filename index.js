// focus input
document.addEventListener('DOMContentLoaded',()=>{
const focusInput = document.getElementById('id-search');

    focusInput.addEventListener('focus', ()=>{
        focusInput.setAttribute('placeholder','Note | ');
        focusInput.style.paddingLeft = '10px';
    });

    focusInput.addEventListener('blur', ()=>{
        focusInput.setAttribute('placeholder','Search note...');
    });

});