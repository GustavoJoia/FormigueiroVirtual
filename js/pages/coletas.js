export const Coletas = {
    template: `
        <main class="conteudo estudos">
            <br>
            <h5 class="cartao">Formigas Montadas</h5>
            <div class="grid">
                <div v-for="coleta in coletas" class="coleta">
                    <img :src="'/FormigueiroVirtual/img/coletas/'+coleta.img" @click="expandirImg2(coleta.img)">
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
                {img:'1.jpg',legenda:`Holcoponera striatula. Ectatomminae. S23°31'18.318404"W46°45'29.064817". 
<br><br>
Informações de Coleta:
<br>Isca de urina
<br>31/05/2024
<br>R. Santos — Coletor`},
                {img:'2.jpg',legenda:`Ectatomma edentatum Roger. Ectatomminae. S23°31'18.531228" W46°45'27.975683".
<br><br>
Informações de Coleta:
<br>Pitfall
<br>31/05/2024
<br>L. Custódio — Coletora`},
                {img:'3.jpg',legenda:`Pachycondula striata Smith. Ponerinae. S23°31'18.793165"W46°45'29.314782".
<br><br>
Informações de Coleta:
<br>Pitfall
<br>08/05/2024
<br>R. Santos — Coletor
<br>* Identificada como Rainha`},
                {img:'4.jpg',legenda:`Linepithema. Dolichoderinae. S23°31'17.14"W46°45'14.69". 
<br><br>
Informações de Coleta:
<br>Método de Busca Ativa
<br>26/03/2025
<br>L. Custódio — Coletora
<br>* Identificada como Rainha`},
                {img:'5.jpg',legenda:`Linepithema. Dolichoderinae. S23°30'46.831883" W46°48'9.088030".
<br><br>
Informações de Coleta:
<br>Método de Busca Ativa
<br>24/07/2025
<br>R.Santos — Coletor`},
                {img:'6.jpg',legenda:`Dolirymyrmex. Dolichoderinae. S23°30'17.358398. W46°45'52.445984". 
<br><br>
Métodos de Coleta:
<br>Método de Busca Ativa
<br>16/05/2025
<br>A. Coutinho — Coletora
<br>* Identificado como Zangão`},
                {img:'7.jpg',legenda:`Wasmannia. Myrmicinae. S23°31'17,531285" W46°45'14,735815".
<br><br>
Informações de Coleta:
<br>Método de Busca Ativa
<br>24/07/2025
<br>L. Custódio — Coletora`},
                {img:'8.jpg',legenda:`Dorymyrmex. Dolichoderinae. S23°30'18523632"W46°45'47.675890'" 
<br><br>
Informações de Coleta:
<br>Método de Busca Ativa
<br>30/06/2025
<br>A. Coutinho — Coletora`},
                {img:'9.jpg',legenda:`Wasmannia. Myrmicinae. S23°31'17,531285" W46°45'14,735815".
<br><br>
Informações de Coleta: 
<br>Método de Busca Ativa 24/07/2025
<br>L. Custódio — Coletora`},
                {img:'10.jpg',legenda:`Myrmicinae. Solenopsis. S23°312'.020993"W46°45'27.243643". 
<br><br>
Informações de Coleta:
<br>Isca de Sardinha
<br>20/05/2024
<br>K. Costa — Coletor`},
                {img:'11.jpg',legenda:`Myrmicinae acromyrmex. S23°30'84.50" W46°48'12.26" 
<br><br>
Informações de Coleta:
<br>Método de Busca Ativa
<br>27/05/2025
<br>R. Santos — Coletor`},
                {img:'12.jpg',legenda:`Camponutus. Formicinae. S23°30'17.358398"W46"45'52.445984". 
<br><br>
Informações de Coleta:
<br>Método de Busca Ativa
<br>16/04/2025
<br>A. Coutinho — Coletora`},
                {img:'13.jpg',legenda:`Paratrechina. Formicinae. S23°3046.135712”W46°48'10.942383. 
<br><br>
Informações de coleta:
<br>Buscativa 
<br>10.02.2025.
<br>R.Santos - coletor.`},
                {img:'14.jpg',legenda:`Myrmicinae. Camponutus rufipes.  S23°31'20.020993"W46°45'27.243643". 
<br><br>
Informações de coleta:
<br>Isca de sardinha 
<br>20/06/2024
<br>K. Costa - coletor.`}

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
                        html:'<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"><img style="width: 90%; height: 50%; object-fit: cover" src="/FormigueiroVirtual/img/locais/'+local.img+'"><br><p>'+local.legenda+'</p></div>',
                        confirmButtonText: 'Fechar',
                        confirmButtonColor:'#75975e',
                        width: 600,
                        height: 300,
                    })
                }
            });
        },

        expandirImg2(img){
            this.coletas.forEach(coleta => {
                if(coleta.img==img){
                    Swal.fire({
                        html:'<div style="display: flex; flex-direction: column; justify-content: center; align-items: center;"><img style="width: 90%; height: 50%; object-fit: cover" src="/FormigueiroVirtual/img/coletas/'+coleta.img+'"><br><p>'+coleta.legenda+'</p></div>',
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