[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Google Books

The MERN Book Search Engine is a web application that allows avid readers to search for new books to read and keep a list of books to purchase. The application was originally built with a RESTful API but has been refactored to use GraphQL API with Apollo Server to improve performance and better handle user data.

## Table of Contents

 • [Installation](#installation)

 • [Usage](#usage)

 • [Technologies Used](#technologies-used)

 • [Contributing](#contributing)

 • [Questions](#questions)

 • [License](#license)

## Installation

To run the MERN Book Search Engine on your local machine, follow these steps:

1. Clone the GitHub repository to your local machine.
2. Navigate to the root directory of the application in the terminal or command prompt.
3. Run `npm install` to install the required dependencies.
4. Create a .env file in the root directory with the following environment variables:

```bash
PORT=<your-port-number>
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

5. Run npm start to start the development server.

## Usage

Once the server is running, you can access the application in your web browser at `http://localhost:3000`. The application allows you to perform the following actions:

+ Search for Books: Enter a search term in the input field and click the submit button to get search results from the Google Books API.
+ Save Books: When logged in, you can save books from the search results to your account.
+ View Saved Books: Click on the "See Your Books" option to view all the books you have saved.
+ Remove Books: Remove books from your saved books list by clicking the "Remove" button.

## Technologies Used

+ Front-end:
  + React
  + Apollo Client
  + HTML, CSS
+ Back-end:
  + Node.js
  + Express.js
  + GraphQL with Apollo Server
  + MongoDB with Mongoose
+ Authentication:
  + JWT (JSON Web Tokens)

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository.

## Questions

If you have any questions about this program or would like to report a bug, please contact the author through GitHub:
[GitHub](https://github.com/tg1489/)

Alternatively, you may reach out and email me down below if you have any additional questions about the program:
[Email](mailto:tonyguarino1489@gmail.com)

## License

This application is licensed under the MIT License. See the LICENSE file for more information.
