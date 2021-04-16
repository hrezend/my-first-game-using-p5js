class SecondStage{
    keyPressed(){
        if(keyCode === 32){ //Space
            myHero[0].jump();
        }
        if(keyCode === 80){ //KeyP
            if(isLooping()){
                noLoop();
            }
            else{
                loop();
            }
        }
    }

    setup(){
        secondStageBamboo1 = new Shadow(imageSecondStageBamboo1, 5 , 0, 300, height);
        secondStageBamboo2 = new Shadow(imageSecondStageBamboo2, 8 , 0, 400, height);
        secondStageGround = new Shadow(imageSecondStageGround, 8, (75 * height) / 100, width + 100, height / 3);
        secondStageBackground = new Scenery(imageSecondStageBackground, 4);

        const trapDatabase = new Trap(imageTrapDatabase, 15);
        const trapHtml = new Trap(imageTrapHtml, 15);
        const trapCss = new Trap(imageTrapCss, 15);
        const trapCpp = new Trap(imageTrapCpp, 15);
        const trapNode = new Trap(imageTrapNode, 15);
        const trapJava = new Trap(imageTrapJava, 15);
        const trapGit = new Trap(imageTrapGit, 15);
        traps.push(trapDatabase);
        traps.push(trapHtml);
        traps.push(trapCss);
        traps.push(trapCpp);
        traps.push(trapNode);
        traps.push(trapJava);
        traps.push(trapGit);
        randomTraps = Math.floor(Math.random() * traps.length);

        for(let i = 0; i < myHero.length; i++){
            myHero[i].filter(THRESHOLD);
        }
        for(let i = 0; i < traps.length; i++){
            traps[i].filter(THRESHOLD);
        }
    }

    draw(){
        secondStageBackground.show();
        secondStageBackground.move();

        secondStageBamboo1.show();
        secondStageBamboo1.move();

        //Mostra um inimigo em tela
        traps[randomTraps].show();

        //Assim que um inimigo fica visivel, outro eh escolhido para ser o proximo
        if(traps[randomTraps].visible()){
            randomTraps = Math.floor(Math.random() * traps.length);
            traps[randomTraps].nextTrap();
        }

        //Mostra outro inimigo em tela
        traps[randomTraps].show();

        //Mostra o sprite atual do heroi
        if(myHero[0].amountJumps < 2){
            myHero[currentHero].show();
        }
        myHero[0].float();


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
        secondStageGround.move();

        secondStageBamboo2.show();
        secondStageBamboo2.move();

        score.show();
        score.decrementPoints(0.1);

        //O jogador deve sobreviver nessa fase por 30 segundos e manter a pontuação maior que 300
        if(timeOfSurvive <= 0){
            if(countWarning < (fpsGame * 5)){
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
        //fim do draw()
    }

    _changeScenery(){
        if(score.points >= 300){
            currentScenery = 'secondStageFinish';
            sceneries[currentScenery].setup();
            countWarning = 0; 
        }
        else{
            currentScenery = 'firstStage';
            sceneries[currentScenery].setup();
            score.points = 200;
            countWarning = 0;
        }
    }

    _drawTime(){
        textFont(fontHanaleiFill);
        textSize(44);
        fill('#000');
        stroke('#d82b00');
        strokeWeight(2);
        textAlign(CENTER);
        text(`Sobreviva por ${timeOfSurvive} segundos...`, width / 2, 35);
    }

}