import { Router } from './router.js'

const router = new Router()
//passando nome e link para o router.js

router.add('/', 'pages/home.html')
router.add('/about', 'pages/about.html')
router.add('/education', 'pages/education.html')
router.add('/languages', 'pages/languages.html')

router.handle()

window.onpopstate = () => router.handle() //função para poder navegar pelas setas de avançar e retroceder do navegador.
window.route = () => router.route() //o onlick route() para de funcionar, necessário chama-lo direto no window