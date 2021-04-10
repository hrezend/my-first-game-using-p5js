let lettersFont;
let font2;

let soundJump;
let soundMenu;
let soundGame;
let soundEletric;
let soundCasting;
let soundEnemyHited;

let imagefirstStageSun;
let imagefirstStagePoste
let imagefirstStageParalax;
let imagefirstStageBackground;

let imageSecondStageBamboo1;
let imageSecondStageBamboo2;
let imageSecondStageBackground;
let imageSecondStageGrounds;

let imageBook;

let imageMenu;
let imageHeroRun;
let imageHeroJump;

let imageEnemyThief;
let imageEnemyTrollFacebook;
let imageEnemyTrollTiktok;
let imageEnemyTrollTwitter;
let imageEnemyTrollYoutube;
let imageEnemyTrollInstagram;
let imageEnemyTrollSpotify;
let imageEnemyTrollSnapchat;

let imageMarkerProgressZumbi;
let imageMarkerBrain;
let imageMarkerEistein;

let buttonMenuToFirstStage;
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

let score;

let sceneries;
let currentScenery = 'newGame';

let books;
let bulletsOfBooks = new Array();

let myHeroRunning;
let myHeroJumping;
let myHero = [];
let currentHero = 0;

const enemies = [];
let currentEnemy;
let randomEnemy;

let flagInvencible = false;
let flagRunning = true;

const matriz_hero_running = [
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

const matriz_skill_one = [
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
    [800, 2000],
];