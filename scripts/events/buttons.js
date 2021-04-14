class ButtonMenuToIntroduction{
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
        currentScenery = 'introduction';
        sceneries[currentScenery].setup();
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
        this.button.remove();
        buttonMenuToIntroduction.removeButton();
        buttonCredits.removeButton();
        currentScenery = 'instructions';
        sceneries[currentScenery].setup();
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
        this.button.remove();
        buttonMenuToIntroduction.removeButton();
        buttonInstructions.removeButton();
        currentScenery = 'credits';
        sceneries[currentScenery].setup();
    }
}