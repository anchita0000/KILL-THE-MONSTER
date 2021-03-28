class Hero{
    constructor(x,y,r){
        var opt={
            density :1,
            frictionAir : 1
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("");
    this.body=Bodies.circle(this.x,this.y,(this.r)/2,opt);
    World.add(world,this.body);
  }
  display(){
 var heroPos=this.body.position;
push()
translate(heroPos.x,heroPos.y);
pop()
  }
  }
