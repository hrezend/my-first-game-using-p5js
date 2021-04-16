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
        thirdStageBackground = new Scenery(imageThirdStageBackground, 1);

        enemies.length = 0; //Isso limpa o array para poder preencher novamente com os novos monstros, apagando os do estagio anterior
        const zoombie = new Enemy(matriz_zoombie, imageEnemyZoombie, width, 0, 160, 250, 320, 500, 1);
        enemies.push(zoombie);

        randomEnemy = Math.floor(Math.random() * enemies.length);
    }

    draw(){
        //Mostra o cenario em tela
        thirdStageBackground.show();
        thirdStageBackground.move();

        //Mostra o inimigo em tela
        enemies[randomEnemy].show();
        enemies[randomEnemy].move();

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
            if(enemies[randomEnemy].hited(blt)){
                enemies[randomEnemy].hide();
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