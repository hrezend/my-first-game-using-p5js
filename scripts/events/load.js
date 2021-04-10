function preload(){
    //Fonts
    lettersFont = loadFont('../fonts/PressStart2P-Regular.ttf');
    font2 = loadFont('../fonts/font2.otf');

    //Sounds
    soundJump = loadSound('../sounds/sound_jump.mp3');
    soundEletric = loadSound('../sounds/sound_eletric.mp3');
    soundMenu = loadSound('../sounds/sound_menu.mp3');
    soundGame = loadSound('../sounds/sound_game.mp3');
    soundCasting = loadSound('../sounds/sound_arremesso.mp3');
    soundEnemyHited = loadSound('../sounds/sound_enemy_hited.mp3');

    //Images
    imageMenu = loadImage('../images/scenery/menu.jpg');

    imagefirstStageSun = loadImage('../images/scenery/1/sun.png');
    imagefirstStageParalax = loadImage('../images/scenery/1/paralax.png');
    imagefirstStageBackground = loadImage('../images/scenery/1/background.png');
    imagefirstStagePoste = loadImage('../images/scenery/1/postes.png');

    imageSecondStageBamboo1 = loadImage('../images/scenery/2/bamboo.png');
    imageSecondStageBamboo2 = loadImage('../images/scenery/2/bamboo2.png');
    imageSecondStageBackground = loadImage('../images/scenery/2/fundo.png');
    imageSecondStageGround = loadImage('../images/scenery/2/silhueta.png');

    imageHeroRun = loadImage('../images/hero/hero_run.png');
    imageHeroJump = loadImage('../images/hero/hero_jump.png');

    imageBook = loadImage('../images/skills/book.png');

    imageEnemyThief = loadImage('../images/enemies/thief.png');
    imageEnemyTrollFacebook = loadImage('../images/enemies/troll_facebook.png');
    imageEnemyTrollTiktok = loadImage('../images/enemies/troll_tiktok.png');
    imageEnemyTrollYoutube = loadImage('../images/enemies/troll_youtube.png');
    imageEnemyTrollInstagram = loadImage('../images/enemies/troll_instagram.png');
    imageEnemyTrollTwitter = loadImage('../images/enemies/troll_twitter.png');
    imageEnemyTrollSpotify = loadImage('../images/enemies/troll_spotify.png');;
    imageEnemyTrollSnapchat = loadImage('../images/enemies/troll_snapchat.png');;

    imageMarkerProgressZumbi = loadImage('../images/progress/marker_zumbi.png');
    imageMarkerEistein = loadImage('../images/progress/marker_eistein.png');
    imageMarkerBrain = loadImage('../images/progress/marker_cerebro.png');
}