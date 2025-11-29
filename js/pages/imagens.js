export const Imagens = {
    template:`
        <main class="conteudo estudos">
            <h4 class="informiga">Registro de mídia</h4>
            <div class="midia-scroll">
                <img v-for="midia in midias" class="midia" :src="'/FormigueiroVirtual/img/midia/'+midia.data">
            </div>
        </main>
    `,
    data(){
        return{
            midias:[
                {data:'1.jpg',}
            ]
        }
    },
    methods:{

    },
}