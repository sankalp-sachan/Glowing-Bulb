const button = document.getElementById('click')
const glow = document.getElementById('bulb')

button.addEventListener('click', () =>{
    if (glow.classList.contains('on')) {
        glow.classList.remove('on')
    } else{
        glow.classList.add('on')
    }
})