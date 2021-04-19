class LongScenery{
    constructor(image, speedAxisX, speedAxisY, width){
        this.image = image;
        this.speedAxisX = speedAxisX;
        this.speedAxisY = speedAxisY;

        this.baseWidth = width;
        this.x1 = 0;
        this.x2 = this.baseWidth;

        this.y1 = 0;
        this.y2 = height;
    }
    show(){
        image(this.image, this.x1, 0, 0, height);
        image(this.image, this.x2, 0, 0, height);
    }
    moveAxisX(){
        this.x1 = this.x1 - this.speedAxisX;
        this.x2 = this.x2 - this.speedAxisX;

        if(this.x1 < -this.baseWidth){
            this.x1 = this.baseWidth;
        }
        if(this.x2 < -this.baseWidth){
            this.x2 = this.baseWidth;
        }
    }
    moveAxisY(){}
}