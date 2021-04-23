class FirstStageFinish{
    constructor(){}

    keyPressed(key){}

    setup(){
        text_intro = split("Xnowden pressente o caos se aproximando.\nEstaria ele sentindo o poder do big boss, que é mais de 8000?\nTalvez seja só uma armadilha...", '\n');
    
        if(soundRunning.isLooping()){
            soundRunning.stop();
        }
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
                let numSec = multiplicadorMinimoParaTempoDeCadaFraseNasTransicoes;

                if(text_intro[text_indice].length > 100){
                    numSec = multiplicadorMaximoParaTempoDeCadaFraseNasTransicoes;
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
            text("Pressione ENTER para continuar.", 0.5*width, 0.8*height);
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

        if(text_indice > 0 && (text_indice != text_intro.length-1)){
            fill(0);
            textSize(28);
            text("Novos comandos liberados. Pressione 'A' e 'D' para correr para frente e para trás!", 0.25 * width, 0.75 * height, 0.5 * width, 0.5 * height);
            text("Pressione 'ESC' para pular esta transição.", 0.5*width, 0.95*height);
        }

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
        if(keyCode === 13 || keyCode === 27){ //ESC (27) e Enter (13)
            currentScenery = 'secondStage';
            flagTime = 0;
            flagIntroIsEnding = false;
            txtalfa = 0;
            txtalfax = 1;
            text_indice = 0;
            myHero[0].x = 0;
            sceneries[currentScenery].setup();
        }
    }
}