class ThirdStage{
    keyPressed(){
        if(keyCode === 69){ //KeyE
            if(!myHero[currentHero].rechargingSpecialAttack){
                myHero[currentHero].special_attack();
                score.decrementPoints(pontosPerdidosAoUsarHabilidade);
            }
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

        const bossMark = new Boss(matriz_boss_mark, imageEnemyBossMark, width, 0, 285, 655, 570, 1310);
        bosses.push(bossMark);

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
        myHero[3].show();

        //Mostra quando o herói pode usar sua habilidade especial
        if(!myHero[currentHero].rechargingSpecialAttack){
            this._drawWarning();
        }

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
                score.points = 1000;
                setInterval(() => {
                    this._changeScenery();
                }, 3000);
            }
            
            blt.show();
        }

        score.show();
        //fim do draw()
    }

    _drawWarning(){
        textSize(32);
        textAlign(CENTER);
        fill('#000');
        stroke('#d82b00');
        strokeWeight(2);
        text("Press 'E' to cast your special ability!", width * 0.5, height * 0.3);
    }

    _changeScenery(keyCode, key){
        currentScenery = 'thirdStageFinish';
        sceneries[currentScenery].setup();
        flagTime = 0;
        flagIntroIsEnding = false;
        txtalfa = 0;
        txtalfax = 1;
        text_indice = 0;
        myHero[0].x = 0;
        currentHero = 0;
    }
}