class Rope {
  //the constructor receives a body and a point as parameters when
  //a new rope object is created
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 250,
    };

    this.pointB = pointB;
    //creating the constraint by applying all the properties we defined in options
    this.rope = Constraint.create(options);
    //adding the constraint to the physics engine's world
    World.add(world, this.rope);
  }


  display() {
    //getting the end points of the constraint 
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();

    stroke(48, 22, 8);
    strokeWeight(3);
    //displaying the line that represents the constraint
    line(pointB.x, pointB.y, pointA.x, pointA.y);

    pop();
  }
}
