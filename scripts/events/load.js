function preload(){
    //Fonts
    lettersFont = loadFont('../fonts/PressStart2P-Regular.ttf');

    //Sounds
    soundJump = loadSound('../sounds/sound_jump.mp3');
    soundSlip = loadSound('../sounds/sound_slip.mp3');
    soundAttack = loadSound('../sounds/sound_attack.mp3');
    soundEletric = loadSound('../sounds/sound_eletric.mp3');
    soundMenu = loadSound('../sounds/sound_menu.mp3');
    soundGame = loadSound('../sounds/sound_game.mp3');

    //Images
    imageMenu = loadImage('../images/scenery/menu.jpg');

    imagefirstStageSun = loadImage('../images/scenery/2/sun.png');
    imagefirstStageParalax = loadImage('../images/scenery/2/paralax.png');
    imagefirstStageBackground = loadImage('../images/scenery/2/background.png');
    imagefirstStagePoste = loadImage('../images/scenery/2/postes.png');

    imageHeroRun = loadImage('../images/hero/hero_run.png');
    imageHeroJump = loadImage('../images/hero/hero_jump.png');
    imageHeroPower = loadImage('../images/hero/hero_power.png');

    imageEnemyThief = loadImage('../images/enemies/thief.png');
    imageEnemyTrollFacebook = loadImage('../images/enemies/troll_facebook.png');
    imageEnemyTrollTiktok = loadImage('../images/enemies/troll_tiktok.png');
    imageEnemyTrollYoutube = loadImage('../images/enemies/troll_youtube.png');
    imageEnemyTrollInstagram = loadImage('../images/enemies/troll_instagram.png');
    imageEnemyTrollTwitter = loadImage('../images/enemies/troll_twitter.png');

    imageMarkerProgressZumbi = loadImage('../images/progress/marker_zumbi.png');
    imageMarkerEistein = loadImage('../images/progress/marker_eistein.png');
    imageMarkerBrain = loadImage('../images/progress/marker_cerebro.png');
}