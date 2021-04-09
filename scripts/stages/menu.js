class Menu{
    keyPressed(key){
        console.log('Nothing here yet...');
    }
    setup(){
        soundMenu.loop();
        buttonMenuToFirstStage = new ButtonMenuToFirstStage('Start', 0, 0);
        buttonInstructions = new ButtonInstructions('Instructions', 0, 0);
        buttonCredits = new ButtonCredits('Credits', 0, 0);
    }
    draw(){
        this._imagemDeFundo();
        //this._texto();
        this._button();
    }
    _imagemDeFundo(){
        image(imageMenu, 0, 0, width, height);
    }
    _texto(){
        textAlign(CENTER);
        textFont(lettersFont);
        textSize(54);
        text('Knowledge is', width/2, height / 4);
        textSize(74);
        text('everything', width/2, height / 7 * 6);
        fill('#FFF');
    }
    _button(){
        //buttonMenuToFirstStage.y = height / 8 * 7;
        buttonMenuToFirstStage.y = height / 2;
        buttonMenuToFirstStage.draw();

        buttonInstructions.y = height / 3;
        buttonInstructions.draw();

        buttonCredits.y = height / 4.5;
        buttonCredits.draw();
    }
}