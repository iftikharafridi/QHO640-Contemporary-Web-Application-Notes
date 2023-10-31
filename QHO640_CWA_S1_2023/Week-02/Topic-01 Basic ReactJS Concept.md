---
sidebar_position: 1
---

# Topic-01: Basic ReactJS Concept

 These are some basic reactjs concepts.

**1. Single Page App:**
   - Explanation: A Single Page Application (SPA) is a web application or website that loads a single HTML page and dynamically updates the content as the user interacts with the app. This creates a smoother user experience as it avoids full-page reloads.
   - No specific activity is needed for this concept, but you can illustrate the concept with examples of popular SPAs like Facebook, Twitter, or React-based apps.

**2. Traditional Page-Based Rendering:**
   - Explanation: In traditional web applications, each user interaction (e.g., clicking a link) typically triggers a request to the server, which responds with a full HTML page. This approach can lead to slower loading times.
   - Activity: Discuss the process of navigating between pages on a traditional website. You can also provide a comparison with SPAs.

**3. Virtual DOM:**
   - Explanation: The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering. When changes are made, React updates the Virtual DOM first, compares it to the real DOM, and makes efficient updates, reducing the number of actual DOM manipulations.
   - Activity: You can demonstrate the concept with a code example where a change is made to a React component and show how the Virtual DOM helps optimize updates.

**4. JSX (JavaScript XML):**
   - Explanation: JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's used to define the structure of React components.
   - Activity: Have students write JSX code to create a simple React component. For example, they can create a component that renders a button with a label.

**5. ES6 and Onward:**
   - Explanation: ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript. React developers often use ES6 features like arrow functions, destructuring, and classes.
   - Activity: Provide code examples that demonstrate ES6 features commonly used in React. For instance, show how to use arrow functions to define components.

**6. Components:**
   - Explanation: React applications are built using components, which are reusable building blocks. Components can be functional or class-based. Functional components are simpler and more common in modern React development.
   - Activity: Walk students through creating a simple functional component, such as a "HelloWorld" component that renders a greeting message.

**7. Props (Properties):**
   - Explanation: Props are a way to pass data from a parent component to a child component. They are like function arguments for components.
   - Activity: Have students create a parent component (e.g., "App") and a child component (e.g., "Greeting"). Pass a prop (e.g., the user's name) from the parent to the child and display it in the child component.

Here's a sample answer for the "Props" activity:

```jsx
// Parent component (App.js)
import React from 'react';
import Greeting from './Greeting';

function App() {
  const userName = "Alice";

  return (
    <div>
      <Greeting name={userName} />
    </div>
  );
}

export default App;

// Child component (Greeting.js)
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

In this example, the "App" component passes the "userName" prop to the "Greeting" component, which displays a personalized greeting. This demonstrates the concept of passing data through props in React.

