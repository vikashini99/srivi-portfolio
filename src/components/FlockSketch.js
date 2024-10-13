//import React from "react";
//import Sketch from "react-p5";


//const FlockSketch = () => {
  let flock = [];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(640, 360).parent(canvasParentRef);

    // Create the initial flock of boids
    for (let i = 0; i < 100; i++) {
      let b = new Boid(p5, p5.width / 2, p5.height / 2);
      flock.push(b);
    }
  };

  const draw = (p5) => {
    p5.background(0);
    flock.forEach((boid) => {
      boid.run(flock);
    });
  };

  const mouseDragged = (p5) => {
    flock.push(new Boid(p5, p5.mouseX, p5.mouseY));
  };

  return <Sketch setup={setup} draw={draw} mouseDragged={mouseDragged} />;
};

// Boid class to represent each boid
class Boid {
  constructor(p5, x, y) {
    this.p5 = p5;
    this.acceleration = p5.createVector(0, 0);
    this.velocity = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.position = p5.createVector(x, y);
    this.size = 3.0;
    this.maxSpeed = 3;
    this.maxForce = 0.05;
    this.color = p5.color(p5.random(256), 255, 255);
  }

  run(boids) {
    this.flock(boids);
    this.update();
    this.borders();
    this.render();
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  flock(boids) {
    let separation = this.separate(boids);
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);

    separation.mult(1.5);
    alignment.mult(1.0);
    cohesion.mult(1.0);

    this.applyForce(separation);
    this.applyForce(alignment);
    this.applyForce(cohesion);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  render() {
    let theta = this.velocity.heading() + this.p5.radians(90);
    this.p5.fill(this.color);
    this.p5.noStroke();
    this.p5.push();
    this.p5.translate(this.position.x, this.position.y);
    this.p5.rotate(theta);
    this.p5.beginShape();
    this.p5.vertex(0, -this.size * 2);
    this.p5.vertex(-this.size, this.size * 2);
    this.p5.vertex(this.size, this.size * 2);
    this.p5.endShape(this.p5.CLOSE);
    this.p5.pop();
  }

  borders() {
    if (this.position.x < -this.size) this.position.x = this.p5.width + this.size;
    if (this.position.y < -this.size) this.position.y = this.p5.height + this.size;
    if (this.position.x > this.p5.width + this.size) this.position.x = -this.size;
    if (this.position.y > this.p5.height + this.size) this.position.y = -this.size;
  }

  separate(boids) {
    let desiredSeparation = 25.0;
    let steer = this.p5.createVector(0, 0);
    let count = 0;

    boids.forEach((boid) => {
      let d = this.p5.dist(this.position.x, this.position.y, boid.position.x, boid.position.y);
      if (d > 0 && d < desiredSeparation) {
        let diff = this.p5.createVector(this.position.x - boid.position.x, this.position.y - boid.position.y);
        diff.normalize();
        diff.div(d);
        steer.add(diff);
        count++;
      }
    });

    if (count > 0) {
      steer.div(count);
    }

    if (steer.mag() > 0) {
      steer.normalize();
      steer.mult(this.maxSpeed);
      steer.sub(this.velocity);
      steer.limit(this.maxForce);
    }
    return steer;
  }

  align(boids) {
    let neighborDist = 50;
    let sum = this.p5.createVector(0, 0);
    let count = 0;

    boids.forEach((boid) => {
      let d = this.p5.dist(this.position.x, this.position.y, boid.position.x, boid.position.y);
      if (d > 0 && d < neighborDist) {
        sum.add(boid.velocity);
        count++;
      }
    });

    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxSpeed);
      let steer = this.p5.createVector(sum.x - this.velocity.x, sum.y - this.velocity.y);
      steer.limit(this.maxForce);
      return steer;
    }
    return this.p5.createVector(0, 0);
  }

  cohesion(boids) {
    let neighborDist = 50;
    let sum = this.p5.createVector(0, 0);
    let count = 0;

    boids.forEach((boid) => {
      let d = this.p5.dist(this.position.x, this.position.y, boid.position.x, boid.position.y);
      if (d > 0 && d < neighborDist) {
        sum.add(boid.position);
        count++;
      }
    });

    if (count > 0) {
      sum.div(count);
      return this.seek(sum);
    }
    return this.p5.createVector(0, 0);
  }

  seek(target) {
    let desired = this.p5.createVector(target.x - this.position.x, target.y - this.position.y);
    desired.normalize();
    desired.mult(this.maxSpeed);
    let steer = this.p5.createVector(desired.x - this.velocity.x, desired.y - this.velocity.y);
    steer.limit(this.maxForce);
    return steer;
  }
}

//export default FlockSketch;
