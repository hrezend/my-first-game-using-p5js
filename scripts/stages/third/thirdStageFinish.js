class ThirdStageFinish{
    constructor(){}

    keyPressed(){}

    setup(){
        text_intro = split("Parabéns!\nVocê guiou Xnowden até o sucesso...", '\n');
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
            if(flagTime > (fpsGame*1)){
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
        if(keyCode === 116){ //F5
            window.location.reload();
        }
    }
}