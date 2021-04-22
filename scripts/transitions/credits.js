class Credits{
    constructor(){}

    keyPressed(){}

    setup(){}

    draw(){
        this._changeBackground();
        fill(0);
        textSize(34);
        textAlign(CENTER);
        textFont(fontHanaleiFill);
        stroke('#d82b00');
        strokeWeight(2);
        text("CREDITS", width * 0.5, height * 0.2);

        textLeading(35);
        text("MATA68 - PROJECT\nDiscentes: Hérson Rezende, João Gabriel e Djair Maykon \n\nContact:\nherson.reis@ufba.br", width * 0.5, height * 0.3);
        
        stroke('#d82b00');
        strokeWeight(2);
        fill(128 + sin(frameCount * 0.1) * 128);
        text("Presssione ESC para voltar ao menu principal", 0.5 * width, 0.9 * height);

        flagTime++;
        if( flagTime > (fpsGame * multiplicadorParaLiberarAsFuncoesDeKeyCode) ){
            if(keyIsPressed){
                this._changeScenery(keyCode, key);
            }
        }
    }

    _changeBackground(){
        background('#03324c');
    }

    _changeScenery(keyCode, key){
        if(keyCode === 27){ //ESC (27)
            currentScenery = 'newGame';
            sceneries[currentScenery].setup();
            flagTime = 0;
        }
    }
}