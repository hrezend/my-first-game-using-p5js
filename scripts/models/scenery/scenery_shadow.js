class Shadow{
    constructor(image, speed, posY,largura, height){
        this.posY = posY;
        this.height = height;
        this.image = image;
        this.speed = speed;
        this.x1 = 0;
        this.x2 = width;
        this.largura = largura;
    }

    show(){
        image(this.image, this.x1,this.posY, this.largura, this.height);
        image(this.image, this.x2, this.posY, this.largura, this.height);
    }
      
    moveAxisX(){
        this.x1 = this.x1 - this.speed;
        this.x2 = this.x2 - this.speed;
        
        if(this.x1 < -width){
          this.x1 = width;
        }
         if(this.x2 < -width){
          this.x2 = width;
        }   
    } 
}