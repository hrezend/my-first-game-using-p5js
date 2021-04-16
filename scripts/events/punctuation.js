class Punctuation{
    constructor(){
        this.points = 0;
    }
    progress(){
        return this.points;
    }
    show(){
        let position = height - 10;
        let progress = map(this.points, 0, 1000, 10, width);

        if(this.points < 300){
            strokeWeight(0);
            fill(255,0,0);
            rect(0, position, progress, 10, 0);
            noFill();
            rect(0, position, width, 10, 0);
            image(imageMarkerProgressZumbi, progress - 30, height - 50, 50, 50);
        }
        else if(this.points > 300 && this.points < 900){
            strokeWeight(0);
            fill(0,255,0);
            rect(0, position, progress, 10, 0);
            noFill();
            rect(0, position, width, 10, 0);
            image(imageMarkerBrain, progress - 30, height - 45, 50, 50);
        }
        else if(this.points > 900){
            strokeWeight(0);
            fill(0,255,255);
            rect(0, position, progress, 10, 0);
            noFill();
            rect(0, position, width, 10, 0);
            image(imageMarkerEistein, progress - 35, height - 45, 50, 50);
        }
    }

    incrementPoints(value){
        if( this.points == 1000){
            return false;
        }

        if( (this.points + value) > 1000 ){
            this.points = 1000;
        }
        else{
            this.points = this.points + value;
        }
    }

    decrementPoints(value){
        if( this.points == 0){
            return false;
        }

        if( (this.points - value) < 0 ){
            this.points = 0;
        }
        else{
            this.points = this.points - value;
        }
    }
}