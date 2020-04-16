let snake;
let num = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(500, 500);
  w = floor(width / num);
  h = floor(height / num);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}
function draw() {
    scale(num);
    background("grey");
    if (snake.eat(food)) {
      foodLocation();
    }
    snake.update();
    snake.show();
  
    if (snake.endGame()) {
        print("END GAME");
      noLoop();
    }
  
    noStroke();
    fill("red");
    rect(food.x, food.y, 1, 1);
  }

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  }
}