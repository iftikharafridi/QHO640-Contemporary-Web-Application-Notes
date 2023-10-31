---
sidebar_position: 1
---
# Topic-01: map() Function
# map() Function
In JavaScript and React, the `.map()` method is used to iterate over an array and perform an operation on each item in the array. It creates a new array by calling a function on each element in the original array. This method is commonly used for transforming data or rendering lists of elements in React components.

### .map() in JavaScript:

The `.map()` function takes a callback function as an argument and applies that function to each element in the array. It returns a new array containing the results of the provided function applied to each element.

#### Example in JavaScript:

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

In this example, the `.map()` function doubles each number in the `numbers` array, creating a new array `doubledNumbers`.

### .map() in React:

In React, the `.map()` method is commonly used to render dynamic lists or arrays of elements in the JSX.

#### Example in React:

```javascript
import React from 'react';

function ListComponent() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default ListComponent;
```

In this React example, the `.map()` function is used to create a list of `<li>` elements for each name in the `names` array. It's important to provide a unique `key` prop to each rendered element when using `.map()` to help React efficiently update the UI when the list changes.

### Key Points:

- `.map()` is a method used to iterate over arrays in JavaScript.
- In plain JavaScript, it transforms each element of an array based on the provided callback function and returns a new array.
- In React, `.map()` is often used in JSX to dynamically render lists or arrays of elements, like rendering a list of components or elements based on an array.

Using `.map()` is a convenient way to process and transform arrays, and it's especially valuable in React for rendering dynamic content, such as lists or repeated components based on data stored in arrays.