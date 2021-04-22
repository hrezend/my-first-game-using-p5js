class Animation{
    constructor(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite){
        this.matriz = matriz;
        this.image = image;
        this.widthOfSprite = widthOfSprite;
        this.heightOfSprit = heightOfSprit;
        this.x = x;
        this.variationY = variationY;
        this.y = height - this.heightOfSprit - this.variationY;
        this.widthInSprite = widthInSprite;
        this.heightInSprite = heightInSprite;
        this.currentFrame = 0;
    }

    filter(param){
        this.image.filter(param);
    }

    show(){
        image(this.image, this.x, this.y, this.widthOfSprite, this.heightOfSprit, this.matriz[this.currentFrame][0], this.matriz[this.currentFrame][1], this.widthInSprite, this.heightInSprite);
        this.animate();
    }

    animate(){
        this.currentFrame++;
        if(this.currentFrame >= this.matriz.length - 1){
            this.currentFrame = 0;
        }
    }
}