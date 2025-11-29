export const Header = {
    template: `
        <header>
            <img @click="curiosidade()" class="logo" src="/FormigueiroVirtual/img/formiga.png">
            <h1>Formigueiro Virtual</h1>
            <img id="formiga" class="formiguinha treme-treme" src="/FormigueiroVirtual/img/formiga-andando.gif">
            <img id="formiga" class="formiguinha treme-treme delay-1" src="/FormigueiroVirtual/img/formiga-andando.gif">
            <img id="formiga" class="formiguinha treme-treme delay-2" src="/FormigueiroVirtual/img/formiga-andando.gif">
            <img id="formiga" class="formiguinha treme-treme delay-3" src="/FormigueiroVirtual/img/formiga-andando.gif">
        </header>
    `,
    data(){
        return{
            curiosidades:[
                "Formigas de árvores podem pular e se jogar no chão quando se sentem ameaçadas.",
                "Formigas são super fortes. Elas têm a capacidade de transportar entre 10 e 50 vezes seu próprio peso corporal.",
                "Elas são muito antigas. As formigas surgiram há cerca de 130 milhões de anos, coexistindo com os dinossauros. Elas são uma das formas de vida mais antigas ainda existentes hoje.",
                "Atualmente, estima-se que existam cerca de 15.700 espécies e subespécies de formigas catalogadas no mundo, embora o número total possa ultrapassar 22.000 espécies quando consideradas as ainda não descritas. No Brasil, há registro de aproximadamente 1.500 espécies conhecidas, o que faz do Brasil um dos países com maior diversidade do planeta.",
                'Formigas, assim como todos os insetos, possuem tanta força por serem constituídos do chamado "Exoesqueleto", composto por quitina. Essa camada de seus corpos é rígida e protege o corpo, servindo como ponto de apoio dos músculos. Esse exoesqueleto funciona como uma espécie de armadura, o que permite que esses insetos levarem materiais de até 10 ou 50x o peso de seus próprios corpos. Sua transmissão de força também se torna mais eficiente devido aos corpos bem articulados, que facilitam o levantamento de objetos. Sua leveza em relação a gravidade influência na facilidade que eles possuem de empurrar objetos, o que comprova que na natureza tamanho não é igual a força!',
                'Existem formigas nômades que vivem em grandes bandos. Elas costumam montar formigueiros como torres de areia ou terra durante algumas estações específicas, onde circulam livremente. Nessas espécies, muitas rainhas podem ser identificadas e inúmeras formigas são férteis. No período reprodutivo, o macho precisa voar até os formigueiros-torre e lutar contra as formigas operárias; caso saía vivo, ele pode fecundá-la.',
                'Existe algo chamado de "Escravagismo" entre as formigas, que consiste no sequestro de ovos de formigas de outras colônias. Quando esses ovos crescem, essas formigas trabalham para a colônia sequestradora, servindo às formigas nativas.',
                'Muitas formigas são devoradoras de ovos de outras formigas!',
                'As asas das formigas rainhas são arrancadas assim que ela dá a primeira cria. Essas asas se tornam inúteis e podem acumular doenças e fungos que geram risco a vida da rainha. Ela pode arrancá-las sozinha ou com a ajuda de outras formigas, e as cicatrizes permanecem em suas asas (e são uma forma de identificação eficaz de uma rainha).',
                'Praticamente em todo lugar do planeta há formigas… menos na Antártida.',
                '⁠O primeiro homem conhecido por estudar formigas de maneira formal foi Pierre André Latreille, que deu nome a família Formicidae.',
                `⁠Cada formigueiro funciona como uma “cidade” com funções divididas:
                <br>    •	Rainha: põe os ovos.
                <br>    •	Operárias: cuidam da limpeza, da comida e das larvas.
                <br>    •	Soldadas: defendem o formigueiro.
                <br>Algumas espécies têm milhões de formigas em uma única colônia!`,
                'Só existem fêmeas trabalhando e vivendo em colônias de formigas. Os machos tem serventia reprodutiva, e logo depois saem voando, perdem as asas em algum momento e morrem de fome.',
                'Formigas não falam nem fazem barulhos, mas se comunicam através de feromônios, substâncias químicas que transmitem mensagens. Elas deixam rastros para guiar outras até a comida!',
                'Elas respiram através de pequenos buracos no corpo, chamados espiráculos, e sentem vibrações com as perninhas e antenas — é assim que “ouvem”.',
                'Algumas espécies, como as formigas-correição (Eciton), se unem formando pontes e balsas vivas para atravessar obstáculos ou rios. Impressionante!',
                'Enquanto as operárias vivem apenas alguns meses, a rainha pode viver até 30 anos em algumas espécies.'
            ]
        }
    },
    methods:{
        curiosidade(){
            Swal.fire({
                title:'Curiosidade!',
                html:this.curiosidades[Math.floor(Math.random() * this.curiosidades.length)],
                confirmButtonText: 'Fechar',
                confirmButtonColor:'#75975e',
            })
        }
    }
}