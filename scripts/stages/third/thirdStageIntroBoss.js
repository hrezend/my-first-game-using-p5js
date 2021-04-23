class ThirdStageIntroductionBoss{
    constructor(){}

    keyPressed(key){}
  
    setup(){
        text_intro = 'Xnowden está chegando ao fim da sua jornada, quando...\nOh não, é o Big-Boss logo a frente!\nEle veio tomar para si todo o conhecimendo que nosso herói adquiriu.\nMas isso não abalará nosso herói!\nXnowden jamais desistirá de salvar sua nação!!!';
        textSize(24);
        txt1 = split(text_intro, "\n")
        tamcx1 = textWidth(txt1[0]) * 1.1;
        txtaux = txt1[txtcount];

        thirdStageBackground = new LongScenery(imageThirdStageBackground, 0.1, 0.1, 3960);
    }
  
    draw(){
        //Mostra o cenario em tela
        thirdStageBackground.show();
        thirdStageBackground.moveAxisX();

        if(currentHero != 3){
            myHero[0].show();
            myHero[0].move(2 * myHero[0].widthOfSprite);
        }
        else{
            myHero[currentHero].show();
        }

        textFont(fontHanaleiFill);
        fill(200, 50, 50, 75);
        textSize(20);
        rect((width - tamcx1) * 0.5, 0.04 * height, tamcx1, 8 * textWidth('ee'));
        textAlign(CENTER);
        fill(255)
  
        if(txtcount > 0){
            text(txtaux2, width * 0.5, height * 0.09);
        }
  
        if(showStart == false){
            txtalfa += 5;
            fill(255, 255, 255, txtalfa)
            text(txtaux, width * 0.5, height * 0.09);
        }
  
        if(frmcount % 60 == 0 && showStart == false){
            if(txtcount < txt1.length){
                txtcount++;
                txtalfa = 0;
            }
            else{
                showStart = true;
                txtalfa = 0;
            }
            txtaux2 = txtaux;
            txtaux = join([txtaux, '\n', txt1[txtcount]], "");
        }
        if(showStart == true){
            textSize(30);
            textAlign(CENTER);
            fill(128 + sin(frameCount * 0.1) * 128);
            text("Presssione 'Enter' para continuar.", 0.5 * width, 0.8 * height);
            fill(255)
            textSize(20);
        } 

        frmcount++;
        flagTime++;
        if(flagTime > (multiplicadorParaLiberarAsFuncoesDeKeyCode * fpsGame)){
            if(keyIsPressed){
                this._changeScenery(keyCode);
            }
        }
    }
  
    _changeScenery(keyCode, key){
        if(keyCode === 13 || keyCode === 27){ //ESC (27) e Enter (13)
            currentScenery = 'thirdStage';
            flagTime = 0;
            txtalfa = 0;
            txtalfax = 1;
            frmcount = 0;
            txtcount = 0;
            showStart = false;
            myHero[0].x = 0;
            sceneries[currentScenery].setup();
        }
    }
  
  }