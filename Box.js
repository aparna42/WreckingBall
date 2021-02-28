class Box {
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 0.04,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display() {
    /* Note: only the actual physics engine body created by Bodies.rectangle gets
    rotated and translated. So we must use translate() and rotate() to rotate our
    rectangle shape (created by rect()) as per the body's movements */

    //we get the position of our rectangular physics engine body so we
    //can translate our rectangle shape using it

    var pos = this.body.position;

    //we get the angle of our rectangular body so we
    //can rotate our rectangle shape using it

    var angle = this.body.angle;
    push();
    //translating the position of the rectangle shape based on the 
    //physics engine body
    translate(pos.x, pos.y);

    //rotating the rectangle shape based on the angle of the physics engine body
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill(255);
    //displaying the rectangle
    rect(0, 0, this.width, this.height);
    pop();
  }
}