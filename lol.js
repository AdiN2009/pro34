class sussy {
    constructor(x, y, width, height,isStatic) {
      const options = {
        isStatic: isStatic
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("showthumb.png");
      
  
      World.add(world, this.body);
  
      
    }
  
    display() {
      var pos = this.body.position;
      
  
      push();
      translate(pos.x, pos.y);
    
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  
      
        
        
      
     
          
      
          
      
  
     
  
