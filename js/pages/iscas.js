export const Iscas = {
    template:`
    <main class="conteudo">
        <h5 class="cartao">Informações sobre</h5>
        <div class="cartao">
            <p>Ao coletar formigas, é necessário que se tenha consciência de que você está lidando com seres vivos e sencientes cujo a vida possui tanto valor quanto a sua! Considerando isso, é necessário que haja uma ética envolvida na coleta e no cuidado dos insetos coletados por você, seus colegas ou profissionais que você conhece.</p>
            <p>O primeiro passo é evitar coletar espécies em risco de extinção, já que toda pesquisa deve priorizar o bem-estar do meio ambiente. O segundo passo, é garantir que a sua coleta tenha um objetivo científico e acadêmico bem fundamentado; coleta por hobby deve ser limitada e bem pensada, sem interferir no equilíbrio ecológico do local onde você vive e sem desrespeitar a vida dos animais coletados. A redução do estresse e dor desnecessários é fundamental, considerando, mais uma vez, que insetos possuem sistema nervoso e podem sofrer. Os métodos de coleta mais indicados para evitar dor e estresse são as armadilhas de isca e aspiradores de baixa potência. Evite, sempre, destruir formigueiros.</p>
            <p>No caso de coleta de outros insetos, não descarte e nem monte. A montagem de insetos varia de espécie para espécie. Eles devem ser enviados para um órgão competente que armazene o animal ou montados de acordo com a sua morfologia natural.</p>
        </div>

        <h5 class="cartao">Métodos de coleta</h5>
        <div v-for="metodo in metodos" class="cartao_img">
            <img :src="'/img/metodos/'+metodo.img+'.jpg'">
            <div class="cartao_corpo">
                <h6 class="cartao">{{metodo.title}}</h6>
                <p>{{metodo.text}}</p>
            </div>
        </div>
    </main>
    `,
    data(){
        return{
            metodos: [
                {img:'isca',title:'Isca de Sardinha',text:'Colocar dentro de um recipiente que possa ser lacrado (potes, sacos plásticos,etc) um pedaço de papel toalha com um pouco de sardinha, fígado ou qualquer alimento que tenha cheiro forte e deixar próximo a uma entrada de formigueiro de 6 a 12 horas.'},
                {img:'urina',title:'Isca de Urina',text:'Embebedar um pedaço de algodão em urina e pregar em árvores com formigueiros e deixar em média 2 horas, após isso coletar as formigas com uma pinça. Indicada para a atração de formigas que vivem em árvores.'},
                {img:'pitfall',title:'Armadilha de Queda (Pitfall)',text:'colocar em um copo plástico água, detergente e açúcar e enterrar próximo a uma entrada de formigueiro até a boca do copo.'},
            ]
        }
    }
}