class Trap{
    constructor(image,speed){
        this.image = image;
        this.speed = speed;
        this.y = 0;
        this.x = Math.floor(Math.random() * width);
    }
    
    filter(param){
        this.image.filter(param);
    }

    show(){
        this.y = this.y + this.speed;
        image(this.image, this.x, this.y, 100, 100);
    }

    visible(){
        if(traps[randomTraps].y > height){
            return true;
        }
        return false;
    }

    nextTrap(){
        this.y = 0;
        this.x = Math.floor(Math.random() * width);
    }

}