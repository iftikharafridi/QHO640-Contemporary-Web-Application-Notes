---
sidebar_position: 5
---

# Topic-05: useState Hook
In React, hooks are functions that allow functional components to use state, lifecycle features, and other React features that were previously only available in class components. They enable you to use state and other React features without writing a class.

In React, local state is used to manage and store component-specific data that can change over time. To add local state to a component, you'll need to use the `useState` hook provided by React. Here's a simple example demonstrating how to add and use local state in a functional component:

```jsx
import React, { useState } from 'react';

function MyComponent() {
  // useState hook to add local state
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Update the count state
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

Explanation of the code:

- `useState(0)` initializes the `count` state to `0`. The `useState` hook returns an array containing the current state (`count`) and a function to update that state (`setCount`).
- The `increment` function uses `setCount` to update the `count` state by incrementing it by 1.
- In the component's return, the current `count` state is displayed within an `<h1>` element. The button's `onClick` event is set to the `increment` function, allowing it to update the state when clicked.

This example demonstrates a simple local state management in a functional component. The `count` state is local to this component and can be modified through the `setCount` function. Whenever the state changes, the component will re-render to reflect the updated state.