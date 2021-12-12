class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.collapse = false;
      this.image = loadImage("download.png");
      
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body, 10);
    }
  
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      console.log(angle)
  
      if (keyIsDown(DOWN_ARROW) && angle < 40) {
        angle += 1;
        Matter.Body.setAngle(this.body, angle);
      }
  
      if (keyIsDown(UP_ARROW) && angle > -63) {
        angle -=1;
        Matter.Body.setAngle(this.body, angle);
      }
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  