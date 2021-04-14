class FirstStage{
    keyPressed(){
        if(keyCode === 32){ //Space
            myHero[0].jump();
        }
        if(keyCode === 70) {//KeyF
            if(books.amount != 0) {
                myHero[currentHero].attack();
            }
        }
    }

    setup(){
        soundMenu.stop();
        soundGame.loop();

        firstStageScenerySun = new Scenery(imagefirstStageSun, 0.1);
        firstStageSceneryParalax = new Scenery(imagefirstStageParalax, 4);
        firstStageSceneryBackground = new Scenery(imagefirstStageBackground, 7);
        firstStageSceneryPoste = new Scenery(imagefirstStagePoste, 8)

        const thief = new Enemy(matriz_thief, imageEnemyThief, width, 10, 190, 230, 350, 420, 60);
        const troll_facebook = new Enemy(matriz_troll, imageEnemyTrollFacebook, width, -30, 400, 400, 400, 400, 25);
        const troll_tiktok = new Enemy(matriz_troll, imageEnemyTrollTiktok, width, -30, 400, 400, 400, 400, 20);
        const troll_youtube = new Enemy(matriz_troll, imageEnemyTrollYoutube, width, -30, 400, 400, 400, 400, 20);
        const troll_instagram = new Enemy(matriz_troll, imageEnemyTrollInstagram, width, -30, 400, 400, 400, 400, 25);
        const troll_twitter = new Enemy(matriz_troll, imageEnemyTrollTwitter, width, -30, 400, 400, 400, 400, 20);
        const troll_snapchat = new Enemy(matriz_troll, imageEnemyTrollSnapchat, width, -30, 400, 400, 400, 400, 20);
        const troll_spotify = new Enemy(matriz_troll, imageEnemyTrollSpotify, width, -30, 400, 400, 400, 400, 20);
        const troll_amazon = new Enemy(matriz_troll, imageEnemyTrollAmazon, width, -30, 400, 400, 400, 400, 20);
        const troll_google = new Enemy(matriz_troll, imageEnemyTrollGoogle, width, -30, 400, 400, 400, 400, 20);
        enemies.push(thief);
        enemies.push(troll_facebook);
        enemies.push(troll_tiktok);
        enemies.push(troll_youtube);
        enemies.push(troll_instagram);
        enemies.push(troll_twitter);
        enemies.push(troll_spotify);
        enemies.push(troll_snapchat);
        enemies.push(troll_amazon);
        enemies.push(troll_google);

        randomEnemy = Math.floor(Math.random() * enemies.length);
    }

    draw(){
        //Mostra o cenario em tela
        firstStageScenerySun.show();
        firstStageSceneryParalax.show();
        firstStageSceneryBackground.show();
        firstStageScenerySun.move();
        firstStageSceneryParalax.move();
        firstStageSceneryBackground.move();

        //Mostra o inimigo em tela
        currentEnemy = enemies[randomEnemy];
        currentEnemy.show();
        currentEnemy.move();

        //Assim que um inimigo fica visivel, outro eh escolhido para ser o proximo
        if(currentEnemy.visible()){
            randomEnemy = Math.floor(Math.random() * enemies.length);
            currentEnemy.nextEnemy();
        }

        //Mostra o sprite atual do heroi
        if(myHero[0].amountJumps < 2){
            myHero[currentHero].show();
        }
        myHero[0].float();

        //Faz o lançamento das balas
        for (let i = 0; i < bulletsOfBooks.length; i++) {
            let blt = bulletsOfBooks[i];
            let xPosBullet = bulletsOfBooks[i].centerX;
            if (xPosBullet > width) {
                bulletsOfBooks.splice(i, 1);
            }
            if (currentEnemy.hited(blt)) {
                currentEnemy.hide();
                soundEnemyHited.play();
                score.incrementPoints(30);
                bulletsOfBooks.splice(i, 1)
            }
            blt.show();
        }

        //Mostra as artes dos postes (depois do heroi, para dar o efeito de que o heroi passa por tras dos postes)
        firstStageSceneryPoste.show();
        firstStageSceneryPoste.move();

        //Mostra os livros (balas) em tela
        books.draw();

        //Mostra o score em tela e incrementa
        score.show();
        score.incrementPoints(0.5);

        //Verifica se o nosso heroi esta colidindo com um inimigo
        if(myHero[currentHero].invencible){
            myHero[0].filter(INVERT);
            myHero[1].filter(INVERT);
            flagBlink++;
        }
        else{
            if(flagBlink % 2 != 0){
                myHero[0].filter(INVERT);
                myHero[1].filter(INVERT);
                flagBlink = 0;
            }
        }

        if(myHero[currentHero].colliding(currentEnemy)){
            score.decrementPoints(30);
            myHero[0].becomeInvencible();
            myHero[1].becomeInvencible();
        }

        //Muda de fase quando a pontuacao chega a 1000
        if(score.points >= 1000){
            currentScenery = 'secondStage';
            sceneries[currentScenery].setup();
        }

        //Recarrega quando atinge marker progress
        if(score.points == 300){
            books.rechargeFull();
        }
        if(score.points == 900){
            books.rechargeFull();
        }
    }
}