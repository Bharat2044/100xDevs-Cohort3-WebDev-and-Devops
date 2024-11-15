# **Week 14 - 14.1 | TypeScript Part 1**


## Assignment #1 - Write a function that calculates the sum of two arguments
<details>
<summary>Solution</summary>

```ts
function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(2, 3));
```
</details>


## Assignment #2 - Write a function that return true or false based on if a user is 18+
<details>
<summary>Solution</summary>

```ts
function isLegal(age: number): boolean {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2));
```
</details>


## Assignment #3 - Create a function that takes another function as input, and runs it after 1 second.
<details>
<summary>Solution</summary>

```ts
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("Hello Baccho...");
})
```
</details>


## Assignment #4 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
<details>
<summary>Solution</summary>

```ts
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User): boolean {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}
```
</details>


## Assignment #5 - Create a React component that takes todos as an input and renders them
- **Note** - Select typescript when initialising the react project using `npm create vite@latest`
<details>
<summary>Solution</summary>

```ts
// Todo.tsx
interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return (
    <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>    
    </div>
  )
}
```
</details>