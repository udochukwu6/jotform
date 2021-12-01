var input_Yes = document.querySelector('#yes')
var div_no = document.querySelector('#no')
var feel = document.querySelector('#feel1')


input_Yes.addEventListener('click', ()=>{
    div_no.classList.add('dive')
})
feel.addEventListener('click', ()=>{
    div_no.classList.remove('dive')
})

var resources1 =document.querySelector('#resources1')
var yesone =document.querySelector('#yesone')
var nofirst =document.querySelector('#nofirst')

yesone.addEventListener('click', ()=>{
    nofirst.classList.add('dive')
})
resources1.addEventListener('click', ()=>{
    nofirst.classList.remove('dive')
})


var res = document.querySelector('#res')
var yestwo = document.querySelector('#yestwo')
var reso = document.querySelector('#reso')


res.addEventListener('click', ()=>{
    yestwo.classList.add('dive')
})
reso.addEventListener('click', ()=>{
    yestwo.classList.remove('dive')
})

var resour =document.querySelector('#resour')
var resou =document.querySelector('#resou')
var yesthird =document.querySelector('#yesthird')

resou.addEventListener('click', ()=>{
    yesthird.classList.add('dive')
})
resour.addEventListener('click', ()=>{
    yesthird.classList.remove('dive')
})