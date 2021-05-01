class ThirdStageFinish{
    constructor(){}

    keyPressed(key){}

    setup(){
        text_intro = split("Parabéns!\nVocê guiou Xnowden até o sucesso...", '\n');
        soundGame.stop();
        //soundWinGame.play();
    }

    draw(){
        textFont(fontHanaleiFill);
        this._changeBackground();
        textSize(44);
        stroke('#d82b00');
        strokeWeight(2);
        textAlign(CENTER);

        txtalfa += 5 * txtalfax;

        if(flagIntroIsEnding == false){
            if(txtalfa > 255){
                flagTime++;
                let numSec = multiplicadorMinimoParaTempoDeCadaFraseNasTransicoes + 100;

                if(text_intro[text_indice].length > 100){
                    numSec = multiplicadorMaximoParaTempoDeCadaFraseNasTransicoes + 100;
                }
                if(flagTime % (fpsGame * numSec) == 0){
                    txtalfa = 255;
                    txtalfax = -1;
                }
            }
            else if(txtalfa < 0){
                txtalfax = 1;
                flagTime = 0;
                text_indice++;
            }
            fill(0, 0, 0, txtalfa);
        }
        else{
            fill(128 + sin(frameCount * 0.1) * 128);
            text("Pressione 'F5' para jogar novamente!", 0.5*width, 0.8*height);
            fill(0, 0, 0);

            if(txtalfa > 255){
                txtalfax = -1;
            }
            else if(txtalfa < 0){
                txtalfax = 1;
            }
        }

        if((text_indice == text_intro.length-1) && (flagIntroIsEnding == false)){
            flagIntroIsEnding = true;
            flagTime = 0;
        }

        text(text_intro[text_indice], width / 4.5, height / 4, 0.6 * width, 0.4 * height);

        if(keyIsPressed && (text_indice > 0)){
            this._changeScenery(keyCode, key);
        }

        if(flagIntroIsEnding == true){
            flagTime++;
            if(flagTime > (fpsGame * multiplicadorParaLiberarAsFuncoesDeKeyCode)){
                if(keyIsPressed){
                    this._changeScenery(keyCode,key);
                }
            }
        }
        //fim da funcao draw()
    }

    _changeBackground(){
        background('#03324c');
    }

    _changeScenery(keyCode, key){
        flagTime = 0;
        txtalfa = 0;
        txtalfax = 1;
        frmcount = 0;
        txtcount = 0;
        showStart = false;
        myHero[0].x = 0;
        currentScenery = 'fourthStage';
        sceneries[currentScenery].setup(); 
    }
}