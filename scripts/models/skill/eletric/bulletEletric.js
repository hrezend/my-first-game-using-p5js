class BulletsEletric{
    constructor(x, y, height, scale, speed){
		this.scale = scale;
		this.speed = speed;
		this.bodyHeight = height;
		this.bodyWidth = 5*this.scale;
        this.init(x, y);
        this.currentFrame = 0;
        this.image = imageEletric;
        this.matriz = matriz_eletric;
	}

    init(x, y){
		this.centerX = x;
		this.centerY = y;
		this.body();
	}

    body(){
		this.bodyX1 = this.centerX - this.bodyWidth/2;
		this.bodyY1 = this.centerY + this.bodyHeight/2;
		this.bodyX2 = this.centerX + this.bodyWidth/2;
        this.bodyY2 = this.centerY - this.bodyHeight/2;
    }

    show(){
        this.centerX += this.speed;
		this.init(this.centerX, this.centerY);
        image(this.image, this.bodyX1, this.bodyY1, 170, 170, this.matriz[this.currentFrame][0], this.matriz[this.currentFrame][1], 170, 170);
        this.animate();
    }

    filter(param){
        this.image.filter(param);
    }

    animate(){
        this.currentFrame++;
        if(this.currentFrame >= this.matriz.length - 1){
            this.currentFrame = 0;
        }
    }

}