// public/sketch.js
function setup() {
    const canvas = createCanvas(windowWidth, windowHeight); // Create a canvas
    canvas.parent(document.body); // Append the canvas directly to the body
    background(200); // Set a light gray background
  }
  
  function draw() {
    background(200); // Clear the background
    fill(255, 0, 0); // Set fill color to red
    ellipse(mouseX, mouseY, 50, 50); // Draw a circle that follows the mouse
  }
  