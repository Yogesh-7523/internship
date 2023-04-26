// Import the React library and the UsersTable component from the './components/UsersTable.js' file
import React from 'react';
import UsersTable from './components/UsersTable';

// Import the App.css file to apply custom styles to the App component
import './App.css';

// Define a function called App that returns a JSX element
function App() {
  return (
    <div>
      {/* Render the UsersTable component */}
      <UsersTable />
    </div>
  );
}

// Export the App function as the default export of this module
export default App;

/*
The App component is a React component that renders the UsersTable component. 

The JSX element returned by the App function consists of a div element that contains the UsersTable component. The UsersTable component is responsible for rendering a table of user data. 

The App component imports custom styles from the App.css file to apply to the UsersTable component. 

The App component is exported as the default export of this module so that it can be imported and used by other modules in the application. 
*/