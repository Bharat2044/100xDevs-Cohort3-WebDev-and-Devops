// Create a Shape class with an area function
class Shape {
    // Define the area function of the Shape class 
    area(): void {
        // Print a message to the console
        console.log("This is the area of the shape");
    }
}

// Create a Circle class that extends the Shape class
class Circle extends Shape {

    // Define the area function of the Circle class
    area(): void {
        // Print a message to the console
        console.log("This is the area of the circle");
    }

    // Define the perimeter function of the Circle class
    perimeter(): void {
        // Print a message to the console
        console.log("This is the perimeter of the circle");
    }
}

// Create a new Shape object 
let shape = new Shape();

// Call the area function of the shape object 
shape.area(); // This is the area of the shape

// Create a new Circle object
let circle = new Circle();

// Call the area and perimeter functions of the circle object
circle.area(); // This is the area of the circle
circle.perimeter(); // This is the perimeter of the circle