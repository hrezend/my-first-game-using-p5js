class Introduction{
    constructor(){}

    keyPressed(){}

    setup(){
        text_intro = split("Xnowden é um grande hacker que protege as nações das criaturas malignas.\nEssas criaturas são responsáveis por roubar dados pessoais de bilhões de pessoas, além de sugar os miolos de milhões delas.\nSão conhecidos como 'monstros-sociais'.\nO grande guerreiro Xnowden decidiu acabar com essa palhaçada e chutar o pau da barraca.\nLutando contra os monstros-sociais ele precisa tomar cuidado para não ter os seus dados e o seu conhecimento roubado.\n \"A janela para debater nossa atitude ante a tecnologia está se fechando\", é necessário lutar!\".\n Sua única opção é chegar à selva onde o 'monstro-social-chefe' se esconde.\n Será que ele irá conseguir?", '\n');
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
            text("Pressione ENTER para continuar", 0.5*width, 0.8*height);
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
            text("Pressione 'ESC' para pular esta introdução.", 0.5*width, 0.95*height);
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
        if(keyCode === 27 || keyCode === 13){ //ESC (27) e Enter (13)
            currentScenery = 'firstStage';
            sceneries[currentScenery].setup();
            flagTime = 0;
            flagIntroIsEnding = false;
            txtalfa = 0;
            txtalfax = 1;
            text_indice = 0;
        }
    }
}