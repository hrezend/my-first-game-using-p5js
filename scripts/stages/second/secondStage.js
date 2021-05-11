class SecondStage{
    keyPressed(key){
        if(keyCode === 32){ //Space
            myHero[0].jump();
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
        if(!soundRunning.isLooping()){
            soundRunning.loop();
            soundRunning.setVolume(0.7);
        }

        secondStageBamboo1 = new Shadow(imageSecondStageBamboo1, 5 , 0, 300, height);
        secondStageBamboo2 = new Shadow(imageSecondStageBamboo2, 8 , 0, 400, height);
        secondStageGround = new Shadow(imageSecondStageGround, 8, (75 * height) / 100, width + 100, height / 3);
        secondStageBackground = new Scenery(imageSecondStageBackground, 4, 1);

        //traps
        const trapDatabase = new Trap(imageTrapDatabase, 20);
        const trapHtml = new Trap(imageTrapHtml, 20);
        const trapCss = new Trap(imageTrapCss, 20);
        const trapCpp = new Trap(imageTrapCpp, 20);
        const trapNode = new Trap(imageTrapNode, 20);
        const trapJava = new Trap(imageTrapJava, 20);
        const trapGit = new Trap(imageTrapGit, 20);
        const trapJs = new Trap(imageTrapJs, 20);
        traps.push(trapDatabase);
        traps.push(trapHtml);
        traps.push(trapCss);
        traps.push(trapCpp);
        traps.push(trapNode);
        traps.push(trapJava);
        traps.push(trapJs);
        traps.push(trapGit);
        randomTraps = Math.floor(Math.random() * traps.length);

        //obstacles
        const obstacleDatabase = new Obstacle(imageTrapDatabase, 20);
        const obstacleHtml = new Obstacle(imageTrapHtml, 20);
        const obstacleCss = new Obstacle(imageTrapCss, 20);
        const obstacleCpp = new Obstacle(imageTrapCpp, 20);
        const obstacleNode = new Obstacle(imageTrapNode, 20);
        const obstacleJava = new Obstacle(imageTrapJava, 20);
        const obstacleGit = new Obstacle(imageTrapGit, 20);
        const obstacleJs = new Obstacle(imageTrapJs, 20);
        obstacles.push(obstacleDatabase);
        obstacles.push(obstacleHtml);
        obstacles.push(obstacleCss);
        obstacles.push(obstacleCpp);
        obstacles.push(obstacleNode);
        obstacles.push(obstacleJava);
        obstacles.push(obstacleGit);
        obstacles.push(obstacleJs);
        randomObstacles = Math.floor(Math.random() * obstacles.length);
    }

    draw(){
        //Desenha o background do cenario
        secondStageBackground.show();
        secondStageBackground.moveAxisX();

        secondStageBamboo1.show();
        secondStageBamboo1.moveAxisX();

        //Mostra uma trap em tela
        traps[randomTraps].show();

        //Assim que uma trap fica visivel, outro eh escolhido para ser o proximo
        if(traps[randomTraps].visible()){
            randomTraps = Math.floor(Math.random() * traps.length);
            traps[randomTraps].nextTrap();
        }

        //Mostra um obstaculo em tela
        obstacles[randomObstacles].show();

        //Assim que um obstaculo fica visivel, outro eh escolhido para ser o proximo
        if(obstacles[randomObstacles].visible()){
            randomObstacles = Math.floor(Math.random() * obstacles.length);
            obstacles[randomObstacles].nextObstacle();
        }

        //Mostra o sprite atual do heroi
        if(myHero[0].amountJumps < 2){
            myHero[currentHero].show();
        }
        myHero[0].float();

        //Verifica se o nosso heroi esta colidindo com uma armadilha, dando a ele invencibilidade, e o efeito visual de colisão
        if(myHero[currentHero].invencible){
            myHero[0].filter(INVERT);
            myHero[1].filter(INVERT);
            myHero[2].filter(INVERT);
            flagBlink++;
        }
        else{
            if(flagBlink % 2 != 0){
                myHero[0].filter(INVERT);
                myHero[1].filter(INVERT);
                myHero[2].filter(INVERT);
                flagBlink = 0;
            }
        }

        if(myHero[currentHero].collidingWithTrap(traps[randomTraps])){
            score.decrementPoints(pontosPerdidosAoColidirComTrap);
            myHero[0].becomeInvencible();
            myHero[1].becomeInvencible();
            myHero[2].becomeInvencible();
            if(!soundBusted.isPlaying()){
                soundBusted.play();
            }
        }

        if(myHero[currentHero].collidingWithObstacle(obstacles[randomObstacles])){
            score.decrementPoints(pontosPerdidosAoColidirComObstaculo);
            myHero[0].becomeInvencible();
            myHero[1].becomeInvencible();
            myHero[2].becomeInvencible();
            if(!soundBusted.isPlaying()){
                soundBusted.play();
            }
        }

        //Verifica se a tecla esta pressionada, para o heroi andar
        if( keyIsDown(65) ){ //KeyA
            myHero[0].walk('left');
            myHero[1].walk('left');
        }
        if( keyIsDown(68) ){ //KeyD
            myHero[0].walk('right');
            myHero[1].walk('right');
        }

        secondStageGround.show();
        secondStageGround.moveAxisX();

        secondStageBamboo2.show();
        secondStageBamboo2.moveAxisX();

        score.show();
        score.decrementPoints(pontosPerdidosAoDecorrerDoTempo);

        //O jogador deve sobreviver nessa fase por 30 segundos e manter a pontuação maior que 300
        if(timeOfSurvive <= 0){
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
                this._changeScenery();
            }
        }
        
        this._drawTime();

        //Quando o pause é ativado, desenha a imagem do pause
        if(!isLooping()){
            image(imagePauseSymbol, 60, 100, 80, 80);
        }

        //Desenha em tela os comandos disponíveis para aquela fase
        image(imageMove, width - 75, 30, 75, 75);
        image(imageJump, width - 150, 30, 75, 75);
        image(imagePressFBlocked, width - 225, 30, 75, 75);

        //fim do draw()
    }

    _changeScenery(){
        if(score.points > 300){
            currentScenery = 'secondStageFinish';
            countWarning = 0; 
            sceneries[currentScenery].setup();
        }
        else{
            currentScenery = 'firstStage';
            score.points = 200;
            countWarning = 0;
            myHero[0].x = 0;
            sceneries[currentScenery].setup();
        }
    }

    _drawTime(){
        textFont(fontHanaleiFill);
        textSize(34);
        fill('#000');
        stroke('#d82b00');
        strokeWeight(2);
        textAlign(CENTER);
        text(`Sobreviva por ${timeOfSurvive} segundos... Sua pontuação deve continuar maior que 300!`, width / 2, 35);
    }

}