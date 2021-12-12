
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Cannonhead;
var canwheel;
var town;
var ground;
var cannonball;
var angle = -0.0001



var Canhead,Canwheel,Town,Cannonball;;

function preload() {
  canhead = loadImage("download.png");
  canwheel = loadImage("showthumb.png");
  town = loadImage("download (1).png");
  cannonball = loadImage("man.png");
}


function setup() {
  createCanvas(1400,1000);

  engine = Engine.create();
  world = engine.world;

  ground = new Base(0, height - 10, width * 2, 20, "#795548", true);

 
  var options = {
    isStatic: true
  };

 

    Cannonhead = new PlayerArcher(
    60,
    700,
    120,
    20
  );

  
  
                                                
  Cannonwheel = new sussy(
    40,
    740,
    70,
    70,
    true
  );
  angleMode(DEGREES);
}


function draw() 
{
  
 
  background(town);

  Engine.update(engine);
  Cannonhead.display();
  Cannonwheel.display();
  Cannonball.display();
  text("Score:" + Cannonball.body.position.x, 600,60);
  textSize(40);
}


function keyPressed() {
  if (keyCode === 32) {
  Cannonball = new Cannonball1(
    10,700,20,20,angle
   );
 
  }
}
     
    
      function keyReleased() {
        
          
          
            Cannonball.shoot(angle);
          
        }
      
        function gameOver() {
          swal(
            {
              title: `What a shot!!!`,
              text: "your score: "+ Cannonball.body.position.x,
              imageUrl:
                "https://raw.githubusercontent.com/visha;gaddam873/PiratesInvasion/main/assets/board.png",
              imageSize: "150x150",
              confirmButtonText: "Play Again"
            },
            function(isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            }
          );
        }