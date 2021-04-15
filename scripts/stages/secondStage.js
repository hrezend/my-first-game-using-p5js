class SecondStage{
    keyPressed(){
        if(keyCode === 32){ //Space
            myHero[0].jump();
        }
        if(keyCode === 116){ //F5
            window.location.reload();
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
        secondStageBamboo1 = new Shadow(imageSecondStageBamboo1, 5 , 0,300, height);
        secondStageBamboo2 = new Shadow(imageSecondStageBamboo2, 8 , 0,400, height);
        secondStageGround = new Shadow(imageSecondStageGround, 8, (75 * height) / 100,width + 100, height / 3);
        secondStageBackground = new Scenery(imageSecondStageBackground, 4);

        const troll_spotify = new Enemy(matriz_troll, imageEnemyTrollSpotify, width, -30, 400, 400, 400, 400, 20);
        enemies.length = 0; //Isso limpa o array para poder preencher novamente com os novos monstros
        enemies.push(troll_spotify);

        randomEnemy = Math.floor(Math.random() * enemies.length);
    }

    draw(){
        secondStageBackground.show();
        secondStageBackground.move();

        secondStageBamboo1.show();
        secondStageBamboo1.move();

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

        secondStageGround.show();
        secondStageGround.move();

        secondStageBamboo2.show();
        secondStageBamboo2.move();

        score.show();
        score.incrementPoints();
    }
}