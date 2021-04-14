class NewGame{
    keyPressed(){
        if(keyCode === 13){//Enter
            console.log('Começando...');
        };
    }
    
    setup(){
        //Crio o Menu com os botões gerenciadores
        if(!soundMenu.isLooping()){
            soundMenu.loop();   
        }
        buttonMenuToIntroduction = new ButtonMenuToIntroduction('New Game', 0, 0);
        buttonInstructions = new ButtonInstructions('Instructions', 0, 0);
        buttonCredits = new ButtonCredits('Credits', 0, 0);

        //Crio todas as instâncias do meu herói (Formas de andar, pular, sprites no geral).
        myHeroRunning = new Hero(matriz_hero_running, imageHeroRun, 0, 20, 175, 200, 251, 324);
        myHeroJumping = new Hero(matriz_hero_jumping, imageHeroJump, 0, 20, 175, 200, 240, 240);
        myHero.push(myHeroRunning);
        myHero.push(myHeroJumping);

        //Crio todas as instâncias de skills do meu herói
        books = new Books(5, 5);

        //Crio a instância da barra de progresso
        score = new Punctuation();
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
        buttonMenuToIntroduction.y = height / 1.24;
        buttonMenuToIntroduction.x = width / 1.25;
        buttonMenuToIntroduction.draw();

        buttonInstructions.y = height / 1.11;
        buttonInstructions.x = width / 1.40;
        buttonInstructions.draw();

        buttonCredits.y = height / 1.11;
        buttonCredits.x = width / 1.13;
        buttonCredits.draw();
    }
}