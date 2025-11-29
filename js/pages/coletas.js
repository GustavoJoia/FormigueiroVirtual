export const Coletas = {
    template: `
        <main class="conteudo estudos">
            <br>
            <h5 class="cartao">Formigas Montadas</h5>
            <div class="grid">
                <div v-for="coleta in coletas" class="coleta">
                    <img>
                    <div>
                    </div>
                </div>
            </div>
            <br><br><br>
            <h5 class="cartao">Mapas de Coleta</h5>
            <div class="grid">
                <div v-for="local in locais" class="coleta">
                    <img>
                    <div>
                    </div>
                </div>
            </div>
               
                
        </main>
    `,
    data(){
        return{
            coletas:[
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
            ],
            locais:[
                {},
                {},
                {},
                {},
                {}
            ]
        }
    },
    methods:{

    }
}