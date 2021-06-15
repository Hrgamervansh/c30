class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.Visibility=255
    this.image = loadImage("sprites/enemy.png");
  }
display(){
  //console.log(this.body.speed);
  if((this.body.speed)<3){
    super.display();
  }
  else{
 World.remove(world,this.body);
 tint(255,this.Visibility);
 this.Visibility=this.Visibility-5;
  }
}


};