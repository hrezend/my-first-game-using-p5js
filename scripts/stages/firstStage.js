class FirstStage{
    keyPressed(key){
        if(keyCode === 38 || key === 'w'){
            myHero[0].jump();
        }
        if(keyCode === 32 || key === ' '){
            myHero[0].transform();
        }
        if(keyCode === 40 || key === 's'){
            if(myHero[0].amountJumps == 0){
                myHero[0].slip();
            }
        }
    }

    setup(){
        soundMenu.stop();
        soundGame.loop();

        score = new Punctuation();

        firstStageScenerySun = new Scenery(imagefirstStageSun, 0.1);
        firstStageSceneryParalax = new Scenery(imagefirstStageParalax, 4);
        firstStageSceneryBackground = new Scenery(imagefirstStageBackground, 7);
        firstStageSceneryPoste = new Scenery(imagefirstStagePoste, 8)

        myHeroRunning = new Hero(matriz_hero_running, imageHeroRun, 0, 20, 175, 200, 251, 324);
        myHeroJumping = new Hero(matriz_hero_jumping, imageHeroJump, 0, 20, 175, 200, 240, 240);
        myHeroPower = new Hero(matriz_hero_power, imageHeroPower, 0, 20, 100, 100, 170, 170);
        myHero.push(myHeroRunning);
        myHero.push(myHeroJumping);
        myHero.push(myHeroPower);

        const thief = new Enemy(matriz_thief, imageEnemyThief, width, 10, 190, 230, 350, 420, 60);
        const troll_facebook = new Enemy(matriz_troll, imageEnemyTrollFacebook, width, -20, 400, 400, 400, 400, 25);
        const troll_tiktok = new Enemy(matriz_troll, imageEnemyTrollTiktok, width, -20, 400, 400, 400, 400, 20);
        const troll_youtube = new Enemy(matriz_troll, imageEnemyTrollYoutube, width, -20, 400, 400, 400, 400, 20);
        const troll_instagram = new Enemy(matriz_troll, imageEnemyTrollInstagram, width, -20, 400, 400, 400, 400, 25);
        const troll_twitter = new Enemy(matriz_troll, imageEnemyTrollTwitter, width, -20, 400, 400, 400, 400, 20);
        const troll_snapchat = new Enemy(matriz_troll, imageEnemyTrollSnapchat, width, -20, 400, 400, 400, 400, 20);
        const troll_spotify = new Enemy(matriz_troll, imageEnemyTrollSpotify, width, -20, 400, 400, 400, 400, 20);
        enemies.push(thief);
        enemies.push(troll_facebook);
        enemies.push(troll_tiktok);
        enemies.push(troll_youtube);
        enemies.push(troll_instagram);
        enemies.push(troll_twitter);
        enemies.push(troll_spotify);
        enemies.push(troll_snapchat);

        randomEnemy = Math.floor(Math.random() * enemies.length);
    }

    draw(){
        firstStageScenerySun.show();
        firstStageSceneryParalax.show();
        firstStageSceneryBackground.show();
        firstStageScenerySun.move();
        firstStageSceneryParalax.move();
        firstStageSceneryBackground.move();

        currentEnemy = enemies[randomEnemy];
        currentEnemy.show();
        currentEnemy.move();

        if(currentEnemy.visible()){
            randomEnemy = Math.floor(Math.random() * enemies.length);
            currentEnemy.nextEnemy();
        }

        if(myHero[0].amountJumps < 2){
            myHero[currentHero].show();
        }
        myHero[0].float();

        firstStageSceneryPoste.show();
        firstStageSceneryPoste.move();

        score.show();
        score.incrementPoints();

        if(myHero[currentHero].colliding(currentEnemy)){
            myHero[currentHero].invincibility();
            setTimeout(() => {
                myHero[currentHero].invincibility();
            }, 5000);
            score.decrementPoints();
        }
    }
}