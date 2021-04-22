class Books{
    constructor(inicial, maximo){
        this.maximo = maximo;
        this.amount = inicial;
        this.largura = 120;
        this.altura = 120;
        this.xInicial = 20;
        this.y = 10;
    }
    
    draw(){
        for(let i = 0; i < this.amount; i++){
            const margem = i * 30;
            const posicao = this.xInicial * (i + 1);
            image(imageBook, posicao + margem, this.y, this.largura, this.altura);
        }
        if(this.amount == 0){
            image(imageBookBlocked, this.xInicial, this.y, this.largura, this.altura);
        }
    }
    
    rechargeFull(){
        this.amount = this.maximo;
    }

    incrementAmount(){
        if(this.amount < this.maximo){
            this.amount++;
        }
    }
    
    decrementAmount(){
        if(this.amount > 0){
            this.amount--;
        }
    } 
}