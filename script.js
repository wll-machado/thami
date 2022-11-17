
var envelope = document.querySelector('.invite-img');
var texto = document.querySelector('.group');
var sim = document.querySelector('#sim');
var nao = document.querySelector('#nao');
var wrong = document.querySelector('.wrong');
var accept = document.querySelector('.accept');
var thx = document.querySelector('.thx');
var options = document.querySelector('.options');
var group = document.querySelector('.group2');
var music = document.querySelector('.music');


envelope.addEventListener("click", ()=>{
    options.classList.add('slide-top');
    group.classList.add('slide-bottom');
    music.play();
    setTimeout(()=>{
        texto.style.display="none"
    },1000)
})

sim.addEventListener('click', ()=>{
    if(sim.checked){
        accept.style.display='block'
    }else {
        accept.style.display='none'
    }
})

accept.addEventListener('click', ()=>{
    thx.style.display = 'block';
    var myTimer =  setInterval(()=>{
            if(music.volume >= 0){
              music.volume -= 0.1;   
            }else {
                clearInterval(myTimer)
            }
        },1000)
    
})

nao.addEventListener('click', ()=>{
    if(nao.checked){
        wrong.style.display= "block"
        setTimeout(()=>{
         wrong.style.display= "none"
         nao.checked = false   
        }, 3000)
    } 
})