class Paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, this.radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
    
      strokeWeight(4);
      stroke("blue");
      
      fill("red");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };
  