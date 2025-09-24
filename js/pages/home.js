

export const Home = {
    template: `
        <main class="conteudo">
            <h5 class="cartao">Quem Somos?</h5>
            <div class="cartao">
                <p>Este site foi criado com o propósito de introduzir uma visão geral sobre as formigas, apresentando suas funções no ecossistema, destacar suas características taxonômicas que permitem compreender sua diversidade. Também traz orientações sobre métodos adequados de coleta, e instruções para a montagem de um insetário e de como fazer a identificação de formigas.</p>
                <p>Somos estudantes da Etec, no curso de Meio Ambiente e, com a orientação de nossos professores e colaboradores, desenvolvemos nosso Trabalho de Conclusão de Curso (TCC) sobre a biodiversidade, a relevância ecológica das formigas e sua taxonomia. Apesar de serem vistas como pragas e, em alguns casos, prejudicarem colheitas, as formigas têm papel essencial na formação e no equilíbrio da biodiversidade, sendo importantes forças estruturantes dos ecossistemas terrestres. Nosso trabalho tem como objetivo mostrar que as formigas não representam apenas malefícios, mas desempenham um papel fundamental no equilíbrio da biodiversidade.</p>
            </div>

            <h4 class="informiga">Anatomia de Uma Formiga</h4>
            <div class="informiga">
                <div class="antenas">
                    <div class="peca_corpo" @click="abrirInfoSimples('Antenas')"></div>
                    <div class="peca_corpo" @click="abrirInfoSimples('Antenas')"></div>
                </div>
                <div class="cabeca">
                    <div class="peca_corpo" @click="abrirInfoPernas"></div>
                    <div class="parte_corpo" @click="abrirInfoSimples('Cabeça')"></div>
                    <div class="peca_corpo" @click="abrirInfoPernas"></div>
                </div>
                <div class="torax">
                    <div class="parte_corpo" @click="abrirInfoSimples('Tórax')"></div>
                </div>
                <div class="peciolo">
                    <div class="peca_corpo" @click="abrirInfoSimples('Peciolo')"></div>
                </div>
                <div class="abdomem">
                    <div class="parte_corpo" @click="abrirInfoSimples('Gaster')"></div>
                </div>
            </div>
        </main>
    `,
    data(){
        return {
            partes:[
                {nome:'Antenas',text:'As formigas tem as antenas em forma de cotovelo que são cruciais na sua comunicação e navegação. As antenas são utilizadas para receber e expelir feromônios.'},
                {nome:'Cabeça',text:'Na cabeça é onde está localizado; Mandíbula: as mandíbulas que são utilizadas para agarrar, cortar e transportar objetos; Olhos:  os olhos constituídos por numerosos omatídeos, formigas aladas contém olhos simples chamados ocelos, que as ajudam a se orientar utilizando a luz.'},
                {nome:'Tórax',text:'Local onde as pernas estão fixadas e contém os músculos necessários para o movimento. Em formigas com asas contém os músculos necessários para voar, após o acasalamento as formigas perdem suas asas deixando uma cicatriz no local.'},
                {nome:'Pernas',text:'As pernas das formigas estão divididas em três partes: Tibia, Fêmur e Tarso. Conseguem andar e escalar sob qualquer superfície.'},
                {nome:'Coxas',text:'É o segmento mais próximo ao corpo da formiga onde a perna se une ao torax.'},
                {nome:'Trocânter',text:'É um pequeno segmento localizado entre a coxa e o fêmur, ajuda na articulação da perna e proporciona flexibilidade nós movimentos.'},
                {nome:'Fêmur',text:'Crucial para o movimento e força da perna.'},
                {nome:'Tibia',text:'Desempenha um palpe importante no movimento permite que a formiga estenda e dobre a perna.'},
                {nome:'Tarsos',text:'São os últimos segmentos da perna são compostos por vários pequenos segmentos chamados tarsômetros. Os tarsos estão equipados com espinhos e pelos sensoriais que ajudam a formiga a se agarrar a superfície e detectar estimulos do ambiente.'},
                {nome:'Garras',text:'No final dos tarsos,as pernas das formigas estão equipadas com garras que permitem que elas agarrem as superfície e escalem com facilidade.'},
                {nome:'Peciolo',text:'Estrutura semelhante a uma cintura que liga o torax ao abdômen, algumas formigas tem o peciolo de um segmento e outras de dois segmentos, é a principal forma de identificação.'},
                {nome:'Gaster',text:'Contém os órgãos vitais e os órgãos reprodutores. E também o local onde se encontra o armamento químico da formiga, incluindo veneno e ácido fórmico.'},
            ]
        }
    },
    methods:{
        abrirInfoSimples(parteCorpo){

            this.partes.forEach(parte => {
                if(parteCorpo==parte.nome){
                    Swal.fire({
                        title:parte.nome,
                        text: parte.text,
                        confirmButtonText:'Fechar',
                        confirmButtonColor: '#75975e'
                    })
                }
            });
            
        },
        abrirInfoPernas(){
            Swal.fire({
                title: 'Pernas',
                html: '<p>'+this.partes[3].text+'</p><br><h3>'+this.partes[4].nome+'</h3><p>'+this.partes[4].text+'</p><br><h3>'+this.partes[5].nome+'</h3><p>'+this.partes[5].text+'</p><br><h3>'+this.partes[6].nome+'</h3><p>'+this.partes[6].text+'</p><br><h3>'+this.partes[7].nome+'</h3><p>'+this.partes[7].text+'</p>',
                confirmButtonText:'Fechar',
                confirmButtonColor:'#75975e'
            })
        }
    }
}