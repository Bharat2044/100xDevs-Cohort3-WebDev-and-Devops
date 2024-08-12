// Circle class with area method and paint method
class Circle {
  // Constructor to initialize radius and color
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  } 

  // Method to calculate area of circle and return it
  area() {
    const area = this.radius * this.radius * Math.PI;
    return area;
  }

  // Method to paint the circle with the color
  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

// Create a circle object with radius 2 and color red
const circle = new Circle(2, "red");

// Log the circle object
console.log(circle); // Circle { radius: 2, color: 'red' }

// Call paint method on circle object
const area = circle.area();

// Log the area of the circle
console.log(area); // 12.566370614359172

// Call paint method on circle object
circle.paint(); // Painting with color red
