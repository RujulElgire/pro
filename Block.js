class Block{
  constructor(x, y, width, height){
    var options = {
      restitution: 0.5,
      density: 0.0000000000001,
      friction: 1
    }
    this.x = x;
    this.y = y;
    this.width = width
    this.height = height

    this.body = Bodies.rectangle(x,y,width,height, options);
    World.add(world,this.body)
    
  }
display() {
  if(this.body.speed < 3){
  
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect( this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  
  
  var pos = this.body.position;
  var angle = this.body.angle;
 
  push ();
  translate (pos.x, pos.y);
  rotate (angle);
  rectMode(CENTER);
  strokeWeight(4);
  stroke('black');
  fill ('white');
  rect(0,0,this.width,this.height);
  pop ();
}
};
  