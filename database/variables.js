//Variaveis que configuram a tela de Introdução do jogo
let text_intro;
let text_indice = 0;
let flagIntroIsEnding = false;
let flagTime = 0;
let txtalfa = 0, txtalfax = 1;

//Variaveis que configuram a tela de Introdução do Boss (fase 3)
let txt1, txtaux, txtaux2, tamcx1, txtcount = 0, frmcount = 0;
let showStart = false;

//Variavel que faz a contagem de tempo que um aviso fica na tela
let countWarning = 0;

//Variaveis Gerais
let fpsGame = 30;

//Variaveis que recebem os tipos de fontes externas
let fontPressStart2P;
let fontCinzelDecorative;
let fontMarcellusSC;
let fontHanaleiFill;
let font2;

//Variaveis que recebem os efeitos sonoros
let soundJump;
let soundMenu;
let soundGame;
let soundEletric;
let soundCasting;
let soundEnemyHited;
let soundBusted;
let soundExplosion;
let soundWinGame;
let soundRunning;

//Variavel que recebe a imagem do menu do jogo
let imageMenu;

//Variaveis que recebem as imagens da primeira fase do jogo
let imagefirstStageSun;
let imagefirstStagePoste
let imagefirstStageParalax;
let imagefirstStageBackground;

//Variaveis que recebem as imagens da segunda fase do jogo
let imageSecondStageBamboo1;
let imageSecondStageBamboo2;
let imageSecondStageBackground;
let imageSecondStageGrounds;

//Variaveis que recebem as imagens da terceira fase do jogo
let imageThirdStageBackground;

//Variaveis que recebem as sprites do nosso livro (arremessado, bala que mata os monstros)
let imageBook;
let imageBookBlocked;
let imageEletric;

//Variaveis que recebem as sprites do nosso heroi
let imageHeroRunRight;
let imageHeroRunLeft;
let imageHeroJump;
let imageHeroStoped;

//Variaveis que recebem as sprites dos monstros do jogo
let imageEnemyThief;
let imageEnemyZoombieM;
let imageEnemyZoombieF;
let imageEnemyTrollFacebook;
let imageEnemyTrollTiktok;
let imageEnemyTrollTwitter;
let imageEnemyTrollYoutube;
let imageEnemyTrollInstagram;
let imageEnemyTrollSpotify;
let imageEnemyTrollSnapchat;
let imageEnemyTrollGoogle;
let imageEnemyTrollAmazon;
let imageEnemyBossMark;
let imageEnemyBossMarkDerrotado;

//Variaveis que recebem as imagens dos marcadores de progresso
let imageMarkerProgressZumbi;
let imageMarkerBrain;
let imageMarkerEistein;

let imagePauseSymbol;

let buttonMenuToIntroduction;
let buttonInstructions;
let buttonCredits;

let firstStageSceneryBackground;
let firstStageSceneryParalax;
let firstStageSceneryPoste;
let firstStageScenerySun;

let secondStageBamboo1;
let secondStageBamboo2;
let secondStageBackground;
let secondStageGround;

let thirdStageBackground;

let score;

let sceneries;
let currentScenery = 'newGame';

let books;
let bulletsOfBooks = new Array();
let bulletsEletric = new Array();

let myHero = [];
let currentHero = 0;

const enemies = [];
let randomEnemy;

const bosses = [];
let currentBoss;

const traps = [];
let randomTraps;

let flagBossHited = false;
let flagInvencible = false;
let flagRunning = true;
let flagBlink = 0;

const matriz_boss_mark = [
    [0, 0]
];

const matriz_hero_stoped = [
    [0, 0]
];

const matriz_hero_running_right = [
    [41, 38],
    [287, 63],
    [560, 61],
    [863, 65],
    [1119, 72],
    [22, 400],
    [284, 402],
    [561, 404],
    [843, 402],
    [1124, 405]
];

const matriz_hero_running_left = [
    [1119, 72],
    [863, 65],
    [560, 61],
    [287, 63],
    [41, 38],
    [1124, 405],
    [843, 402],
    [561, 404],
    [284, 402],
    [22, 400]
];

const matriz_hero_jumping = [
    [11, 4],
    [269, 11],
    [506, 11],
    [748, 16],
    [5, 248],
    [258, 249],
    [513, 250],
    [754, 254]
];

const matriz_eletric = [
    [3, 12],
    [180, 7],
    [362, 10],
    [540, 10],
    [7, 214],
    [183, 214],
    [368, 212],
    [550, 213],
    [5, 425],
    [182, 427],
    [370, 425],
    [549, 427],
    [8, 632],
    [184, 628],
    [364, 632]
];

const matriz_thief = [
    [64, 26],
    [478, 19],
    [867, 19],
    [37, 511],
    [432, 515],
    [872, 526]
];

const matriz_troll = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000]
];

const matriz_zoombie_male = [
    [1372, 512],
    [1050, 512],
    [720, 512],
    [385, 512],
    [55, 512],
    [1355, 0],
    [1036, 0],
    [717, 0],
    [386, 0],
    [57, 0]
];

const matriz_zoombie_female = [
    [1979, 0],
    [1485, 0],
    [1004, 0],
    [504, 0],
    [22, 0],
    [1979, 620],
    [1495, 622],
    [1001, 624],
    [502, 623],
    [26, 617]
];