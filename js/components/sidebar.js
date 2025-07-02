export const Sidebar = {
    props:[
        'activePath'
    ],
    template:`
        <aside id="side_nav">
            <nav>
                <ul>
                    <li><router-link :class="{ active: activePath === '/'}" to="/">Informigações</router-link></li>
                    <li><router-link :class="{ active: activePath === '/estudos'}" to="/estudos">Formigas estudadas</router-link></li>
                    <li><router-link :class="{ active: activePath === '/imagens'}" to="/imagens">Imagens</router-link></li>
                    <li><router-link :class="{ active: activePath === '/iscas'}" to="/iscas">Montagem Iscas</router-link></li>
                    <li><router-link :class="{ active: activePath === '/info'}" to="/info">Informações técnicas</router-link></li>
                </ul>
            </nav>
        </aside>
    `
}