// Criando e adicionando elementos

// createElement
const div = document.createElement('div');
div.innerText = "Olá Devs"

// append prepend
const body = document.querySelector('body');
// body.prepend(div)

//inserBefore
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)