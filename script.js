const div = [...document.querySelectorAll('.perguntas')]
const p = document.querySelectorAll('.escondido')

div.map((el) => {
    el.addEventListener('click', (x) =>  {
        const childElement = x.target.children[1]
        const iconElement = x.target.children[0]
    })
})

