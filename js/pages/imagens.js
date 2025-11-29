export const Imagens = {
    template:`
        <main class="conteudo estudos">
        <br>
            <h4 class="informiga">Registro de mídia</h4>
            <div class="midia-scroll">
                <div v-for="(midia,index) in midias">
                    <img v-if="index!=15" class="midia" :src="'/FormigueiroVirtual/img/midia/'+midia.data">
                    <video v-else width="128" height="135" :src="'/FormigueiroVirtual/img/midia/'+midia.data" controls muted autoplay loop>
                </div>
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
                {data:'16.mov',selected:false}
            ]
        }
    },
    methods:{
        setActive(index){
            this.midias.forEach(midia, i => {
                if(midia[i].data!=midia[index].data){
                    midia[i].selected = false;
                }
                midia[index].selected = true;
            });
        }
    },
}