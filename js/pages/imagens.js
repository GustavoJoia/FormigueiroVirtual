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
                {data:'1.jpg',selected:false},
                {data:'2.jpg',selected:false},
                {data:'3.jpg',selected:false},
                {data:'4.jpg',selected:false},
                {data:'5.jpg',selected:false},
                {data:'6.jpg',selected:false},
                {data:'7.jpg',selected:false},
                {data:'8.jpg',selected:false},
                {data:'9.jpg',selected:false},
                {data:'10.jpg',selected:false},
                {data:'11.jpg',selected:false},
                {data:'12.jpg',selected:false},
                {data:'13.jpg',selected:false},
                {data:'14.jpg',selected:false},
                {data:'15.jpg',selected:false},
                {data:'16.mov',selected:false},
            ]
        }
    },
    methods:{

    },
}