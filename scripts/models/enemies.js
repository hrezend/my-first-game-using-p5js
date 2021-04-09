class Enemy extends Animation{
    constructor(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite, speed){
        super(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite);
        this.speed = speed;
        this.x = width;
    }
    move(){
        this.x = this.x - this.speed;
    }
    visible(){
        if(currentEnemy.x < -currentEnemy.widthOfSprite){
            return true;
        }
        return false;
    }
    nextEnemy(){
        this.x = width;
    }
}