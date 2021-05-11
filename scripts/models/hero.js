class Hero extends Animation{
    constructor(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite){
        super(matriz, image, x, variationY, widthOfSprite, heightOfSprit, widthInSprite, heightInSprite);
        this.variationY = variationY;
        this.baseY = height - this.heightOfSprit - variationY;
        this.y = this.baseY;
        this.gravity = 3;
        this.speedJump = 0;
        this.speedWalk = 20;
        this.heightJump = 34;
        this.amountJumps = 0;
        this.invencible = false;
        this.rechargingSpecialAttack = false;
    }

    attack(){
        bulletsOfBooks.push(new BulletsOfBooks(this.x, this.y + 50, 10, 3, 25));
        books.decrementAmount();
        soundCasting.play();
    }

    special_attack(){
        if(this.rechargingSpecialAttack){
            return false;
        }

        this.rechargingSpecialAttack = true;
        bulletsEletric.push(new BulletsEletric(this.x, this.y + 50, 10, 3, 25));
        soundEletric.play();

        setTimeout(() => {
            this.rechargingSpecialAttack = false;
        }, 10000);
    }

    jump(){
        if(this.amountJumps < 2){
            soundJump.play();
            this.speedJump =- this.heightJump;
            this.amountJumps++;
        }
    }

    walk(direction){
        if(direction === 'left' && this.x > (0.025 * width)){
            myHero[2].x = myHero[0].x;
            myHero[2].y = myHero[0].y;
            currentHero = 2;
            this.x -= this.speedWalk;
        }
        else if(direction === 'right' && this.x < (0.85 * width) && currentScenery === 'secondStage'){
            this.x += this.speedWalk;
        }
        else if(direction === 'right' && this.x < (0.70 * width) && currentScenery === 'thirdStage'){
            this.x += this.speedWalk;
        }
    }

    move(limite){
        if(this.x < limite){
            this.x += this.speedWalk;
        }
        else{
            myHero[3].x = myHero[0].x;
            currentHero = 3;
        }
    }

    float(){
        if(this.amountJumps == 2){
            myHero[1].x = myHero[0].x;
            myHero[1].y = myHero[0].y;
            myHero[1].show();
            currentHero = 1;
        }

        this.y = this.y + this.speedJump;
        this.speedJump = this.speedJump + this.gravity;

        if(this.y > this.baseY){
            this.y = this.baseY;
            this.amountJumps = 0;
            currentHero = 0;
        }
    }

    becomeInvencible(){
        this.invencible = true;
        setTimeout(() => {
            this.invencible = false;
        }, 1000);
    }

    collidingWithEnemy(enemy){
        if(this.invencible){
            return false;
        }
        //let LinhaCincoBaixoPraCima = line(this.x + 80, this.y + 40, this.x + 160, this.y + 40);
        //let LinhaQuatroBaixoPraCima = line(this.x + 30, this.y + 80, this.x + 160, this.y + 80);
        //let LinhaTresBaixoPraCima = line(this.x + 20, this.y + 120, this.x + 150, this.y + 120);
        //let LinhaDoisBaixoPraCima = line(this.x + 20, this.y + 160, this.x + 150, this.y + 160);
        //let LinhaUmBaixoPraCima = line(this.x + 20, this.y + 190, this.x + 150, this.y + 190);

        //let LinhaUmEsquerdaParaDireita = line(enemy.x + 100, enemy.y + 80, enemy.x + 100, enemy.y + 340);
        //let LinhaDoisEsquerdaParaDireita = line(enemy.x + 200, enemy.y + 80, enemy.x + 200, enemy.y + 340);
        //let LinhaTresEsquerdaParaDireita = line(enemy.x + 300, enemy.y + 80, enemy.x + 300, enemy.y + 340);
        //let LinhaQuatroEsquerdaParaDireita = line(enemy.x + 350, enemy.y + 80, enemy.x + 350, enemy.y + 340);

        //LinhaUmBaixoPraCima + LinhaUmEsquerdaParaDireita
        let hit1 = collideLineLine(this.x + 20, this.y + 190, this.x + 150, this.y + 190, enemy.x + 100, enemy.y + 80, enemy.x + 100, enemy.y + 340);
        let hit2 = collideLineLine(this.x + 20, this.y + 190, this.x + 150, this.y + 190, enemy.x + 200, enemy.y + 80, enemy.x + 200, enemy.y + 340);
        let hit3 = collideLineLine(this.x + 20, this.y + 190, this.x + 150, this.y + 190, enemy.x + 300, enemy.y + 80, enemy.x + 300, enemy.y + 340);
        let hit4 = collideLineLine(this.x + 20, this.y + 190, this.x + 150, this.y + 190, enemy.x + 350, enemy.y + 80, enemy.x + 350, enemy.y + 340);
        //LinhaDoisBaixoPraCima + LinhaUmEsquerdaParaDireita
        let hit5 = collideLineLine(this.x + 20, this.y + 160, this.x + 150, this.y + 160, enemy.x + 100, enemy.y + 80, enemy.x + 100, enemy.y + 340);
        let hit6 = collideLineLine(this.x + 20, this.y + 160, this.x + 150, this.y + 160, enemy.x + 200, enemy.y + 80, enemy.x + 200, enemy.y + 340);
        let hit7 = collideLineLine(this.x + 20, this.y + 160, this.x + 150, this.y + 160, enemy.x + 300, enemy.y + 80, enemy.x + 300, enemy.y + 340);
        let hit8 = collideLineLine(this.x + 20, this.y + 160, this.x + 150, this.y + 160, enemy.x + 350, enemy.y + 80, enemy.x + 350, enemy.y + 340);
        //LinhaTresBaixoPraCima + LinhaUmEsquerdaParaDireita
        let hit9 = collideLineLine(this.x + 20, this.y + 120, this.x + 150, this.y + 120, enemy.x + 100, enemy.y + 80, enemy.x + 100, enemy.y + 340);
        let hit10 = collideLineLine(this.x + 20, this.y + 120, this.x + 150, this.y + 120, enemy.x + 200, enemy.y + 80, enemy.x + 200, enemy.y + 340);
        let hit11 = collideLineLine(this.x + 20, this.y + 120, this.x + 150, this.y + 120, enemy.x + 300, enemy.y + 80, enemy.x + 300, enemy.y + 340);
        let hit12 = collideLineLine(this.x + 20, this.y + 120, this.x + 150, this.y + 120, enemy.x + 350, enemy.y + 80, enemy.x + 350, enemy.y + 340);
        //LinhaQuatroBaixoPraCima + LinhaUmEsquerdaParaDireita
        let hit13 = collideLineLine(this.x + 30, this.y + 80, this.x + 160, this.y + 80, enemy.x + 100, enemy.y + 80, enemy.x + 100, enemy.y + 340);
        let hit14 = collideLineLine(this.x + 30, this.y + 80, this.x + 160, this.y + 80, enemy.x + 200, enemy.y + 80, enemy.x + 200, enemy.y + 340);
        let hit15 = collideLineLine(this.x + 30, this.y + 80, this.x + 160, this.y + 80, enemy.x + 300, enemy.y + 80, enemy.x + 300, enemy.y + 340);
        let hit16 = collideLineLine(this.x + 30, this.y + 80, this.x + 160, this.y + 80, enemy.x + 350, enemy.y + 80, enemy.x + 350, enemy.y + 340);
        //LinhaCincoBaixoPraCima + LinhaUmEsquerdaParaDireita
        let hit17 = collideLineLine(this.x + 80, this.y + 40, this.x + 160, this.y + 40, enemy.x + 100, enemy.y + 80, enemy.x + 100, enemy.y + 340);
        let hit18 = collideLineLine(this.x + 80, this.y + 40, this.x + 160, this.y + 40, enemy.x + 200, enemy.y + 80, enemy.x + 200, enemy.y + 340);
        let hit19 = collideLineLine(this.x + 80, this.y + 40, this.x + 160, this.y + 40, enemy.x + 300, enemy.y + 80, enemy.x + 300, enemy.y + 340);
        let hit20 = collideLineLine(this.x + 80, this.y + 40, this.x + 160, this.y + 40, enemy.x + 350, enemy.y + 80, enemy.x + 350, enemy.y + 340);
        
        if(hit1 || hit2 || hit3 || hit4 || hit5 || hit6 || hit7 || hit8 || hit9 || hit10 || hit11 || hit12 || hit13 || hit14 || hit15 || hit16 || hit17 || hit18 || hit19 || hit20){
            return true;
        }
        return false;
    }

    collidingWithTrap(trap){
        if(this.invencible){
            return false;
        }

        noFill();
        const precision = 0.8;
        const colisao = collideRectRect(
            this.x + 15,
            this.y,
            this.widthOfSprite * precision,
            this.heightOfSprit * precision,
            trap.x,
            trap.y,
            100,
            100
        );
        return colisao;
    }

    collidingWithObstacle(obs){
        if(this.invencible){
            return false;
        }

        noFill();
        const precision = 0.8;
        const colisao = collideRectRect(
            this.x + 15,
            this.y,
            this.widthOfSprite * precision,
            this.heightOfSprit * precision,
            obs.x,
            obs.y,
            100,
            100
        );
        return colisao;
    }

    //fim da classe
}