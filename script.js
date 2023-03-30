const div = [...document.querySelectorAll('.perguntas')]
const p = document.querySelectorAll('.escondido')

div.map((el) => {
    el.addEventListener('click', (x) =>  {
        const child_element = el.children.item(1);
        const close = el.children.item(0)
        console.log(child_element)
        if (child_element.style.display == 'block') {
            close.style.display = 'block'
            child_element.style.display = 'none'
        }
        else {
            close.style.display = 'none'
            child_element.style.display = 'block'
        }
    })
})

