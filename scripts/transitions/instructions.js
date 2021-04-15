class Instructions{
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
        text("INSTRUÇÕES", width * 0.5, height * 0.2);

        textLeading(35);
        text("Pulo: Tecle espaço\nPulo Duplo: Tecle espaço duas vezes\nAtirar: Tecle F\nPausar o Jogo: Tecle P\nRecarregar o Jogo: Tecle F5\n\nDesvie dos monstros, ou desintegre-os com o poder supremo do conhecimento.\n \n Pontue até completar a barra de progresso, e então enfrente o boss.", width * 0.5, height * 0.3);
        
        stroke('#d82b00');
        strokeWeight(2);
        fill(128 + sin(frameCount * 0.1) * 128);
        text("Presssione ESC para voltar ao menu principal", 0.5 * width, 0.9 * height);

        flagTime++;
        if( flagTime > (fpsGame * 2) ){
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