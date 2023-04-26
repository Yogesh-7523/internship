Sure, here's an example README file for the Node.js and React application that connects to a MongoDB database and fetches data based on the provided sample data:

# User Information Table

This is a Node.js and React application that displays user information in a table format. The user data is fetched from a MongoDB database and displayed on the frontend using React.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install` in the project directory.
3. Set up the MongoDB database by importing the `sample_data.json` file into a new collection in your database. You can use a tool like MongoDB Compass or the `mongoimport` command line tool to accomplish this.
4. Update the database connection details in the `server.js` file.
5. Start the server by running `npm start` in the project directory.
6. Start the React application by running `npm run dev` in the project directory.

The React application will be available at `http://localhost:3000/` and will display the user information table.

## API Endpoints

The following API endpoints are available:

- `/api/users/1`: Returns users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
- `/api/users/2`: Returns male users which have phone price greater than 10,000.
- `/api/users/3`: Returns users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
- `/api/users/4`: Returns users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
- `/api/cities/5`: Returns the data of top 10 cities which have the highest number of users and their average income.

## Technologies Used

This project was built using the following technologies:

- Node.js
- Express.js
- MongoDB
- React
- Next.js
- Axios

## Contact Us

If you have any questions or feedback, please email us at yogesh.2024cse1151@kiet.edu.
