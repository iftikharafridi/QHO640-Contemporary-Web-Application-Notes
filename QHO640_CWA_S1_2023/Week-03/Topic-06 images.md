---
sidebar_position: 6
---
# Topic-06: Images

In React, you can easily display images using the `img` tag, just like you would in regular HTML. To display images in a React component, you need to provide the image source using the `src` attribute.

Here's an example of how you might display an image in a React component:

```javascript
import React from 'react';
import myImage from './path_to_your_image.jpg'; // Import your image

function MyImageComponent() {
  return (
    <div>
      <h1>Displaying an Image in React</h1>
      <img src={myImage} alt="Description of the image" />
    </div>
  );
}

export default MyImageComponent;
```

### Loading Images from a URL:

If the image is hosted on a server and has a URL, you can directly use that URL as the `src` attribute:

```javascript
function MyImageComponent() {
  return (
    <div>
      <h1>Displaying an Image from URL in React</h1>
      <img src="https://www.example.com/path_to_your_image.jpg" alt="Description of the image" />
    </div>
  );
}
```

Make sure to replace `https://www.example.com/path_to_your_image.jpg` with the actual URL of the image.

### Dynamic Images:

If you're loading images dynamically, you can manage image sources as part of your state or props and then render them using the `img` tag.

```javascript
function DynamicImageComponent({ imageURL }) {
  return (
    <div>
      <h1>Dynamic Image in React</h1>
      <img src={imageURL} alt="Description of the image" />
    </div>
  );
}
```

When using dynamic images, ensure that the `imageURL` passed as a prop exists and is a valid URL for the image.

Remember to handle `alt` attributes responsibly by providing a concise and descriptive text for better accessibility and SEO.

These examples showcase how to display images in React components, whether from local files or external URLs. Adjust the image paths, sources, and alt text according to your project requirements.