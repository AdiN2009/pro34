class Cannonball1 {
    constructor(x, y, width, height, archerAngle) {
      var options = {
        isStatic: true,
        
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("man.png");
      this.trajectory = [];
      this.isRemoved = false;
      this.archerAngle = archerAngle; 
      World.add(world, this.body);
    }
  
  
    // for trejactory
  
    // remove(index) {
    //   this.isRemoved = true;
    //   Matter.World.remove(world, this.body);
    //   delete playerArrows[index];
    // }
  
    shoot(archerAngle) {
      archerAngle += 90;
      archerAngle= archerAngle*(3.14/180)
      var velocity = p5.Vector.fromAngle(archerAngle)
     
      velocity.mult(0.5);

      Matter.Body.setStatic(this.body,false);

      Matter.Body.setVelocity(this.body, {
        x: velocity.x * (180 / 3.14),
        y: velocity.y * (180 / 3.14)
      });
  
     
    }
    
  
  
    display(){
      var tmpAngle;
      if (this.body.velocity.y === 0) {
        tmpAngle = this.archerAngle + 90;
      } else {
        tmpAngle =
          Math.atan(this.body.velocity.y / this.body.velocity.x) * (180 / 3.14);
      }
  
      Matter.Body.setAngle(this.body, tmpAngle);
  
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      
      pop();
  
      //optional code to add trajectory to the arrow
    
    }
  }
  
  
  