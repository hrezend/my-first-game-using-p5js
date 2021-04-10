class Enemy extends Animation{
    constructor(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite, speed){
        super(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite);
        this.speed = speed;
        this.x = width;
        this.width = widthOfSprite;
        this.height = heightOfSprit;
        this.variationY = variationY;
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

    hide(){
        this.x = -width;
    }

    hited(skill_one){
        noFill();
        const precision = .7
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.width * precision,
            this.height * precision,
            skill_one.centerX,
            skill_one.centerY,
            skill_one.bodyWidth * 2,
            skill_one.bodyHeight * 4
        );
        return colisao;
    }
}