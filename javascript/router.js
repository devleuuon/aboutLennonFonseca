export class Router {
    routes = {}

    add(routeName, link) {
        this.routes [routeName] = link
    }

    route(event) { // função do disparo no click.
        event = event || window.event
        event.preventDefault()

        window.history.pushState( {}, "", event.target.href) //pega window, o histórico da aplicação, coloque o estado no histórico. o evento pega quem disparou ele, que foi o target e pega o href de quem disparou.
        this.handle() //sempre na classe tem que usar a palavra this.
    }

    handle() { //localiza o nome de cada href
        const pathname = window.location.pathname
        const route = this.routes[pathname]

            // fetch é uma função assíncrona, quebra a leitura do javascript, não lê linha por linha... ela retorna depois.
        fetch(route).then(data => data.text()) //busca route, então pega os dados.text,
        .then(html => { //então pega o html, busca o #app e passa o html para ele.
            document.querySelector('#app').innerHTML = html
        })
    }
}