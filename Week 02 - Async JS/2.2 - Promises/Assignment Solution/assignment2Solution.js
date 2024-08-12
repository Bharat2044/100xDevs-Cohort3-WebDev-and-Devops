// Base / Parent / Super class
class Shape {
  // constructor with color property
  constructor(color) {
    this.color = color;
  }
 
  // Method to paint shape with color
  paint() {
    console.log(`Painting with color ${this.color}`);
  }

  // Method to calculate area of shape
  area() {
    throw new Error("The area method must be implemented in the subclass");
  }

  // Method to get description of shape with color property
  getDescription() {
    return `A shape with color ${this.color}`;
  }
}

// Derived / Child / Sub class
class Rectangle extends Shape {
  // constructor with width, height and color properties
  constructor(width, height, color) {
    super(color); // Call the parent class constructor to set the color
    this.width = width;
    this.height = height;
  }

  // Method to calculate area of rectangle
  area() {
    return this.width * this.height;
  }

  // Method to get description of rectangle with width, height and color properties
  getDescription() {
    return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
  }
}

// Derived / Child / Sub class
class Circle extends Shape {
  // constructor with radius and color properties
  constructor(radius, color) {
    super(color); // Call the parent class constructor to set the color
    this.radius = radius;
  }

  // Method to calculate area of circle
  area() {
    return Math.PI * this.radius * this.radius;
  }

  // Method to get description of circle with radius and color properties
  getDescription() {
    return `A circle with radius ${this.radius} and color ${this.color}`;
  }
}

// Create a instance/object of Circle class
const circle = new Circle(20);

// Log the area of the circle
console.log(circle.area()); // Output: 1256.6370614359173

// Create a instance/object of Rectangle class
const rect1 = new Rectangle(2, 4, "red");

// Call area method using the instance and store the result in a variable
const area1 = rect1.area();

// Log the area of the rectangle
console.log(area1); // Output: 8

// Call paint method using the instance
rect1.paint(); // Output: Painting with color red

// Log the description of the rectangle
console.log(rect1.getDescription()); // Output: A rectangle with width 2, height 4, and color red

// Create a instance/object of Circle class
const circle1 = new Circle(5, "blue");

// Call area method using the instance and store the result in a variable
const area2 = circle1.area();

// Log the area of the circle
console.log(area2); // Output: 78.53981633974483

// Call paint method using the instance
circle1.paint(); // Output: Painting with color blue

// Log the description of the circle
console.log(circle1.getDescription()); // Output: A circle with radius 5 and color blue
