## Routes and request bodies:

### 1. **Signup**

-   **POST** `localhost:3000/signup`
-   **Request Body**:
    ```json
    {
        "email": "user@example.com",
        "password": "Password@123",
        "name": "John Doe"
    }
    ```

### 2. **Signin**

-   **POST** `localhost:3000/signin`
-   **Request Body**:
    ```json
    {
        "email": "user@example.com",
        "password": "Password@123"
    }
    ```

### 3. **Create Todo**

-   **POST** `localhost:3000/todo`
-   **Request Body**:
    ```json
    {
        "title": "Buy groceries",
        "done": false,
        "deadline": "2024-09-30T15:00:00Z"
    }
    ```

### 4. **Get Todos**

-   **GET** `localhost:3000/todo`

### 5. **Update Todo**

-   **PUT** `localhost:3000/todo/:id`
-   **Request Body**:
    ```json
    {
        "title": "Buy milk and eggs",
        "done": true
    }
    ```

### 6. **Delete Todo**

-   **DELETE** `localhost:3000/todo/:id`

For routes requiring authentication, include the token in the `Authorization` header:

```
Authorization: Bearer <your_token>
```
