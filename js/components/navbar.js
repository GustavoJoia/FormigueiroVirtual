export const Navbar = {
    props:[
        'activePath'
    ],
    template:`
    <nav id="mobile-nav" class="res-mobile">
        <ul class="navbar-nav">
            <li class="nav-item"><router-link :class="{ active: activePath === '/'}" to="/">Informigações</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/estudos'}" to="/estudos">Formigas estudadas</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/imagens'}" to="/imagens">Imagens</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/iscas'}" to="/iscas">Montagem de Iscas</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/info'}" to="/info">Informações técnicas</router-link></li>
        </ul>
    </nav>
    `
}