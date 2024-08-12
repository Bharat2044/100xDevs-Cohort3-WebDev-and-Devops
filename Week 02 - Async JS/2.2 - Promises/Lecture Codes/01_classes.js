/*
// rect1 object with width, height and color properties
const rect1 = {
    width: 2,
    height: 4,
    color: "red",
}

// Function to calculate area of rectangle 
function area1(rect) {
    return rect.width * rect.height;
}

// Function to paint rectangle with color
function paint1(rect) {
    console.log(`Painting with color ${rect.color}`);
}


// Call area function with rect1 object and store the result in a variable
const area2 = area1(rect1);
console.log(area2); // Output: 8

// Call paint function with rect1 object
paint1(rect1); // Output: Painting with color red
*/



// Rectangle class with area and paint methods
class Rectangle {
  // Constructor with width, height and color properties
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Method to calculate area of rectangle
  area() {
    const area = this.width * this.height;
    return area;
  }

  // Method to paint rectangle with color
  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

// Create a instance/object of Rectangle class
const rect1 = new Rectangle(2, 4, "red");

// Call area method using the instance and store the result in a variable
const area1 = rect1.area();

// Log the area of the rectangle
console.log(area1); // Output: 8

// Call paint method using the instance
rect1.paint(); // Output: Painting with color red

// Create another instance/object of Rectangle class
const rect2 = new Rectangle(3, 6, "blue");

// Call area method using the instance and store the result in a variable
const area2 = rect2.area();

// Log the area of the rectangle
console.log(area2); // Output: 18

// Call paint method using the instance
rect2.paint(); // Output: Painting with color blue