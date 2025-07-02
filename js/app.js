// Importando os arquivos através do caminho e atribuindo o seu identificador
import { Home } from "./pages/home.js";

// Definindo as rotas através desse identificador
const routes = [
    { path: '/', component: Home, meta: { title: 'Início' }},
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
    // Aplicando o template header padrão em todas as views (páginas) dinamicamente
    // Depois do conteúdo (páginas), implementa-se o footer na ordem em cascata
    template: `
        <div class="d-flex justify-content-start flex-row h-100">
            <router-view></router-view>
        </div>
    `,
    // Porta na qual o servidor front-end roda, definida na pasta global-var/base-url.js.
    setup() {
        return {
           
        };
    },
};

// Finalizando a criação da aplicação, aplicando rota, versionamento e carregando no body do index.
const app = Vue.createApp(App);
app.use(router);
app.mount('#app');