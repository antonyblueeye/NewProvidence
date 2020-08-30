import './scss/index.scss'

const txt = text => console.log(text)

txt('hello')

function getClass(selector) {
    return document.querySelector(`.${selector}`)
}