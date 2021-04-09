<!DOCTYPE html><html lang="en"><head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/addons/p5.sound.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/bmoren/p5.collide2D/p5.collide2d.min.js"></script>
    
    <meta charset="utf-8">

  <base href="https://editor.p5js.org/douglasm/present/e-Dm4v4YP/"><style>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}

.botao-tela-inicial {
  font-family: 'Georgia', cursive;
  padding: 1rem 1.25rem;
  font-size: 1.5rem;
  //letter-spacing: .25rem;
  box-shadow: 2px 2px 0px 1px #4a4c69;
  text-transform: uppercase;
  background-color: #8386b5;
  border: none;
  border-radius: .75rem;
  color: #fff;
}

.botao-tela-inicial:hover {
  background-color: #272C67;
  box-shadow: 2px 2px 0px 1px #22324E;
}</style></head>
  <body>
    <script>//VARIAVEIS

let atxt1, atxt2, indtxt=0,flagFinalIntro=false,flagt=0;
let flagPulando=false, flagCamb = false, flagAtaque=false;
let flagPersFogo=false;
let flagBlink=0,flagBlinkBoss=0;
let flagAnima02=0;
let flagBossAtt=false,flagBossVolta=false,flagBossMorto = false;
let fatorCastelo=0, countAviso = 0;
let terminafase1,chefe01,flagTransicao = false;
let final, flagCreditos=false;

let cenaAtual='telaInicial';
let cenas;
let jogo, telaInicial,intro,instrucoes;
let botaoGerenciador;
let showStart=false,pressionouStart=false;
let flagGameOver=false;
let tocamusica = true;

//INIMIGOS
const inimigos = [];
let imagemInimigo = [];
let numInimigos=7;
let varYInimigos = [30,0.4,30,30,30,0,0];
let fatorInim = [3,0.75,1.5,1,0.4,1.7,1.7];
let velocqInim = [3,3,2,2,4,2,6];
const numSpriteInim = [
  [16,1,16], [3,1,3], [4,1,4], [4,1,4], [4,1,4], [1,7,7], [1,7,7]
];
let inimTipo = ['ghoul', 'morcego', 'caveira', 'gotarosa','ghost','boss1','boss1'];

//FIGURANTES
let figurantes = [];
let imagemFigurante = [];
let numFigurantes = 2;
let tipoFig = ['borboleta','macaco'];
let varYFig = [0.5,0.6];
let fatorFig = [1,3];
let velocqFig = [1,2];
const numSpriteFig = [
  [4,4,16],[10,1,10]
];//borboleta,macaco

//PERSONAGEM
let personagem = [];
let imagemPersonagem = [];
let imagemPersonagemG = [];
let imagemPersonagemF = [];
let numPers = 5;
let xPers = [0,0,0.5,0,0];
let varYPers = [30,30,0.4,30,30];
let fatorPers = [2,2,2,2,2];
let velocqPers = [2,2,10,2,6];
const numSpritePers = [
  [6,1,6],[3,1,3],[6,1,6],[6,1,6],[1,6,6]
];//correndo,doublejump,parado

//ITENS
let item = [];
let imagemItem = [];
let numItem = 1;
let varYItem = [300];
let fatorItem = [0.1];
let velocqItem = [2];
const numSpriteItem = [
  [6,1,6],
];
const itemTipo = ['pocaoVerm'];





//CENARIO
let cenario = [];
let imagemCenario = [];
let velCenario = [2,4,6,8,15];
let velVertC = [2,5,10,15,0]
//let velCenario = [2,4,6,8,10];
//let velCenario = [0.5,0.4,0.2,1,1,1,1,1,1,1,3,12];
let imagemCastelo,castelo;

let vida, vidaBoss;
let fita;

//DEMAIS IMAGENS
let imgGameOver;
let imagemTI;
let fonteTI,fonteTxt;
let imagemVida,imagemVidaBoss;
//SONS
let backSound, jumpSound, goverSound, introSound, damageSound;

let cena = 0, veltxt=0;
let txt1a, txt1,txtaux,txtaux2,tamcx1,txtcount=0,frmcount=0;
let txtalfa=0,txtalfax=1;

let persAtual=0;
let pontuacao;

let delayIn = [100,100,100];
let inimTela = false;
let qualInim;
let fps =30;
let framecount=0;</script>
    <script>function preload(){
  //CENARIO
  imagemCenario[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/9ed061ad-55d3-4f04-913e-fea7a8402db7.png');
  imagemCenario[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/2909fcdc-c59b-4210-b2bc-ad8ab6bb1053.png');
  imagemCenario[2] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/2a04389e-3042-465e-90cf-d4ea8de29292.png');
  imagemCenario[3] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/7ec7d6d3-542c-4916-a5be-9500199691e4.png');
  imagemCenario[4] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/c48dcd2e-308d-43ec-8ab0-7c86f83b1853.png');
  /*
  imagemCenario[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/6bb9b2b4-c33e-4de8-a818-4e9354f8cde8.png');
  imagemCenario[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/f28480fb-bd0d-4083-8eeb-303fc82707aa.png');
  imagemCenario[2] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/2e9bd66e-b300-49a6-b5f0-bb857059f198.png');
  imagemCenario[3] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/9045cd16-4763-49ee-b699-c434a4b37eb3.png');
  imagemCenario[4] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/f38ab6c4-8fc0-43c2-a1db-512f650ec65a.png');*/
  /*
  imagemCenario[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/59552192-674d-4448-9b14-788d2f6c7e05.png');
  imagemCenario[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/dff984a3-c94b-433a-892b-45618cba298f.png');
  imagemCenario[2] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/430862cb-c2c1-4e66-93c6-49677fec6344.png');
  imagemCenario[3] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/0894d91e-5e4a-4cb6-9fe6-aca419d834ef.png');
  imagemCenario[4] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/14861a88-f1ef-4d39-b509-3dc4aed747f8.png');     
  imagemCenario[5] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/d23ea99a-883a-493e-97fb-3dbf354241c9.png');
  imagemCenario[6] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/0664b6da-22db-4562-ac46-0910ab7ffe2f.png');
  imagemCenario[7] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/f7c6a777-c869-4481-ac81-1fffc25ae6e7.png');
  imagemCenario[8] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/7ba01db2-7156-4672-b1ee-ebbde5eb38da.png');
  imagemCenario[9] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/cc747548-4aa8-440e-86a6-0506485d63f4.png');
  imagemCenario[10] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/02b46685-8af6-41cb-8acf-c1f470bba693.png');
  imagemCenario[11] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/176360dc-74e1-4a2f-80f4-9799bb93cca8.png');
  */
  /*
  imagemCenario[0] = loadImage('imagens/cenario/cidade/far-buildings.png');
  imagemCenario[1] = loadImage('imagens/cenario/cidade/back-buildings.png');
  imagemCenario[2] = loadImage('imagens/cenario/cidade/foreground.png');*/
  
  //PERSONAGEM
  imagemPersonagem[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/e776741d-1dd1-4012-a01e-dd36064c8d19.png');
  imagemPersonagem[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/81032547-e2b6-4f60-a297-eb0fba5c8caf.png');
  imagemPersonagem[2] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/c65b7723-1c1b-4851-a327-67e844404808.png');
  imagemPersonagem[3] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/47bca007-08ca-460f-afa6-a7c14a166d6e.png');
  imagemPersonagem[4] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/0111a8c4-084c-4d8d-aca7-bfeb5c0b6588.png');
  //imagemPersonagemG[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/e776741d-1dd1-4012-a01e-dd36064c8d19.png');
  //imagemPersonagemG[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/37904428-843e-4128-a30d-f61e836bdfe4.png');
  imagemPersonagemF[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/b277611e-448a-4cb3-a081-6564ffdc2127.png');
  imagemPersonagemF[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/51f6b007-a44b-4b66-85d4-58ea7c784964.png');
  imagemPersonagemF[2] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/51f6b007-a44b-4b66-85d4-58ea7c784964.png');
  imagemPersonagemF[3] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/51f6b007-a44b-4b66-85d4-58ea7c784964.png');
  imagemPersonagemF[4] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/2bc14154-93fd-4fe1-b4ff-7cd718859cff.png');

  
  //INIMIGOS
  imagemInimigo[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/7cce8239-53b3-4eab-bd6d-684fa023240a.png');
  imagemInimigo[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/94ea2876-4d95-4ec7-972e-3d381f51c618.png');
  imagemInimigo[2] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/080c2380-9627-4f36-9a3a-cf1455f2ee89.png');
  imagemInimigo[3] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/91d8d9ae-59a5-46b0-ac80-fbf181c6ff99.png');
  imagemInimigo[4] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/6caeff91-4c96-4fcc-b7d9-a2dd4d768b08.png');
  imagemInimigo[5] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/837953b3-439d-429d-9797-086374d1faa7.png');
  imagemInimigo[6] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/cd17a6fe-6c97-450d-ac20-bff67b0b1237.png');
  
  //FIGURANTES 
  imagemFigurante[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/b2a27bf2-f62b-485c-bdff-5384becc6b4c.png');
  imagemFigurante[1] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/3b589cfb-2de1-4b79-abf5-a95576d01a4d.png');
  //ITENS
  imagemItem[0] = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/556cfbe3-15f5-4a1d-b886-96b850e7aaa3.png');
  
  imagemVida = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/df76acd5-5da1-4430-848f-a79c8138c5d4.png');
  imagemVidaBoss = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/df76acd5-5da1-4430-848f-a79c8138c5d4.png');
  
  imgGameOver = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/143dda26-7966-4d0b-947d-9683484bd2fc.png');
  imagemTI = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/57b60933-5054-463d-88f3-3c73d3b38158.png');
  imagemCastelo = loadImage('https://assets.editor.p5js.org/5eef84d5229682002437128c/9ac75418-5eca-40c4-80f2-217b844c3f44.png');
  
  
  //FONTES
  fonteTI = loadFont('https://assets.editor.p5js.org/5eef84d5229682002437128c/5741569e-63a8-4c99-8376-8d3f9ec22e3b.otf');
  fonteTxt = loadFont('https://assets.editor.p5js.org/5eef84d5229682002437128c/ed92189e-ac25-4c98-90b0-16b3db42ed9a.ttf');
  //fonteTxt = loadFont('https://assets.editor.p5js.org/5eef84d5229682002437128c/2671651f-d801-4dd6-b435-dd87ffdd1fd8.ttf');
  //fonteTxt = loadFont('https://assets.editor.p5js.org/5eef84d5229682002437128c/0eff8b37-cc4d-45f9-9358-7c1980af94c7.ttf');
  
  
  //SONS
  introSound = loadSound('https://assets.editor.p5js.org/5eef84d5229682002437128c/8126457d-b5c0-415e-8418-8d5c48a77370.mp3');
  //introSound = loadSound('https://assets.editor.p5js.org/5edaa7c4b33bc40020429237/11b7fd21-fdd5-44b7-90a7-1c9171873069.mp3');
  backSound = loadSound('https://assets.editor.p5js.org/5eef84d5229682002437128c/28bb26bd-21f7-4f40-8184-9881d5263571.mp3');  
  jumpSound = loadSound('https://assets.editor.p5js.org/5eef84d5229682002437128c/e96e12ac-1aa0-46de-9a15-4f45592b2fb4.mp3');
  //goverSound = loadSound('https://assets.editor.p5js.org/5eef84d5229682002437128c/d8e1a6f9-5e8c-489c-a450-18e04ba3396c.mp3');
  damageSound = loadSound("https://assets.editor.p5js.org/5eef84d5229682002437128c/7d736e03-68db-4961-927f-03ccc8c4bbb5.wav");
  //goverSound = loadSound("https://assets.editor.p5js.org/5eef84d5229682002437128c/8372ac47-0b22-484d-bbb8-c9445846e1d5.wav");
  goverSound = loadSound("https://assets.editor.p5js.org/5eef84d5229682002437128c/371de6fe-6805-4927-90cb-0a3f7fe77401.wav");
  //JSON
  fita = loadJSON('/sketches/e-Dm4v4YP/assets/scripts/jogo/fita.json');
}</script>
    <script>class Vida {
  constructor(total, inicial, imagem) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
    this.imagem = imagem
    this.tipo = 'pers'
  }
  draw() {
    if (this.tipo == 'pers') {
      for (let i = 0; i < this.vidas; i++) {
        const margem = i * 10;
        const posicao = this.xInicial * (i + 1);
        image(this.imagem, posicao + margem, this.y, this.largura, this.altura);
      }
    }else if(this.tipo=='boss'){
      for (let i = 0; i < this.vidas; i++) {
        const margem = this.largura+10;
        const posicao = this.xInicial;
        image(this.imagem, posicao - (i+1)*margem, this.y, this.largura, this.altura);
      }
    }
  }
  ganhavida() {
    if (this.vidas < this.inicial) this.vidas++;
  }
  perdevida() {
    this.vidas--;
    damageSound.play();
  }
}</script>
    <script>function criaMatrizSprite(numS,larSp,altSp){
  //cria a matriz de sprites
  //numS = número de sprites (linha e coluna) e número de sprites utilizáveis (no spritesheet pode conter quadrados em branco, como no caso do troll)
  let matriz = Array(numS[2]); 
    let aux = 0;
    for(let i=0;i<numS[1];i++){
      for(let j=0;j<numS[0];j++){ 
       matriz[aux] = [j*larSp,i*altSp];
        //console.log(matriz[aux] + ' ' + matriz.length);
        aux++;
        if(aux>=numS[2]) {
          j = numS[0];
          i = numS[1];
        }
      }
    }
  return(matriz);
}

function ImprimeMatriz(matriz){
  for(let i=0;i<matriz.length;i++) console.log(matriz[i])
}

function GameOver(imgGOver){
  const lar_go = 0.3, alt_go = 0.3;
  const corr = 0.02;
  let lar_ret,alt_ret;
  image(imgGOver,0.25*width,0.1*height, 0.5*width,0.1*height);
  
  lar_ret = (lar_go-corr);
  alt_ret = (alt_go-corr);
  fill(200,50,50,75);
  rect(lar_ret*width,alt_ret*height,(1 - 2*lar_ret)*width,5*30);
       //(1-2*alt_ret)*height);
  
  textSize(18);
  fill(255);
  textAlign(CENTER);
  text('Oh não, Hewie foi pego pelos malignos.\n \n Hewie não tem mais energia para continuar. \n A floresta foi dominada pelas trevas. \n A nação foi dominada pelas trevas.\nIsso é um Adeus...',lar_go*width,alt_go*height,(1-2*lar_go)*width,(1-2*alt_go)*height);
  
  fill(128 + sin(frameCount * 0.1) * 128);
  auxx = "Pressione Enter para continuar"
  textSize(22);
  textAlign(CENTER);
  fill(255, 255, 255);
  text(auxx, width * 0.5, height * 0.8)
  text("Pressione R para recarregar o jogo", width*0.5, height*0.9);
}

function Recomeca(){
  pontuacao.pontos=0;
  //personagem.x = -personagem.largura;
  personagem.y = height - personagem.altura - personagem.variacaoY;
  inimigos[qualInim].x = -10*inimigos[qualInim].largura;
  showStart=false;
  backSound.loop();
}

function GeraDimMatriz(imagem,numSprites){
  let dim = [imagem.width / numSprites[0], imagem.height / numSprites[1]];
  let matriz = criaMatrizSprite(numSprites, dim[0], dim[1]);
  //console.log(dim);
  return([dim,matriz]);
}

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

</script>
    <script>//JOGO.JS
class Jogo {
  constructor() {
    this.indice = 0;
  }

  setup() {
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial, imagemVida);
    //cenario
    for (let i = 0; i < imagemCenario.length; i++) {
      cenario[i] = new Cenario(imagemCenario[i], velCenario[i], velVertC[i]);
    }
    //inimigo
    for (let i = 0; i < numInimigos; i++) {
      let aux1 = GeraDimMatriz(imagemInimigo[i], numSpriteInim[i])
      inimigos[i] = new Inimigo(aux1[1], imagemInimigo[i], width, varYInimigos[i], aux1[0][0] * fatorInim[i], aux1[0][1] * fatorInim[i], aux1[0][0], aux1[0][1], velocqInim[i], 1, delayIn[2], inimTipo[i]);
    }
    //figurante
    for (let i = 0; i < numFigurantes; i++) {
      let aux1 = GeraDimMatriz(imagemFigurante[i], numSpriteFig[i])
      figurantes[i] = new Figurante(aux1[1], imagemFigurante[i], width, varYFig[i], aux1[0][0] * fatorFig[i], aux1[0][1] * fatorFig[i], aux1[0][0], aux1[0][1], velocqFig[i], tipoFig[i]);
    }
    //personagem
    for (let i = 0; i < numPers; i++) {
      let aux1 = GeraDimMatriz(imagemPersonagem[i], numSpritePers[i])
      personagem[i] = new Personagem(aux1[1], imagemPersonagem[i], xPers[i], varYPers[i], aux1[0][0] * fatorPers[i], aux1[0][1] * fatorPers[i], aux1[0][0], aux1[0][1], velocqPers[i]);
    }
    //itens
    for (let i = 0; i < numItem; i++) {
      let aux1 = GeraDimMatriz(imagemItem[i], numSpriteItem[i])
      item[i] = new Item(aux1[1], imagemItem[i], width, varYItem[i], aux1[0][0] * fatorItem[i], aux1[0][1] * fatorItem[i], aux1[0][0], aux1[0][1], velocqItem[i], 10, itemTipo[i]);
    }
    //imagemPersonagemG[0].filter(GRAY, 0.5);
    //imagemPersonagemG[1].filter(GRAY, 0.5);

  }
  //////////////////////////////////////////////////////////
  keypressed(key) {
    if (cenaAtual == 'jogo' || cenaAtual == 'chefe01') {
      if (key == 'ArrowUp') {
        if (personagem[0].pula()) {
          jumpSound.play();
          //for (let i = 0; i < 3; i++) cenario[i].pula();
        }
      }
      if (keyCode == DOWN_ARROW) {
        if (personagem[0].numPulo == 0) {
          personagem[0].cambalhota();
        }
      }
      if (cenaAtual == 'chefe01') {
        if (key == 'a' || key == 'A') personagem[0].ataca();
      }

      if (flagGameOver == true) {
        if (keyCode == ENTER) {
          flagGameOver = false;
          //cenaAtual = 'telaInicial';
          Recomeca();
          loop();
          tocamusica = true;
          vida.vidas = vida.total;
        } else if (key == 'r' || key == 'R') {
          window.location.reload();
        }
      }
    }
    if (cenaAtual == 'final') {
      if (key == 'r' || key == 'R') {
        window.location.reload();
      }
      if (keyCode==ENTER){
        flagCreditos=true;
      }else if(keyCode = BACKSPACE){
        flagCreditos=false;
      }
    }
  }
  ////////////////////////////////////////////////////////
  draw() {
    //background(255);
    //personagem[0].exibe();
    for (let i = 0; i < imagemCenario.length - 2; i++) {
      cenario[i].exibe();
      cenario[i].move();
    }
    figurantes[1].exibe();
    figurantes[1].move();
    cenario[3].exibe()
    cenario[3].move()
    vida.draw();

    if (personagem[0].invencivel == true || personagem[1].invencivel == true) {
      personagem[0].imagem.filter(INVERT);
      personagem[1].imagem.filter(INVERT);
      flagBlink++;
    } else {
      if (flagBlink % 2 == 1) {
        personagem[0].imagem.filter(INVERT);
        personagem[1].imagem.filter(INVERT);
        flagBlink = 0;
      }
    }
    if (personagem[0].numPulo < 2) personagem[persAtual].exibe();
    personagem[0].aplicaGravidade();
    if (keyIsDown(RIGHT_ARROW)) {
      personagem[0].anda('direita');
      personagem[1].anda('direita');
    }
    if (keyIsDown(LEFT_ARROW)) {
      personagem[0].anda('esquerda');
      personagem[1].anda('esquerda');
    }

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    if (inimTela == false) {
      qualInim = int(random(0, inimigos.length - 2));
      inimigos[qualInim].velocidade = parseInt(random(15, 30));
      if (inimigos[qualInim].tipo == 'morcego') inimigos[qualInim].y = random(0.3, 0.7) * height;
    }

    inimigos[qualInim].exibe();
    inimigos[qualInim].move()
    inimTela = true;

    if (inimigos[qualInim].isShow == false) {
      inimigos[qualInim].isShow = true;
      inimTela = false;
    }

    cenario[4].exibe()
    cenario[4].move()

    if (pontuacao.pontos > 300) cenaAtual = 'chefe01';
    if (personagem[persAtual].estaColidindo(inimigos[qualInim])) {
      //console.log('colidiu');
      vida.perdevida();
      personagem[persAtual].tornarInvencivel();

      if (vida.vidas == 0) {
        noLoop();
        GameOver(imgGameOver);
        flagGameOver = true;

        backSound.stop();
        goverSound.play();
      }
    }

  }

}</script>
    <script>class TelaInicial {
  constructor() {}
  
  setup(){
    personagem[2].x = (width-personagem[2].largura)*0.5;
  }
  
  draw() {
    //console.log('Tela Inicial');
    this._imagemDeFundo();
    //background(100,100,100)
    this._texto();
    personagem[2].exibe();
    this._botao();
    //console.log(framecount);

  }
  _imagemDeFundo() {
    image(imagemTI, 0, 0, width, height);
  }

  _texto() {
    //fill(243,235,232)
    //fill(255)
    //fill('#51896d')
    fill('#467a60')
    textFont(fonteTI);
    textAlign(CENTER);
    textSize(60);
    text('As aventuras dE', width / 2, height * 0.15);
    textSize(70);
    text('HEWIE', width / 2, height * 0.25);
    textSize(24);
    textFont('Georgia');

    /*
    fill(70, 122, 96, 200)

    rect(0.028 * width, 0.09 * height, 0.32 * width, 16 * textWidth('ee'));

    rect(0.66 * width, 0.09 * height, 0.32 * width, 16 * textWidth('ee'));

    //fill('#467a60')
    fill(255)
    
    text('Hewie é um guerreiro mago. Faz parte de um clã que protege a nação de seres de outro mundo. Esses seres se materializam aqui em forma de fantasmas ou possuem corpos materiais, incorporando sua energia maligna em cadáveres, esqueletos e até mesmo em animais. São chamados de \'malignos\'.',0.03*width,0.13*height,0.3*width);
        text('Após o guerreiro sair em uma missão para eliminar um aglomerado de goblins, os malignos tomaram conta de sua nação. No caminho de volta, Hewie se depara com seres querendo o eliminar. "Uma lástima ter usado toda a mana nos goblins", pensou nosso guerreiro. Sem poder encantar a espada, ela se torna inútil contra os malignos. Sua única opção é chegar ao castelo fugindo dos inimigos. Será que ele irá conseguir?', 0.67*width,0.1*height,0.3*width);
        */
  }

  _botao() {
    botaoGerenciador.y = height * 0.7;
    botaoGerenciador.draw();
  }

}</script>
    <script>class Intro {
  constructor() {}

  setup() {
    atxt1 = split("Hewie é um guerreiro mago que faz parte de um clã que protege a nação de seres de outro mundo.\nEsses seres se materializam em forma de fantasmas ou possuem corpos materiais, incorporando sua energia maligna em cadáveres, esqueletos e até mesmo em animais.\nSão chamados de 'malignos'.\nApós o guerreiro sair em uma missão para eliminar um aglomerado de goblins, os malignos tomaram conta de sua nação.\nNo caminho de volta, Hewie se depara com seres querendo o eliminar.\n \"Uma lástima ter usado toda a mana nos goblins\", pensou nosso guerreiro, \"sem poder encantar a espada, ela se torna inútil contra os malignos\".\n Sua única opção é chegar ao castelo fugindo dos inimigos.\n Será que ele irá conseguir?", '\n');
  }

  draw() {
    textFont(fonteTxt);

    //console.log('intro')
    this._imagemDeFundo();
    fill(70, 122, 96, 200)
    //rect(0.2*width,0.1*height,0.6*width,0.4*height);
    textSize(22);
    textAlign(CENTER);

  txtalfa += 5 * txtalfax;
    if (flagFinalIntro == false) {
      if (txtalfa > 255) {
        flagt++;
        let numSec = 3;
        if (atxt1[indtxt].length > 100) numSec = 6;
        if (flagt % (fps * numSec) == 0) {
          txtalfa = 255;
          txtalfax = -1;
        }
      } else if (txtalfa < 0) {
        txtalfax = 1;
        flagt = 0;
        indtxt++;
      }
    fill(0, 0, 0, txtalfa)
    }else{
      //fill(0, 0, 0, txtalfa)
      fill(128 + sin(frameCount * 0.1) * 128);
      text("Pressione ENTER para continuar",0.5*width,0.8*height);
      fill(0, 0, 0)
      if(txtalfa>255){txtalfax = -1;
      }else if(txtalfa<0){txtalfax=1};
    }
    if(indtxt==atxt1.length-1 && flagFinalIntro==false) {
      flagFinalIntro=true;
      flagt=0;
    }
    text(atxt1[indtxt], 0.2 * width, 0.4 * height, 0.6 * width, 0.4 * height)
    if(indtxt>0) {
      fill(0);
      textSize(16);
      text('Pressione Barra de espaço para pular Introdução', 0.5*width,0.95*height);
    }
    if(keyIsPressed && indtxt>0) this._alteraCena(keyCode,key);

    if(flagFinalIntro==true){
      flagt++;
      if(flagt>(fps*3)){
        if(keyIsPressed) this._alteraCena(keyCode,key);
      }
    }
    //textSize(textAscent())
    //fill(128 + sin(frameCount*0.1) * 128);
  }

  _imagemDeFundo() {
    background('#89d2c3');
    //background('#7ecea6');
    //background(70, 122, 96);
  }
  _alteraCena(tecla,t2){
    if(tecla == ENTER || t2 == " ") {
      cenaAtual = 'instrucoes';
      flagt=0;
    }
  }

}</script>
    <script>class Instrucoes {
  constructor() {}

  draw() {
    textFont(fonteTxt);

    this._imagemDeFundo();
    //vida.draw();
    for (let i = 1; i <= 3; i++) image(imagemVida, 20 * i + 10 * (i - 1), 20, 25, 25);

    textSize(22);
    textAlign(LEFT);
    fill(0);
    text('\: Vidas', 120, 40)
    textAlign(RIGHT);
    text('Pontos: ' + parseInt(0), width - 30, 40);

    textSize(20);
    textAlign(CENTER);
    text("INSTRUÇÕES", width * 0.5, height * 0.2);
    //textAlign(LEFT);
    textLeading(35);
    text("Pulo: seta para cima. \nPulo duplo: duas vezes seta para cima.\n Mover para frente: seta direita.\n Mover para trás: seta esquerda. \nAbaixar: seta para baixo.\nDesvie dos inimigos para chegar ao castelo.\n \n Enfrente o Boss ao ganhar 300 pontos.", width * 0.5, height * 0.3);

    fill(128 + sin(frameCount * 0.1) * 128);
    text("Presssione ENTER para continuar", 0.5 * width, 0.9 * height);

    flagt++;
    if (flagt > (3 * fps)) {
      if (keyIsPressed) this._alteraCena(keyCode);
    }
  }
  _imagemDeFundo() {
    background('#89d2c3');

  }

  _alteraCena(tecla) {
    if (tecla == ENTER) {
      cenaAtual = 'intro2';
      flagt = 0;
    }
  }

}</script>
    <script>class Intro2 {
  constructor() {}

  setup() {
    txt1a = 'Hewie está voltando para o castelo, mas... \nOh não, está tudo sombrio! \nEle olha ao seu redor e não vê felicidade. \nMas isso não abalará nosso guerreiro! \nEle está decidido! \nHEWIE SALVARÁ SUA NAÇÃO!!!';

    textSize(24);
    txt1 = split(txt1a, "\n")
    tamcx1 = textWidth(txt1[0]) * 1.1;
    //txt1 = split(txt1a,"");
    txtaux = txt1[txtcount];
  }

  draw() {
    let auxx, auxx2, auxtx;

    for (let i = 0; i < imagemCenario.length - 1; i++) cenario[i].exibe()
    personagem[0].exibe();
    personagem[0].move(2*personagem[0].largura,'x');

    cenario[4].exibe()
    //textFont('Helvetica');
    textFont(fonteTxt);
    fill(200, 50, 50, 75);
    textSize(20);
    rect((width - tamcx1) * 0.5, 0.04 * height, tamcx1, 8 * textWidth('ee'));

    textAlign(CENTER);
    fill(255)

    if (txtcount > 0) text(txtaux2, width * 0.5, height * 0.09);

    if (showStart == false) {
      txtalfa += 5;
      fill(255, 255, 255, txtalfa)
      text(txtaux, width * 0.5, height * 0.09);
    }

    if (frmcount % 60 == 0 && showStart == false) {
      if (txtcount < txt1.length) {
        txtcount++;
        txtalfa = 0;
      } else {
        showStart = true;
        txtalfa = 0;
      }
      txtaux2 = txtaux;
      txtaux = join([txtaux, '\n', txt1[txtcount]], "")
    }
    if (showStart == true) {
      textSize(30);
      textAlign(CENTER);
      fill(128 + sin(frameCount * 0.1) * 128);
      text("Presssione ENTER para continuar", 0.5 * width, 0.8 * height);

      fill(255)
      textSize(20);
    }
    frmcount++;
    flagt++;
    if (flagt > (3 * fps)) {
      if (keyIsPressed) this._alteraCena(keyCode);
    }
  }

  _alteraCena(tecla) {
    if (tecla == ENTER) {
      cenaAtual = 'jogo';
      flagt = 0;
      introSound.stop();
      backSound.loop();
    }
  }

}</script>
    <script>class Final {
  constructor() {}

  setup() {
    atxt2 = "Nosso guerreiro chegou ao castelo!!!\nMas... ele está dominado pelas trevas!\nHá malignos por todos os lados...\nSerá que Hewie conseguirá tomar o castelo de volta?\nNosso guerreiro é corajoso, acredito nele.\n\n E você?"

  }


  draw() {
    this._imagemDeFundo();
    fill(255)
    textFont(fonteTxt);
    textAlign(CENTER);
    textSize(20)
    textLeading(30);
    if(flagCreditos==false){
      text(atxt2, width * 0.5, height * 0.15)
    }else{
      text("\"getting hit damage scream\" by dersuperanton freesound.org\n \"game over sfx and voice\" by landlucky freesound.org \n Cenário \"Demon woods\": artwork created by David Marah\n Fonte: \"Metamorphous\" by James Grieshaber \n Música: \"Life_After_Death\" by DJ Freedem\n Música: \"Moskito\" by Quincas Moreira",width*0.5,height*0.15)
    }

    text("Essa é uma versão teste do jogo.\nObrigado por jogar!!!", width * 0.5, height * 0.6)

    textSize(16)
    fill(150)
    if(flagCreditos==false) {text("Jogo criado por Douglas Mateus durante o\n curso de ImersãoGameDev da Alura.\n \n Pressione ENTER para créditos.", width * 0.5, height * 0.75)
                            }else {text("Jogo criado por Douglas Mateus durante o\n curso de ImersãoGameDev da Alura.\n \n Pressione BACKSPACE para história.", width * 0.5, height * 0.75)
                                  }
    text("Para jogar novamente, pressione R", width * 0.5, height * 0.90)
  }
  _imagemDeFundo() {
    background(0)
    //let c1 = color('#a64244');
    //let c2 = color(40);
    //setGradient(c1, c2);
  }
}</script>
    <script>class Chefe01 {
  constructor() {}

  setup() {
    inimigos[5].x = width // * 0.7;
    inimigos[5].xinicial = width * 0.7;
    inimigos[5].velocidade = 20;

    imagemVidaBoss.filter(THRESHOLD)
    vidaBoss = new Vida(3, 3, imagemVidaBoss);
    vidaBoss.xInicial = width;
    vidaBoss.y = 60;
    vidaBoss.tipo = 'boss';
  }

  draw() {
    for (let i = 0; i < imagemCenario.length - 2; i++) {
      cenario[i].exibe();
      cenario[i].move();
    }
    figurantes[1].exibe();
    figurantes[1].move();
    cenario[3].exibe()
    cenario[3].move()
    vida.draw();
    vidaBoss.draw();

    if (countAviso < (fps * 5)) {
      fill(128 + sin(frameCount * 0.1) * 128, 0, 0);
      textAlign(CENTER);
      text("PREPARE-SE PARA O BOSS!!!\n Pegue a poção para encantar a espada e poder atacar.\n Pressione A para atacar o boss.", width * 0.5, height * 0.3)
      countAviso++;
    }


    if (personagem[0].invencivel == true || personagem[1].invencivel == true) {
      personagem[0].imagem.filter(INVERT);
      personagem[1].imagem.filter(INVERT);
      personagem[4].imagem.filter(INVERT);
      flagBlink++;
    } else {
      if (flagBlink % 2 == 1) {
        personagem[0].imagem.filter(INVERT);
        personagem[1].imagem.filter(INVERT);
        personagem[4].imagem.filter(INVERT);
        flagBlink = 0;
      }
    }
    if (personagem[0].numPulo < 2) personagem[persAtual].exibe();
    personagem[0].aplicaGravidade();

    if (keyIsDown(RIGHT_ARROW)) {
      personagem[0].anda('direita');
      personagem[1].anda('direita');
    }
    if (keyIsDown(LEFT_ARROW)) {
      personagem[0].anda('esquerda');
      personagem[1].anda('esquerda');
    }
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    if (inimigos[5].invencivel == true) {
      inimigos[5].imagem.filter(INVERT);
      flagBlinkBoss++;
    } else {
      if (flagBlinkBoss % 2 == 1) {
        inimigos[5].imagem.filter(INVERT);
        flagBlinkBoss = 0;
      }
    }

    if (flagBossMorto == false) {
      inimigos[5].exibe();
    } else {
      inimigos[5].morre();
      setTimeout(() => {
        cenaAtual = 'terminafase1';
      }, 4000);
    }

    //inimTela = true;

    if (item[0].isShow == true) {
      item[0].exibe();
      item[0].move();
    } else {
      if (frameCount % (4 * fps) == 0 && flagPersFogo == false) item[0].isShow = true;
    }

    if (personagem[persAtual].estaColidindo(item[0])) {
      //console.log('colidiu pocao')
      item[0].reset();
      flagPersFogo = true;
      personagem[0].imagem = imagemPersonagemF[0]
      personagem[1].imagem = imagemPersonagemF[1]
      personagem[4].imagem = imagemPersonagemF[4]
      setTimeout(() => {
        flagPersFogo = false;
        personagem[0].imagem = imagemPersonagem[0]
        personagem[1].imagem = imagemPersonagem[1]
        personagem[4].imagem = imagemPersonagem[4]
      }, 4000);
    }

    cenario[4].exibe()
    cenario[4].move()

    if (frameCount % (fps * 5) == 0 && flagBossAtt == false && flagBossMorto == false) {
      flagBossAtt = true;
      //console.log('vai atacar' + flagBossAtt);
    }
    if (flagBossAtt == true) {
      inimigos[5].moveBoss();
    }

    if (flagBossMorto == false) {
      if (personagem[persAtual].estaColidindo(inimigos[5])) {
        if (flagPersFogo == true) {
          if (persAtual == 4 && inimigos[5].invencivel == false) {
            console.log("ACERTOU BOSS");
            vidaBoss.perdevida();
            if (vidaBoss.vidas == 0) flagBossMorto = true
            inimigos[5].invencivel = true;
            setTimeout(() => {
              inimigos[5].invencivel = false;
            }, 4000);
          }
        } else {
          console.log('colidiu');
          vida.perdevida();
          personagem[persAtual].tornarInvencivel();

          if (vida.vidas == 0) {
            noLoop();
            GameOver(imgGameOver);
            flagGameOver = true;

            backSound.stop();
            goverSound.play();
          }
        }
      }
    }
  }

}</script>
    <script>class TerminaFase1 {
  constructor() {}

  draw() {
    for (let i = 0; i < imagemCenario.length - 2; i++) {
      cenario[i].exibe();
      cenario[i].move();
    }
    figurantes[1].exibe();
    figurantes[1].move();
    cenario[3].exibe()
    cenario[3].move()

    personagem[0].exibe();
    personagem[0].aplicaGravidade();

    cenario[4].exibe()
    cenario[4].move()

    personagem[0].x += 10;
    if (personagem[0].x > (width + personagem[0].largura)) flagTransicao=true;
    
    if (flagTransicao) {
      cenaAtual = 'castelo'
      personagem[0].x = -2 * personagem[0].largura;
      personagem[0].y = height - personagem[0].altura
      personagem[3].x = 0.5 * (width - personagem[0].largura);
      personagem[3].y = height - personagem[0].altura;
      flagAnima02=0;
      personagem[0].velocidade=5;
    }

  }

}</script>
    <script>class Castelo {
  constructor() {}

  setup() {
    imagemCastelo.filter(THRESHOLD);
  }

  draw() {
    if (flagAnima02 == 0) {
      this._imagemDeFundo(1);

      personagem[0].exibe();
      personagem[0].move(0.5 * (width - personagem[0].largura), 'x');
    } else if (flagAnima02 == 1) {
      this._imagemDeFundo(1 + fatorCastelo);
      personagem[3].exibe()
      fatorCastelo += 0.1;
      if(fatorCastelo>10) {
        cenaAtual='final';
        fatorCastelo=10;
      }
    }

  }
  _imagemDeFundo(fator) {
    let c1 = color('#a64244');
    let c2 = color(40);
    setGradient(c1, c2);
    //background('#a64244')
    let yimg = -0.3 * height - (fator - 1) * height * 1.3
    let ximg = -(fator - 1) * width * 0.5
    image(imagemCastelo, ximg, yimg, width * fator, 1.3 * height * fator);
  }
}</script>
    
    <script>class BotaoGerenciador{
  constructor(texto,x,y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botao-tela-inicial');
  }
  draw(){
    this.botao.position(this.x,this.y);
    this.botao.center('horizontal');
  }
  _alteraCena(){
    this.botao.remove();
    cenaAtual = 'intro'
  }
}</script>
    <script>class Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite,velocquadro){
    this.matriz = matriz;
    this.imagem = imagem;
    this.x = x;
    this.variacaoY = variacaoY;
    if(this.variacaoY<1) this.variacaoY = height*variacaoY;
    this.y = height - altura - this.variacaoY;
    this.altura = altura;
    this.largura = largura;
    this.alturaSprite = alturaSprite;
    this.larguraSprite = larguraSprite;
    this.velocquadro = velocquadro;
    this.frameAtual = 0;
  }
  exibe(){
    image(this.imagem,this.x,this.y, this.largura,this.altura, this.matriz[this.frameAtual][0],this.matriz[this.frameAtual][1], this.larguraSprite,this.alturaSprite);
    this.anima();
  }
  anima(){
    if(framecount%this.velocquadro==0) this.frameAtual++;
    if(this.frameAtual>this.matriz.length-1) this.frameAtual=0;
    
  }
}</script>
    <script>class Cenario {
  constructor(imagem, velocidade,velVert) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;

    this.velVert = velVert;
    this.gravidade = velVert/10;
    this.ybase = 0;
    this.y = this.ybase;


  }
  exibe() {
    image(this.imagem, this.x1, this.y, width, height);
    image(this.imagem, this.x2, this.y, width, height);
  }
  move() {
    this.x1 -= this.velocidade;
    this.x2 -= this.velocidade;
    if (this.x1 < -width) {
      this.x1 = 0;
      this.x2 = width;
    }
  }
  pula() {
    this.velVert = +10;
  }
  moveVert() {
    if (flagPulando == true) {
      this.y += this.velVert;
      this.velVert -= this.gravidade;

      if (this.y < this.ybase) {
        this.y = this.ybase;
        this.velVert=0;
      }
    }
  }
}</script>
    <script>class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocquadro) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocquadro);
    this.frameAtual = 0;
    this.gravidade = 3;
    this.velPulo = 0;
    //this.variacaoY = this.variacaoY;
    this.ybase = height - this.altura - this.variacaoY;
    this.y = this.ybase;
    this.numPulo = 0;
    this.velocidade = 5;
    this.invencivel = false;
    this.velocAndar = 10;
    this.velocY = 1;
  }

  pula() {
    flagPulando = true;
    if (this.numPulo < 2) {
      this.velPulo = -30;
      this.numPulo++;
      return (true);
    } else {
      return (false)
    }
    //console.log('velP:' + this.velPulo );
  }
  aplicaGravidade() {
    if (this.numPulo == 2) {
      personagem[1].x = personagem[0].x;
      personagem[1].y = personagem[0].y;
      personagem[1].exibe();
      persAtual = 1;
    }
    this.y += this.velPulo;
    this.velPulo += this.gravidade;

    //cenario[0].moveVert();
    //cenario[1].moveVert();
    //cenario[2].moveVert();

    if (this.y > this.ybase) {
      this.y = this.ybase;
      this.numPulo = 0;
      if(flagCamb==false && flagAtaque==false) persAtual = 0;
      //if(flagAtaque==false) persAtual = 0;
      flagPulando = false;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000);
  }

  estaColidindo(inimigo) {
    if (this.invencivel == true) return (false);
    let precisao = 0.7;
    //noFill();
    //rect(this.x,this.y,this.largura*precisao, this.altura*precisao)
    //rect(inimigo.x, inimigo.y,inimigo.largura, inimigo.altura)
    //circle(inimigo.x + inimigo.largura/2+15, inimigo.y + inimigo.altura/2, inimigo.largura*precisao);
    const colisao = collideRectCircle(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x + inimigo.largura / 2 + 15, inimigo.y + inimigo.altura / 2, inimigo.largura * precisao);

    return (colisao);
  }
  move(limite, direcao) {
    if (direcao == 'x') {
      this.x += this.velocidade
      if (this.x > limite) {
        this.velocidade = 0;
        this.frameAtual = 0;
        if (cenaAtual == 'castelo') flagAnima02 = 1;
      }
    } else if (direcao == 'y') {
      this.y += this.velocY;
      if (this.y > limite) {
        this.velocY = 0;
      }
    }
  }
  anda(direcao) {
    if (direcao == 'direita' && this.x < (0.5 * width)) {
      this.x += this.velocAndar;
    } else if (direcao == 'esquerda' && this.x > (0.05 * width)) {
      this.x -= this.velocAndar;
    }
  }
  cambalhota() {
    personagem[1].x = personagem[0].x;
    personagem[1].y = height - personagem[1].altura - personagem[1].variacaoY;
    personagem[1].exibe();
    persAtual = 1;
    flagCamb=true;
    setTimeout(() => {
      flagCamb = false
    }, 500);
  }
  
  ataca(){
    personagem[4].x = personagem[0].x;
    personagem[4].y = height - personagem[4].altura - personagem[4].variacaoY;
    personagem[4].exibe();
    persAtual = 4;
    flagAtaque=true;
    setTimeout(() => {
      flagAtaque = false,
      personagem[4].frameAtual=0
    }, 500);
  
  }

}</script>
    <script>class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocquadro, velocidade, delay, tipo) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocquadro);
    this.velocidade = velocidade;
    this.delay = delay;
    this.isShow = true;
    this.tipo = tipo;
    this.xinicial = x;
    this.invencivel = false;
  }

  move() {
    this.x -= this.velocidade;
    if (this.x < -this.largura - this.delay) {
      this.x = width;
      this.isShow = false;
    }
  }

  aparece() {
    this.x = width;
    this.isShow = false;
  }

  moveBoss() {
    if (flagBossMorto==true) return(true);
    this.x -= this.velocidade;
    if (this.x < -0.1 * this.largura) {
      this.velocidade *= -1;
      flagBossVolta = true
    }
    if (this.x > this.xinicial && flagBossVolta == true) {
      this.velocidade *= -1;
      this.x = this.xinicial;
      flagBossVolta = false
      flagBossAtt = false;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000);
  }
  
  morre(){
    inimigos[6].exibe();
    inimigos[6].x = inimigos[5].x
    inimigos[6].y = height - inimigos[6].altura
    
    if(inimigos[6].frameAtual>=inimigos[6].matriz.length-1) inimigos[6].frameAtual --;
  
  }
  

}</script>
    <script>class Figurante extends Animacao{
  constructor(matriz, imagem, x,variacaoY, largura,  altura, larguraSprite, alturaSprite,velocquadro,tipo){
  super(matriz, imagem, x,variacaoY, largura,  altura, larguraSprite, alturaSprite,velocquadro);
    this.y = variacaoY;
    if(this.y<1) this.y = height*variacaoY;
    this.velocidade = 6;
    this.tipo = tipo;
    if(this.tipo == 'borboleta') this.y = random(0.05*height,0.5*height);
  }
  
  move(){
    this.x -= this.velocidade;
    if(this.x<-this.largura) {
      if(this.tipo=='borboleta') {
        this.x = width+1.5*this.largura;
        this.y = random(0.05*height,0.5*height);
      }else if(this.tipo=='macaco'){
        this.x = 2*width;
      }else if(this.tipo=='pocao'){
        this.x = width+2*this.largura;
        this.y = random(0.5*height,0.8*height);
      }
    }
  }
  
}</script>
    <script>class Pontuacao{
  constructor(){
    this.pontos = 0;
  }
  exibe(){
    textAlign(RIGHT);
    fill('#fff')
    textSize(30);
    text('Pontos: ' + parseInt(this.pontos),width-30,50);
  }
  adicionarPonto(){
    this.pontos+= 0.2;
  }
  
  
}</script>
    <script>class Item extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocquadro, velocidade, tipo) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocquadro);
    this.velocidade = velocidade;
    this.tipo = tipo;
    this.isShow = true;
  }

  move() {
    this.x -= this.velocidade;
    if (this.x < -this.largura) {
      this.x = width;
      this.isShow = false;
    }
  }

  reset(){
    this.isShow = false;
    this.x = width
    pontuacao.pontos +=100
  }
}</script>

    <script>function setup() {
  createCanvas(windowWidth, windowHeight);  
  frameRate(fps);
  introSound.loop(); 
  
  botaoGerenciador = new BotaoGerenciador('INICIAR JOGO',width/2,height/2);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  intro = new Intro();
  instrucoes = new Instrucoes();
  intro2 = new Intro2();
  castelo = new Castelo();
  terminafase1 = new TerminaFase1();
  chefe01 = new Chefe01();
  final = new Final();
  
  jogo.setup();
  telaInicial.setup();
  intro.setup();
  intro2.setup();
  castelo.setup();
  chefe01.setup();
  final.setup();
  
  cenas = {
    telaInicial,
    jogo,
    intro,
    instrucoes,
    intro2,
    castelo,
    terminafase1,
    chefe01,
    final
  };
  
}

function keyPressed(){
  jogo.keypressed(key);
}


function draw(){
  framecount++;
  cenas[cenaAtual].draw();
  //borb.exibe();
  //borb.move();
}
</script>
  

</body></html>