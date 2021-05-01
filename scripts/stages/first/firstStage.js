class FirstStage{
    keyPressed(key){
        if(keyCode === 32){ //Space
            myHero[0].jump();
        }
        if(keyCode === 70) {//KeyF
            if(books.amount != 0) {
                myHero[currentHero].attack();
                score.decrementPoints(pontosPerdidosAoUsarHabilidade);
            }
        }
        if(keyCode === 80){ //KeyP
            if(isLooping()){
                soundGame.stop(); 
                noLoop();  
            }
            else{
                soundGame.loop(); 
                loop();  
            }
        }
    }

    setup(){
        soundMenu.stop();
        soundGame.loop();
        soundGame.setVolume(0.2);
        soundRunning.loop();
        soundRunning.setVolume(0.7);

        firstStageScenerySun = new Scenery(imagefirstStageSun, 0.1, 0.1);
        firstStageSceneryParalax = new Scenery(imagefirstStageParalax, 4, 1);
        firstStageSceneryBackground = new Scenery(imagefirstStageBackground, 7, 1);
        firstStageSceneryPoste = new Scenery(imagefirstStagePoste, 8, 1)

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
        const zoombieM = new Enemy(matriz_zoombie_male, imageEnemyZoombieM, width, 0, 160, 250, 320, 500, 25);
        const zoombieF = new Enemy(matriz_zoombie_female, imageEnemyZoombieF, width, 0, 160, 250, 425, 545, 25);
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
        enemies.push(zoombieM);
        enemies.push(zoombieF);

        randomEnemy = Math.floor(Math.random() * enemies.length);
    }

    draw(){
        //Mostra o cenario em tela
        firstStageScenerySun.show();
        firstStageSceneryParalax.show();
        firstStageSceneryBackground.show();
        firstStageScenerySun.moveAxisX();
        firstStageSceneryParalax.moveAxisX();
        firstStageSceneryBackground.moveAxisX();

        //Mostra o inimigo em tela
        enemies[randomEnemy].show();
        enemies[randomEnemy].move();

        //Assim que um inimigo fica visivel, outro eh escolhido para ser o proximo
        if(enemies[randomEnemy].visible()){
            randomEnemy = Math.floor(Math.random() * enemies.length);
            enemies[randomEnemy].nextEnemy();
        }

        //Mostra o sprite atual do heroi
        if(myHero[0].amountJumps < 2){
            myHero[currentHero].show();
        }
        myHero[0].float();

        //Faz o lançamento das balas
        for (let i = 0; i < bulletsOfBooks.length; i++){
            let blt = bulletsOfBooks[i];
            let xPosBullet = bulletsOfBooks[i].centerX;

            if(xPosBullet > width) {
                bulletsOfBooks.splice(i, 1);
            }
            if(enemies[randomEnemy].hited(blt)){
                enemies[randomEnemy].hide();
                soundEnemyHited.play();
                score.incrementPoints(pontosGanhosAoDerrotarInimigoComum);
                bulletsOfBooks.splice(i, 1);
            }

            blt.show();
        }

        //Mostra as artes dos postes (depois do heroi, para dar o efeito de que o heroi passa por tras dos postes)
        firstStageSceneryPoste.show();
        firstStageSceneryPoste.moveAxisX();

        //Mostra os livros (balas) em tela
        books.draw();

        //Mostra o score em tela e incrementa
        score.show();
        score.incrementPoints(pontosGanhosAoDecorrerDoTempo);

        //Verifica se o nosso heroi esta colidindo com um inimigo, dando a ele invencibilidade, e o efeito visual de colisão
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

        if(myHero[currentHero].collidingWithEnemy(enemies[randomEnemy])){
            score.decrementPoints(pontosPerdidosAoColidirComInimigo);
            myHero[0].becomeInvencible();
            myHero[1].becomeInvencible();
            if(!soundBusted.isPlaying()){
                soundBusted.play();
            }
        }

        //Recarrega quando atinge marker progress
        if(score.points % 100 == 0 && score.points != 1000){
            flagRecharging = true;
            books.incrementAmount();
        }
        if(flagRecharging){
            this._drawWarning();
        }

        //Muda de fase quando a pontuacao chega a 1000
        if(score.points >= 1000){
            this._changeScenery();
        }

        //Quando o pause é ativado, desenha a imagem do pause
        if(!isLooping()){
            image(imagePauseSymbol, 60, 100, 80, 80);
        }
        
        //fim do draw()
    }

    _changeScenery(){
        if(countWarning < (fpsGame * multiplicadorDeTempoParaMostrarMensagemDeMudancaDeFase)){
            textAlign(CENTER);
            fill(128 + sin(frameCount * 0.1) * 128);
            stroke('#d82b00');
            strokeWeight(2);
            text("Avançando...", width * 0.5, height * 0.3);
            fill(0, 0, 0);
            countWarning++;
        }
        else{
            currentScenery = 'firstStageFinish';
            sceneries[currentScenery].setup();
            countWarning = 0; 
        }
    }

    _drawWarning(){
        textAlign(CENTER);
        fill('#000');
        stroke('#d82b00');
        strokeWeight(2);
        text("Reached Marker Progress - Recharging Bullets...", width * 0.5, height * 0.3);
    }
}