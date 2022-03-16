/* TRAÇO EMBAIXO DO NAVBAR */
const navBar = document.querySelectorAll(".menu__link")
const planetSlider = document.querySelector(".destination-aside-items")
const planetNav = document.querySelectorAll(".nav-link-destination")


// função para deslizar a navegação do site
const clickNav = (e) => {
    navBar.forEach(curNav => curNav.classList.remove("ativo"))
    const check = e.target
    check.classList.add("ativo")
}

navBar.forEach(curNav => curNav.addEventListener("click", (ev) => clickNav(ev)))


// função para deslizar a navegação sobre os planetas ao clicar
const clickCheck = (e) => {
    // remover classe ativa de todas as trilhas
    planetNav.forEach(cur => cur.classList.remove("active"))
    // Obtém a trilha selecionada
    const check = e.target
    // adiciona classe ativa
    check.classList.add("active")
}

// Adiciona função a todas as trilhas
planetNav.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))