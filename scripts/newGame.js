class NewGame{
    keyPressed(){
        if(keyCode === 13){//Enter
            console.log('Começando...');
        };
    }
    setup(){
        //Crio o Menu com os botões gerenciadores
        soundMenu.loop();
        buttonMenuToFirstStage = new ButtonMenuToFirstStage('Start', 0, 0);
        buttonInstructions = new ButtonInstructions('Instructions', 0, 0);
        buttonCredits = new ButtonCredits('Credits', 0, 0);

        //Crio todas as instâncias do meu herói (Formas de andar, pular, sprites no geral).
        myHeroRunning = new Hero(matriz_hero_running, imageHeroRun, 0, 20, 175, 200, 251, 324);
        myHeroJumping = new Hero(matriz_hero_jumping, imageHeroJump, 0, 20, 175, 200, 240, 240);
        myHero.push(myHeroRunning);
        myHero.push(myHeroJumping);

        //Crio todas as instâncias de skills do meu herói
        //skill_one = new Skill(matriz_skill_one, imageSkillOne, 0, 20, 100, 100, 170, 170);
        books = new Books(5, 5);
    }
    draw(){
        this._imagemDeFundo();
        this._texto();
        this._button();
    }
    _imagemDeFundo(){
        image(imageMenu, 0, 0, width, height);
    }
    _texto(){
        textAlign(CENTER);
        textFont(font2);
        textSize(94);
        text('Adventures of Xnowden', width / 2, height / 5);
        stroke('#d82b00');
        strokeWeight(6);
        fill('#03324c');
    }
    _button(){
        //buttonMenuToFirstStage.y = height / 8 * 7;
        buttonMenuToFirstStage.y = height / 2.2;
        buttonMenuToFirstStage.x = width / 1.4;
        buttonMenuToFirstStage.draw();

        buttonInstructions.y = height / 3;
        buttonInstructions.x = width / 1.4;
        buttonInstructions.draw();

        buttonCredits.y = height / 4.5;
        buttonCredits.x = width / 1.4;
        buttonCredits.draw();
    }
}