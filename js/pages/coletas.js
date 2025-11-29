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
                    <img :src="'/FormigueiroVirtual/img/locais/'+local.img" @click="expandirImg(local.img)">
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
                {img:'1.jpg',legenda:'Legenda: Mapa por satélite da escola técnica Etec Doutor Celso Giglio. Os pontos azuis simbolizam as coordenadas específicas de cada ponto de coleta.<br><br>Fonte: Google Maps (2024)'},
                {img:'2.jpg',legenda:'Legenda: Mapa em satélite dos quatro pontos de coleta na cidade de Osasco.<br><br>Fonte: Google Maps (2025)'},
                {img:'3.jpg',legenda:'Legenda: Mapa em satélite dos pontos de coleta na Rua Vila dos Remédios, Rua santo Ubaldo, 158.<br><br>Fonte: Google Maps (2025)'},
                {img:'4.jpg',legenda:"Legenda: Mapa em satélite dos pontos de coleta na Rua Domitila D'Abril Jardim Davila, 85.<br><br>Fonte: Google Maps (2025)"},
                {img:'5.jpg',legenda:'Legenda: Mapa em satélite dos pontos de coleta no Condomínio Residencial Vida Nova 3935, em Avenida Edmundo Amaral, no bairro Piratininga.<br><br>Fonte: Google Maps (2025)'}
            ]
        }
    },
    methods:{
        expandirImg(img){
            this.locais.forEach(local => {
                if(local.img==img){
                    Swal.fire({
                        html:'<div style="display: flex; justify-content: center; align-itens: center;"><img style="width: 90%; height: 80%; object-fit: fill" src="/FormigueiroVirtual/img/locais/'+local.img+'"></div>',
                        confirmButtonText: 'Fechar',
                        confirmButtonColor:'#75975e',
                        width: 600,
                        height: 300,
                    })
                }
            });
        }
        
    }
}