class ThirdStage{
    keyPressed(){
        if(keyCode === 32){ //Space
            myHero[0].jump();
        }
        if(keyCode === 69){ //KeyE
            myHero[currentHero].special_attack();
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
        thirdStageBackground = new LongScenery(imageThirdStageBackground, 0.1, 0.1, 3960);

        const zoombie = new Boss(matriz_zoombie, imageEnemyZoombie, width, 0, 160, 250, 320, 500);
        bosses.push(zoombie);

        currentBoss = Math.floor(Math.random() * bosses.length);
    }

    draw(){
        //Mostra o cenario em tela
        thirdStageBackground.show();
        thirdStageBackground.moveAxisX();

        //Mostra o inimigo em tela
        bosses[currentBoss].show();
        bosses[currentBoss].notHide();

        //Mostra o heroi em tela
        if(myHero[0].amountJumps < 2){
            myHero[currentHero].show();
        }
        myHero[0].float();

        //Faz o lançamento das balas
        for (let i = 0; i < bulletsEletric.length; i++){
            let blt = bulletsEletric[i];
            let xPosBullet = bulletsEletric[i].centerX;

            if(xPosBullet > width) {
                bulletsEletric.splice(i, 1);
            }
            if(bosses[currentBoss].hited(blt)){
                bosses[currentBoss].hide();
                soundEnemyHited.play();
                bulletsEletric.splice(i, 1);
            }
            
            blt.show();
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

        //fim do draw()
    }
}