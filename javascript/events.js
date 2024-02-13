import { buttonHome } from './elements.js'
import { buttonAbout } from './elements.js'
import { buttonEducation } from './elements.js'
import { buttonLanguages } from './elements.js'

buttonHome.addEventListener('click', () => {
    //quando clicar muda cor do nav
    buttonHome.classList.add('active')
    buttonAbout.classList.remove('active')
    buttonEducation.classList.remove('active')
    buttonLanguages.classList.remove('active')
})

buttonAbout.addEventListener('click', () => {
    //quando clicar muda cor do nav
    buttonAbout.classList.add('active')
    buttonHome.classList.remove('active')
    buttonEducation.classList.remove('active')
    buttonLanguages.classList.remove('active')
})

buttonEducation.addEventListener('click', () => {
    //quando clicar muda cor do nav
    buttonEducation.classList.add('active')
    buttonAbout.classList.remove('active')
    buttonHome.classList.remove('active')
    buttonLanguages.classList.remove('active')
})

buttonLanguages.addEventListener('click', () => {
    //quando clicar muda cor do nav
    buttonLanguages.classList.add('active')
    buttonAbout.classList.remove('active')
    buttonEducation.classList.remove('active')
    buttonHome.classList.remove('active')
})