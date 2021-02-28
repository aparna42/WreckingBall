class Ground {
  constructor(x, y, width, height) {
    var options = {
     // setting the rectangle as static since we do not want it to fall off the screen
      isStatic: true
    }
    /* Creating the rectangle body to represent the ground by passing 
       x,y,width, height and the properties we defined in options */
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    strokeWeight(4);
    /* Displaying the rectangle shape that visually represents our rectangular 
     physics engine body - using x and y positions and width and height */
    rect(pos.x, pos.y, this.width, this.height);
  }
};