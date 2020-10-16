class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 100;
    
      this.boxPosition = width/2 + 50;
     this.boxY = height-50; 
	this.left = createSprite(this.boxPosition, this.boxY, 20,100);
	this.right = createSprite(this.boxPosition+200, this.boxY, 20, 100);
	this.base = createSprite(this.boxPosition+100, this.boxY+45,200,20);
	this.leftBody = Bodies.rectangle(this.boxPosition, this.boxY, 20,100,{isStatic:true});
	this.rightBody = Bodies.rectangle(this.boxPosition+200, this.boxY, 20,100,{isStatic:true});
	this.baseBody = Bodies.rectangle(this.boxPosition+100, this.boxY+45, 200,20,{isStatic:true});
	this.left.shapeColor="red";
	this.right.shapeColor="red";
	this.base.shapeColor="red";
	World.add(world, this.leftBody);
	World.add(world, this.rightBody);
  World.add(world, this.baseBody);
  
    }
    display(){
      var pos =this.leftBody.position;
      var pos =this.rightBody.position;
      var pos =this.baseBody.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, leftPos.y, this.width, this.height);
      rect(pos.x, rightPos.y, this.width, this.height);
      rect(pos.x, basePos.y, this.width, this.height);
    }
  };