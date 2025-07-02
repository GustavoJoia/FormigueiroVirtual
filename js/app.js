// Importando os arquivos através do caminho e atribuindo o seu identificador
import { Header } from "./components/header.js";
import { Sidebar } from "./components/sidebar.js";
import { Home } from "./pages/home.js";
import { Estudos } from "./pages/estudos.js";
import { Imagens } from "./pages/imagens.js";
import { Iscas } from "./pages/iscas.js";
import { Info } from "./pages/info.js";

// Definindo as rotas através desse identificador
const routes = [
    { path: '/', component: Home, meta: { title: 'Informigações' }},
    { path: '/estudos', component: Estudos, meta: { title: 'Formigas estudadas' }},
    { path: '/imagens', component: Imagens, meta: { title: 'Imagens' }},
    { path: '/iscas', component: Iscas, meta: { title: 'Montagem de iscas' }},
    { path: '/info', component: Info, meta: { title: 'Informações técnicas' }},
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
        <div class="d-flex flex-row h-100">
            <Sidebar :active-path="activePath"></Sidebar>
            <div class="d-flex flex-column flex-grow-1">
                <Header class="d-flex"></Header>
                <div class="flex-grow-1 overflow-auto p-4">
                    <router-view class="h-100"></router-view>
                </div>
            </div>
        </div>
    `,
    components:{
        Sidebar,
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