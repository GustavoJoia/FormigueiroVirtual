export const Imagens = {
    template:`
        <main class="conteudo estudos">
        <br>
            <h4 class="informiga">Registro de mídia</h4>
            <div class="midia-scroll">
                <div v-for="(midia,index) in midias">
                    <img @click="setActive(index)" class="midia" :src="'/FormigueiroVirtual/img/midia/'+midia.data">
                </div>
            </div>
            <div v-if="isImg" class="cartao">
                <img class="midia-expand" :src="'/FormigueiroVirtual/img/midia/'+activeUri">
            </div>
            <div v-if="isVideo" class="cartao">
                <video class="midia-expand" :src="'/FormigueiroVirtual/img/midia/'+activeUri" loop controls muted>
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
                {data:'16.jpg',selected:false}
            ],
            activeUri:'',
            isImg: false,
            isVideo: false
        }
    },
    methods:{
        setActive(index){
            if(index!=15){
                this.activeUri = this.midias[index].data;
                this.isImg = true;
                this.isVIdeo = false;
            } else {
                this.activeUri = '16.mov';
                this.isVideo = true;
                this.isImg = false;
            }
        }
    },
}