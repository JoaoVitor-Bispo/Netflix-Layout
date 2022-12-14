const div = [...document.querySelectorAll('.perguntas')]
const p = [...document.querySelectorAll('.escondido')]

div.map((el) => {
    el.addEventListener('click', (x) =>  {
        let el2 = x.target
        el2.style.color = 'red'
    })
})

