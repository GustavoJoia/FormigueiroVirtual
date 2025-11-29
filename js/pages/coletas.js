export const Coletas = {
    template: `
        <main class="conteudo estudos">
            <br>
            <h5 class="cartao">Formigas Montadas</h5>
            <div class="grid">
                <div v-for="coleta in coletas" class="coleta">
                    <img :src="'/FormigueiroVirtual/img/locais/'+coleta.img" @click="expandirImg(coleta.img)">
                    <div>
                    </div>
                </div>
            </div>
            <br><br><br>
            <h5 class="cartao">Mapas de Coleta</h5>
            <div class="grid">
                <div v-for="local in locais" class="coleta">
                    <img :src="'/FormigueiroVirtual/img/locais/'+local.img" @click="expandirImg(local)">
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
                {img:'1.jpg'},
                {img:'2.jpg'},
                {img:'3.jpg'},
                {img:'4.jpg'},
                {img:'5.jpg'}
            ]
        }
    },
    methods:{
        expandirImg(img){
            Swal.fire({
                title:img.title,
                html:'<div style="display: flex; justify-content: center; align-itens: center;"><img style="width: 90%; height: 80%; object-fit: fill" src="/FormigueiroVirtual/img/iscas/'+metodo.img+'"></div>',
                confirmButtonText: 'Fechar',
                confirmButtonColor:'#75975e',
                width: 600,
                height: 300,
            })
        }
        
    }
}