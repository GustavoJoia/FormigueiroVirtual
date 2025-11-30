

export const Home = {
    template: `
        <main class="conteudo">
            <br>
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
                    <div class="peca_corpo" @click="abrirInfoSimples('Pecíolo')"></div>
                </div>
                <div class="abdomem">
                    <div class="parte_corpo" @click="abrirInfoSimples('Gáster')"></div>
                </div>
            </div>
        </main>
        <footer>
            <div class="col">
                <h4 class="informiga">Referências</h4>
                <p><a target="_blank" href="https://scholar.google.com.br/scholar?hl=pt-BR&lr=lang_pt&as_sdt=0%2C5&as_ylo=2021&q=%22import%C3%A2ncia+da+biodiversidade%22&btnG=#d=gs_qabs&t=1739400431340&u=%23p%3DTLg0pl73SEMJ">"importância da biodiversidade" em Google Acadêmico</a>. Data de acesso: 12/02</p>
                <p><a target="_blank" href="https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&as_ylo=2021&q=formigas&btnG=#d=gs_qabs&t=1739400623992&u=%23p%3D39JhyAvL6lEJ">'formigas' em Google Acadêmico</a>. Data de acesso: 12/02</p>
                <p><a target="_blank" href="https://scholar.google.com.br/scholar?hl=pt-BR&as_sdt=0%2C5&as_ylo=2021&q=formigas&btnG=#d=gs_qabs&t=1739400660422&u=%23p%3DleLDtDJIQ34J">'formigas' em Google Acadêmico</a>. Data de acesso: 12/02</p>
                <p><a target="_blank" href="https://scholar.google.com.br/scholar?start=20&q=formigas&hl=pt-BR&as_sdt=0,5&as_ylo=2021#d=gs_qabs&t=1739400750653&u=%23p%3DxrcMIxgx1fUJ">'formigas' em Google Acadêmico</a>. Data de acesso: 12/02</p>
                <p><a target="_blank" href="https://periodicosuneal.emnuvens.com.br/ambientale/article/download/318/268">Métodos de controle de formigas cortadeiras em sistemas orgânicos de produção: uma revisão</a>. Data de acesso: 12/02</p>

                <p><a target="_blank" href="diversitasjournal.com.br/diversitas_journal/article/download/2037/1935">Teste</a>. Data de acesso: 12/02</p>

                <p><a target="_blank" href="cienciaecultura.bvs.br/pdf/cic/v75n4/v75n4a08.pdf">Teste</a>. Data de acesso: 12/02</p>

                <p><a target="_blank" href="revistas.pucsp.br/fid/article/download/57292/41936">Teste</a>. Data de acesso: 12/02</p>

                <p><a target="_blank" href="periodicos.ifal.edu.br/educte/article/download/2051/1516">Teste</a>. Data de acesso: 12/02</p>

                <p><a target="_blank" href="portal.unemat.br/media/files/dissertao-karla-versao-final-turma-2018-certo.pdf">Teste</a>. Data de acesso: 12/02</p>

                <p><a target="_blank" href="www.journals.ufrpe.br/index.php/JEAP/article/download/3118/482483665">Teste</a>. Data de acesso: 12/02</p>

                <p><a target="_blank" href="revistacienciaecultura.org.br/?artigos=microbiomas-de-formigas-fungicultoras-em-diferentes-biomas-brasileiros">Teste</a>. Data de acesso: 22/02</p>

                <p><a target="_blank" href="www.feitosalab.com/copia-identificacao-de-material-2">Teste</a>. Data de acesso: 03/04</p>

                <p><a target="_blank" href="bdtd.ibict.br/vufind/Record/UFV_b9a2327bc2ec50b2bf2766ac8ffb48f4">Teste</a>. Data de acesso: 26/06</p>

                <p><a target="_blank" href="www.youtube.com/watch?v=eMewacz6VBg">Teste</a>. Data de acesso: 26/06</p>

                <p><a target="_blank" href="share.google/0cOndCHZ9hDgDsGCA">Teste</a>. Data de acesso: 26/06</p>

                <p><a target="_blank" href="pt.wikipedia.org/wiki/Mirmecologia#:~:text=Mirmecologistas%20c%C3%A9lebres,Wheeler%2C%20F">Teste</a>. Data de acesso: 28/08</p>

                <p>file:///C:/Users/Aluno/Downloads/A+Hist%C3%B3ria+das+formigas+e+as+formigas+na+hist%C3%B3ria_+etologia+e+cultura%20(1).pdf. Data de acesso: 28/08</p>

                <p><a target="_blank" href="share.google/S7rKAM5ayFHKMm9uM">Teste</a>. Data de acesso: 28/08</p>

                <p><a target="_blank" href="share.google/T26zDToWK2UNXEtd1">Teste</a>. Data de acesso: 28/08</p>

                <p><a target="_blank" href="www.biota.org.br/os-segredos-das-formigas-cultivadoras-de-fungos/">Teste</a>. Data de acesso: 28/08</p>

                <p><a target="_blank" href="www.bvs-vet.org.br/vetindex/periodicos/brazilian-journal-biology/85-(2025)/assembleia-de-formigas-hymenoptera-formicidae-e-padroes-espaciais-de-d/">Teste</a>. Data de acesso: 25/09</p>

                <p><a target="_blank" href="www.journals.ufrpe.br/index.php/JEAP/article/view/3118?utm_source=chatgpt.com">Teste</a>. Data de acesso: 25/09</p>

                <p><a target="_blank" href="www.biodiversity4all.org/taxa/891179-Attina">Teste</a>. Data de acesso: 25/09</p>

                <p><a target="_blank" href="www.agrolink.com.br/problemas/quenquem_274.html">Teste</a>. Data de acesso: 25/09</p>

                <p><a target="_blank" href="www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/917040/1/CT290.pdf">Teste</a>. Data de acesso: 25/09</p>

                <p>file:///C:/Users/Aluno/Downloads/camiladebarros,+OA+v+20+n+3+p+332-340+ex+0997.pdf Data de acesso: 25/09</p>

                <p><a target="_blank" href="lume.ufrgs.br/handle/10183/212915?utm_source">Teste</a>. Data de acesso: 25/09</p>

                <p>DEL‑CLARO, Kleber. A importância do comportamento de formigas em interações: formigas e tripes em Peixotoa tomentosa [Malpighiaceae], no cerrado. Rev. etol, N.Esp: 3‑10, 1998. Disponível em: <a target="_blank" href="pesquisa.bvsalud.org/portal/resource/pt/psi-17116"></a>. Acesso em: 09 out. 2025.</p>

                <p>SMITH, C. R.; WARD, P. S.; BOLTON, B.; et al. Ant systematics: past, present, and future. Insect Systematics and Diversity, [S. l.], v. 9, n. 4, p. 1–28, 2023. Disponível em: <a target="_blank" href="academic.oup.com/isd/article/9/4/11/8248754"></a>. Acesso em: 09 out. 2025.</p>

                <p><a target="_blank" href="www.hup.harvard.edu/books/9780674040755?utm_source=chatgpt.com">Teste</a>. Data de acesso: 9/10</p>

                <p><a target="_blank" href="toaz.info/doc-view-3">Teste</a>. Data de acesso: 09/10</p>

                <p>HALE, Tom. How many ants are in the world? Think millions of billions. IFLScience, 23 jun. 2023. Disponível em: <a target="_blank" href="www.iflscience.com/how-many-ants-are-in-the-world-think-millions-of-billions-69505"></a>. Acesso em: 23 out. 2025.</p>

                <p>IMUNI Saúde Ambiental. Formigas: 10 curiosidades incríveis. Imuni, 2019. Disponível em: <a target="_blank" href="www.imuni.com.br/formigas-10-curiosidades-incriveis/"></a>. Acesso em: 23 out. 2025.</p>

                <p>UNICONTROL. Conheça algumas curiosidades sobre Formigas. Unicontrol, 19 jul. 2024. Disponível em: <a target="_blank" href="unicontrolbrasil.com"></a>. Acesso em: 23 de out. 2025. <a target="_blank" href="www-ebsco-com.translate.goog/research-starters/language-and-linguistics/genus-biology?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=sge&_x_tr_hist=true">Teste</a>. Data de acesso: 23/10</p>

                <p><a target="_blank" href="www.todamateria.com.br/reino-animal/">Teste</a>. Data de acesso: 23/10</p>

                <p><a target="_blank" href="en-wikipedia-org.translate.goog/wiki/Order_(biology)?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc">Teste</a>. Data de acesso: 23/10</p>

                <p><a target="_blank" href="www.biodiversity4all.org/taxa/47201-Hymenoptera">Teste</a>. Data de acesso: 23/10</p>

                <p><a target="_blank" href="pt.wikipedia.org/wiki/Insetos">Teste</a>. Data de acesso: 23/10</p>

                <p><a target="_blank" href="pt.wikipedia.org/wiki/Espécie">Teste</a>. Data de acesso: 23/10</p>

                <p><a target="_blank" href="pt.wikipedia.org/wiki/Quenquém">Teste</a>. Data de acesso: 23/10</p>
            </div>
            <div class="col">
                <h4 class="informiga">Agradecimentos</h4>
                <p>Agradecemos primeiramente aos membros do Laboratório Feitosa, especialmente à mestranda Vitória Brunetta, cuja ajuda foi indispensável e ilimitada para a realização deste trabalho.</p>
                <br>
                <p>Agradecemos aos nossos orientadores e professores, Fernanda Amaral Sanches Lucas e Jorge Luis Costa, pelo apoio, pela orientação e pelas horas dedicadas ao aprimoramento do nosso projeto.</p>
                <br>
                <p>Agradecemos também ao nosso colega Gustavo Jóia pela concretização deste site e por toda a paciência, apoio e suporte essenciais para que tudo ficasse perfeito.</p>
                <br>
                <p>Por fim, agradecemos a Anthony Butka Markoski, bem como a todos os amigos, pais, colegas e companheiros que revisaram, testaram, deram dicas e foram incríveis durante toda a nossa jornada.</p>
            </div>
        </footer>
    `,
    data(){
        return {
            partes:[
                {nome:'Antenas',text:'As formigas tem as antenas em forma de cotovelo que são cruciais na sua comunicação e navegação. As antenas são utilizadas para receber e expelir feromônios.'},
                {nome:'Cabeça',text:'Na cabeça é onde está localizado; Mandíbula: as mandíbulas que são utilizadas para agarrar, cortar e transportar objetos; Olhos:  os olhos constituídos por numerosos omatídeos, formigas aladas contém olhos simples chamados ocelos, que as ajudam a se orientar utilizando a luz.'},
                {nome:'Tórax',text:'Local onde as pernas estão fixadas e contém os músculos necessários para o movimento. Em formigas com asas contém os músculos necessários para voar, após o acasalamento as formigas perdem suas asas deixando uma cicatriz no local.'},
                {nome:'Pernas',text:'As pernas das formigas estão divididas em três partes: Tíbia, Fêmur e Tarso. Conseguem andar e escalar sob qualquer superfície.'},
                {nome:'Coxas',text:'É o segmento mais próximo ao corpo da formiga onde a perna se une ao tórax.'},
                {nome:'Trocânter',text:'É um pequeno segmento localizado entre a coxa e o fêmur, ajuda na articulação da perna e proporciona flexibilidade nos movimentos.'},
                {nome:'Fêmur',text:'Crucial para o movimento e força da perna.'},
                {nome:'Tíbia',text:'Desempenha um palpe importante no movimento permite que a formiga estenda e dobre a perna.'},
                {nome:'Tarsos',text:'São os últimos segmentos da perna são compostos por vários pequenos segmentos chamados tarsômetros. Os tarsos estão equipados com espinhos e pelos sensoriais que ajudam a formiga a se agarrar a superfície e detectar estimulos do ambiente.'},
                {nome:'Garras',text:'No final dos tarsos,as pernas das formigas estão equipadas com garras que permitem que elas agarrem as superfície e escalem com facilidade.'},
                {nome:'Pecíolo',text:'Estrutura semelhante a uma cintura que liga o tórax ao abdômen, algumas formigas tem o pecíolo de um segmento e outras de dois segmentos, é a principal forma de identificação.'},
                {nome:'Gáster',text:'Contém os órgãos vitais e os órgãos reprodutores. E também o local onde se encontra o armamento químico da formiga, incluindo veneno e ácido fórmico.'},
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