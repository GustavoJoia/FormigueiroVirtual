// Importando os arquivos através do caminho e atribuindo o seu identificador
import { Header } from "./components/header.js";
import { Sidebar } from "./components/sidebar.js";
import { Navbar } from "./components/navbar.js";
import { Home } from "./pages/home.js";
import { Sobre } from "./pages/sobre.js";
import { Imagens } from "./pages/imagens.js";
import { Iscas } from "./pages/iscas.js";
import { Info } from "./pages/info.js";
import { Coletas } from "./pages/coletas.js";

// Definindo as rotas através desse identificador
const routes = [
    { path: '/', redirect: '/inicio'},
    { path: '/inicio', component: Home, meta: { title: 'Informigações' }},
    { path: '/sobre', component: Sobre, meta: { title: 'Sobre o Projeto' }},
    { path: '/imagens', component: Imagens, meta: { title: 'Imagens' }},
    { path: '/coletas', component: Coletas, meta: { title: 'Formigas Estudadas' }},
    { path: '/iscas', component: Iscas, meta: { title: 'Montagem de Iscas' }},
    { path: '/info', component: Info, meta: { title: 'Informações Técnicas' }},
];

// Criando o router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

// Atualizando o título da página dinamicamente
router.afterEach((to) => {
    const defaultTitle = 'Formigueiro Virtual'; // Título padrão
    document.title = to.meta.title ? `${to.meta.title} - ${defaultTitle}` : defaultTitle;
});

const App = {
    data() {
        return {

        };
    },

    template: `
        <div class="d-flex flex-column h-100">
            <Header class="d-flex"></Header>
            <Navbar :active-path="activePath"></Navbar>
            <div class="d-flex flex-row flex-grow-1" style="min-height:0">
                <Sidebar :active-path="activePath"></Sidebar>
                <div class="flex-grow-1 custom-scroll bg-pg content-scroll">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    `,
    components:{
        Sidebar,
        Navbar,
        Header
    },

    setup() {
        const route = VueRouter.useRoute();
        return {
           activePath: Vue.computed(()=> route.path )
        };
    },
};


const app = Vue.createApp(App);
app.use(router);
app.mount('#app');