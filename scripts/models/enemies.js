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
        if(enemies[randomEnemy].x < -enemies[randomEnemy].widthOfSprite){
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

    hited(skill){
        noFill();
        const precision = 0.7;
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.width * precision,
            this.height * precision,
            skill.centerX,
            skill.centerY,
            skill.bodyWidth * 2,
            skill.bodyHeight * 4
        );
        return colisao;
    }
}