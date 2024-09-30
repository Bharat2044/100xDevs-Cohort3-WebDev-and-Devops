# **Week 08 - Offline Videos | Mongo Deep Dive**

## Create a course selling website

### Description
You need to implement a course selling app. Make sure you setup your own mongodb instance before starting. 
It needs to support two types of users - 
1. Admins
2. Users

Admins are allowed to signgup, signgin, create courses.
Users are allowed to signgup, signgin, view courses, purchase courses.
This in the real world would translate to an app like udemy.

Use jwts for authentication.
For this one, in every authenticated requests, you need to send the jwt in headers (Authorization : "Bearer <actual token>").

You need to use mongodb to store all the data persistently.

## Routes
### Admin Routes:
- POST /admin/signup
  - Description: Creates a new admin account.
  - Input: Body: { username: 'admin', password: 'pass' }
  - Output: { message: 'Admin created successfully' }
- POST /admin/signin
  - Description: Logs in an admin account.
  - Input: Body: { username: 'admin', password: 'pass' }
  - Output: { token: 'your-token' }
- POST /admin/courses
  - Description: Creates a new course.
  - Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  - Output: { message: 'Course created successfully', courseId: "new course id" }
- GET /admin/courses
  - Description: Returns all the courses.
  - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  - Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }, ... ] }

### User routes
- POST /users/signup
  - Description: Creates a new user account.
  - Input: { username: 'user', password: 'pass' }
  - Output: { message: 'User created successfully' }
- POST /users/signin
  - Description: Logs in a user account.
  - Input: { username: 'user', password: 'pass' }
  - Output: { token: 'your-token' }
- GET /users/courses
  - Description: Lists all the courses.
  - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  - Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }, ... ] }
- POST /users/courses/:courseId
  - Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  - Output: { message: 'Course purchased successfully' }
- GET /users/purchasedCourses
  - Description: Lists all the courses purchased by the user.
  - Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  - Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com'}, ... ] }


## Assignment #1 - Add 2 more routes update and delete for admin
- PUT /admin/courses
  - Description: Update a coourse by courseId
  - Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { courseId: 'course-id', title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  - Output: { message: 'Course updated successfully }

- DELETE /admin/courses
  - Description: Delete a course by courseId.
  - Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { courseId: 'course-id' }
  - Output: { message: 'Course deleted successfully' }

## Assignment #2 - Validate Input using `Zod`, Insert hashed-password in database instead of original password while signup using `bcrypt` library and Handle error using try-catch block.