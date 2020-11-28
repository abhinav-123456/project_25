class PAPER{
constructor(this.x,this.y,r){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
this.image=loadImage("paper.png")
this.body = Bodies.circle(this.x,this.y,(this.r-20)/r,options)
this.r = r;
World.add(world,this.body);

}
display(){
    var paperpos =this.body.position;
    push()
    translate(paperpos.x,paperpos.y)
    ellipseMode(CENTER);
    fill(255);
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r);
    pop()
}

};