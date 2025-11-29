export const Navbar = {
    props:[
        'activePath'
    ],
    template:`
    <nav id="mobile-nav" class="res-mobile">
        <ul class="navbar-nav">
            <li class="nav-item"><router-link :class="{ active: activePath === '/inicio'}" to="/inicio">Informigações</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/sobre'}" to="/sobre">Sobre o projeto</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/coletas'}" to="/coletas">Formigas Estudadas</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/imagens'}" to="/imagens">Imagens</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/iscas'}" to="/iscas">Montagem de Iscas</router-link></li>
            <li class="nav-item"><router-link :class="{ active: activePath === '/info'}" to="/info">Informações Técnicas</router-link></li>
        </ul>
    </nav>
    `
}