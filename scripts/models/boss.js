class Boss extends Animation{
    constructor(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite){
        super(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite);
        this.x = width;
        this.width = widthOfSprite;
        this.height = heightOfSprit;
        this.variationY = variationY;
    }

    hide(){
        this.x = -width;
    }

    notHide(){
        this.x = width - this.width;
    }

    hited(skill){
        noFill();
        const precision = .7
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