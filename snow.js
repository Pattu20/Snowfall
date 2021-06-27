class snow{
    constructor(){
        var options={
            density:1,
            friction:0.5
        }
        this.body = Bodies.rectangle(200,200,50,50, options);
        this.image=loadImage("snow4.webp");
        World.add(world,this.body);
    }
    display(){
     image(this.image,40,50,20,20);   
    }
}