---
sidebar_position: 2
---

# Topic-02: Props

In React, **props** (short for "properties") are a fundamental concept used for passing data from a parent component to a child component. They are a way to customize or configure a component and provide it with specific values or functions.

### Using Props:

1. **Passing Props:**

   When using a component, you can pass props to it by adding attributes to the component similar to HTML attributes.

   ```jsx
   // ParentComponent.js
   import React from 'react';
   import ChildComponent from './ChildComponent';

   function ParentComponent() {
     return <ChildComponent name="Alice" age={25} />;
   }

   export default ParentComponent;
   ```

   Here, `name` and `age` are passed as props to the `ChildComponent`.

2. **Receiving Props:**

   In the child component, you can receive these props and use them to customize the component's behavior or appearance.

   ```jsx
   // ChildComponent.js
   import React from 'react';

   function ChildComponent(props) {
     return (
       <div>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
       </div>
     );
   }

   export default ChildComponent;
   ```

   Here, the `ChildComponent` receives the `name` and `age` props and uses them to display the provided data.

### Key Aspects of Props:

- **Read-only:** Props are read-only, meaning that a component cannot modify the props passed to it.

- **Accessing Props:** Props are accessed in functional components via the `props` argument, while in class components, they are accessed through `this.props`.

- **Dynamic Values:** Props can contain various types of data, including strings, numbers, functions, or even objects, allowing components to be versatile and adaptable.

- **Custom Components:** Props are useful for creating reusable and configurable components that can be used in different contexts by passing different props.

### Conditional Rendering based on Props:

You can conditionally render elements or apply different behavior based on the props received by the component. For instance:

```jsx
function ChildComponent(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <p>Welcome, {props.username}!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}
```

In this example, the `ChildComponent` renders a personalized message if the `isLoggedIn` prop is `true`; otherwise, it displays a prompt to log in.

Props play a vital role in React, enabling the customization and reusability of components by allowing data to flow from parent components to their children, contributing to the flexibility and adaptability of React applications.