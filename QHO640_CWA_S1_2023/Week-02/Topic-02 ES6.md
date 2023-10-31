---
sidebar_position: 3
---

# Topic-02: ES6 (ECMAScript 2015)

Certainly! ES6, also known as ECMAScript 2015, brought significant improvements and new features to JavaScript, making the language more expressive and developer-friendly. Let's explore some key ES6 features with examples and comparisons to their ES5 counterparts:

### 1. **let and const for Variable Declaration:**

**ES5 (var):**
```javascript
var x = 10; // Functional-scoped variable declaration
```

**ES6 (let and const):**
```javascript
let y = 20; // Block-scoped variable declaration
const PI = 3.14; // Constant value (immutable)
```

- **Explanation:** `let` is block-scoped, allowing the declaration of variables limited to the block they are defined in. `const` declares constants that cannot be reassigned, providing immutable variables.

### 2. **Arrow Functions:**

**ES5 (Function Declarations):**
```javascript
function add(a, b) {
  return a + b;
}
```

**ES6 (Arrow Functions):**
```javascript
const add = (a, b) => a + b;
```

- **Explanation:** Arrow functions provide a more concise syntax, lexical `this`, and implicit return for single expressions, making code more readable and reducing verbosity.

### 3. **Template Literals:**

**ES5 (String Concatenation):**
```javascript
var name = 'Alice';
var greeting = 'Hello, ' + name + '!';
```

**ES6 (Template Literals):**
```javascript
let name = 'Alice';
let greeting = `Hello, ${name}!`;
```

- **Explanation:** Template literals allow embedding expressions within `${}` and multiline strings, improving readability and simplifying string concatenation.

### 4. **Object Destructuring:**

**ES5 (Property Assignment):**
```javascript
var person = { name: 'Bob', age: 25 };
var name = person.name;
var age = person.age;
```

**ES6 (Object Destructuring):**
```javascript
const person = { name: 'Bob', age: 25 };
const { name, age } = person;
```

- **Explanation:** Object destructuring provides a concise way to extract properties from objects into variables, enhancing code readability.

### 5. **Default Parameters:**

**ES5 (Fallback Value):**
```javascript
function greet(name) {
  name = name || 'Guest';
  return 'Hello, ' + name + '!';
}
```

**ES6 (Default Parameters):**
```javascript
const greet = (name = 'Guest') => `Hello, ${name}!`;
```

- **Explanation:** Default parameters offer a more explicit and readable way to set default values for function arguments, avoiding the use of logical OR for default values.

### 6. **Classes:**

**ES5 (Constructor Functions):**
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  return 'Hello, ' + this.name + '!';
};
```

**ES6 (Class Syntax):**
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}!`;
  }
}
```

- **Explanation:** ES6 classes provide a more declarative and structured way to create constructor functions and define methods within classes, similar to class-based languages.

These ES6 features enhance JavaScript, making code more expressive, concise, and readable. They improve developer productivity and enable modern programming paradigms within the language.