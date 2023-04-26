// Import the render and screen functions from the '@testing-library/react' library
import { render, screen } from '@testing-library/react';

// Import the App component from the './App.js' file
import App from './App';

// Define a test function that checks if the App component renders a 'Learn React' link
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Find the 'Learn React' link by its text content
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the link element is in the document
  expect(linkElement).toBeInTheDocument();
});

/*
The code above is a test for the App component.

The test function checks if the App component renders a 'Learn React' link. 

The test uses the render and screen functions from the '@testing-library/react' library to render the component and search for elements in the rendered output.

The render function is used to render the App component.

The screen.getByText function is used to find the 'Learn React' link by its text content.

The expect function is used to assert that the link element is in the document.

The test function is automatically run by the test runner when the tests are executed.

This test is a simple example of how to test a React component using the '@testing-library/react' library. Tests like this can help ensure that your components are working as intended and catch bugs before they make it to production.
*/