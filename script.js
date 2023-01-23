const div = [...document.querySelectorAll('.perguntas')]
const p = document.querySelectorAll('.escondido')

div.map((el) => {
    el.addEventListener('click', (x) =>  {
        const child_element = el.children.item(0)
        if (child_element.style.display == 'block') {
                child_element.style.display = 'none'
        }
        else {
            child_element.style.display = 'block'
        }
    })
})

