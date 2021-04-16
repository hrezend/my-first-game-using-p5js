class Life{
    constructor(image, inicial, maximo, type){
        this.amount = inicial;
        this.maximo = maximo;
        this.image = image;
        this.type = type;
        this.width = 25;
        this.height = 25;
        this.y = 20;
        this.x = 20;
    }

    draw(){
        if(this.type === 0){ //Life Hero
            for(let i = 0; i < this.amount; i++){
                const margem = i * 10;
                const posicao = this.x * (i + 1);
                image(this.image, posicao + margem, this.y, this.width, this.height);
            }
        }
        if(this.type === 1){ //Life Monster
            for(let i = 0; i < this.amount; i++){
                const margem = this.width + 10;
                const posicao = this.x;
                image(this.image, posicao - (i+1)*margem, this.y, this.width, this.height);
            }
        }
    }

    incrementLife(){
        if(this.amount < this.maximo){
            this.amount++;
        }
    }

    decrementLife(){
        if(this.amount > 0){
            this.amount--;
        }
    }
}