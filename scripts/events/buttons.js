class ButtonMenuToFirstStage{
    constructor(text, x, y){
        this.text = text;
        this.x = x;
        this.y = y;
        this.button = createButton(this.text);
        this.button.addClass('button-stages');
        this.button.mousePressed(() => this._changeScene());
    }
    draw(){
        this.button.position(this.x, this.y);
        //this.button.center('horizontal');
    }
    removeButton(){
        this.button.remove();
    };
    _changeScene(){
        this.button.remove();
        buttonInstructions.removeButton();
        buttonCredits.removeButton();
        currentScenery = 'firstStage';
        firstStage.setup();
    }
}

class ButtonInstructions{
    constructor(text, x, y){
        this.text = text;
        this.x = x;
        this.y = y;
        this.button = createButton(this.text);
        this.button.addClass('button-stages');
        this.button.mousePressed(() => this._changeScene());
    }
    draw(){
        this.button.position(this.x, this.y);
        //this.button.center('horizontal');
    }
    removeButton(){
        this.button.remove();
    };
    _changeScene(){
        confirm('Escape the imminent dangers of social media and become a wise man.');
        confirm('Press Space to jump \nPress Space 2x to double jump \nPress F to kill the monsters');
    }
}

class ButtonCredits{
    constructor(text, x, y){
        this.text = text;
        this.x = x;
        this.y = y;
        this.button = createButton(this.text);
        this.button.addClass('button-stages');
        this.button.mousePressed(() => this._changeScene());
    }
    draw(){
        this.button.position(this.x, this.y);
        //this.button.center('horizontal');
    }
    removeButton(){
        this.button.remove();
    };
    _changeScene(){
        confirm('MATA68 - PROJECT \nDiscentes: Hérson Rezende, João Gabriel e Djair Maykon \nContact: herson.reis@ufba.br');
    }
}