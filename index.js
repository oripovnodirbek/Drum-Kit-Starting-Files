document.addEventListener('keydown', (e) => {
    if(e.key === 'w') {
        const crash = new Audio('./sounds/crash.mp3')
        crash.play();
    } else if(e.key=== 'a'){
        const kick = new Audio('./sounds/kick-bass.mp3')
        kick.play();
    } else if(e.key === 's'){
        const snare = new Audio('./sounds/snare.mp3')
        snare.play();
    } else if(e.key === 'd'){
        const tom1 = new Audio('./sounds/tom-1.mp3')
        tom1.play();
    } else if(e.key === 'j'){
        const tom2 = new Audio('./sounds/tom-2.mp3')
        tom2.play();
    } else if(e.key === 'k'){
        const tom3 = new Audio('./sounds/tom-3.mp3')
        tom3.play();
    } else if(e.key === 'l'){
        const tom4 = new Audio('./sounds/tom-4.mp3')
        tom4.play();
    }                  
})

const crash = document.querySelectorAll('.w')
const kick = document.querySelectorAll('.a')
const snare = document.querySelectorAll('.s')
const tom1 = document.querySelectorAll('.d')
const tom2 = document.querySelectorAll('.j')
const tom3 = document.querySelectorAll('.k')
const tom4 = document.querySelectorAll('.l')

crash.forEach((w) => {
    w.addEventListener('click', ()=> {
        const  e= new Audio('./sounds/crash.mp3')
        e.play()
    })
})
kick.forEach((w) => {
    w.addEventListener('click', ()=> {
        const  e= new Audio('./sounds/kick-bass.mp3')
        e.play()
    })
})
snare.forEach((w) => {
    w.addEventListener('click', ()=> {
        const  e= new Audio('./sounds/snare.mp3')
        e.play()
    })
})
tom1.forEach((w) => {
    w.addEventListener('click', ()=> {
        const  e= new Audio('./sounds/tom-1.mp3')
        e.play()
    })
})
tom2.forEach((w) => {
    w.addEventListener('click', ()=> {
        const  e= new Audio('./sounds/tom-2.mp3')
        e.play()
    })
})
tom3.forEach((w) => {
    w.addEventListener('click', ()=> {
        const  e= new Audio('./sounds/tom-3.mp3')
        e.play()
    })
})
tom4.forEach((w) => {
    w.addEventListener('click', ()=> {
        const  e= new Audio('./sounds/tom-4.mp3')
        e.play()
    })
})