class Form{
    constructor(){
        this. title = createElement('h2')
        this. input = createInput("Name");
        this. button = createButton('Play');
        this. greeting = createElement('h3');
        
       
    }

    display(){
        
        this.title.html('batminton');
       this. title.position(500,300);

        console.log('i am in form.js')

        this.input.position(430,360);
        this.button.position(550,500);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
           player.name = this.input.value();
           playerCount +=1;
           player.index = playerCount;
           player.update();
           player.updateCount(playerCount);
           
        })
    }

    



}