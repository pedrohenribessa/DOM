const header = document.querySelector('header')
// textContent

// element.textContent += " Olá Devs"
// console.log(element.textContent)

// innerText

// element.innerText = "Ola Devs"

// innerHTML

// element.innerHTML = "Olá Devs! <small>!!!</small>"

// value

// console.log(element.value)
// element.value = "Valor que eu quiser!"

// Atributos

header.setAttribute('id', 'header')
const headerID = document.querySelector('#header')
console.log(headerID)
header.removeAttribute('id')   