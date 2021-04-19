class Scenery{
    constructor(image, speedAxisX, speedAxisY){
        this.image = image;
        this.speedAxisX = speedAxisX;
        this.speedAxisY = speedAxisY;
        this.x1 = 0;
        this.x2 = width;
        this.y1 = 0;
        this.y2 = height;
    }
    show(){
        image(this.image, this.x1, 0, width, height);
        image(this.image, this.x2, 0, width, height);
    }
    moveAxisX(){
        this.x1 = this.x1 - this.speedAxisX;
        this.x2 = this.x2 - this.speedAxisX;
        if(this.x1 < -width + this.speedAxisX){
            this.x1 = 0;
            this.x2 = width;
        }
    }
    moveAxisY(){}
}