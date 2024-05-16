const darkMode = document.querySelector(".darkness")
const dark = document.querySelector(".dark")
const lightLogo = document.querySelector('.lightLogo')

let isLight = true;

dark.addEventListener("click", function(){
    darkMode.classList.toggle('black')
    if(isLight){
        
    }
    lightLogo.classList.toggle('hide')
    dark.classList.toggle('.hide')

})

lightLogo.addEventListener("click", function(){
    darkMode.classList.toggle('black')
    if(isLight){
        
    }
    lightLogo.classList.toggle('hide')
    dark.classList.toggle('.hide')

})
const ham = document.getElementById('hamburger');
const nav = document.getElementById('pc-nav');
const body = document.body

ham.addEventListener('click', function(event){
    body.classList.toggle('active')
})