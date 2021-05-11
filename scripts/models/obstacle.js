class Obstacle{
    constructor(image,speed){
        this.image = image;
        this.speed = speed;
        this.y = Math.floor(Math.random() * height);
        this.x = width;
    }
    
    filter(param){
        this.image.filter(param);
    }

    show(){
        this.x = this.x - this.speed;
        image(this.image, this.x, this.y, 100, 100);
    }

    visible(){
        if(obstacles[randomObstacles].x < -100){
            return true;
        }
        return false;
    }

    nextObstacle(){
        this.y = Math.floor(Math.random() * height);
        this.x = width;
    }

}