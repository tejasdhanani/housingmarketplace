# Housing Marketplace

This is a web application that allows users to view housing properties. Users can create an account, add property listings, and browse listings posted by other users. This application is built using the MERN stack (MongoDB, Express, React, Node.js) and JWT.


## Installation

To install and run this project, follow these steps:

    Clone this repository: git clone https://github.com/tejasdhanani/mern-housingmarketplace.git
    Install dependencies for the server: cd server && npm install
    Install dependencies for the client: cd client && npm install
    Update the MONGODB_URI variable in backend/config/db.js file
    Update the NODE_ENV variable to development in backend/middleware/errorMiddleware.js
    Update the PORT variable to 5000 in backend/server.js
    Update the JWT_SERECT to yourJWT_SERECT in backend/controllers/userController.js & backend/middleware/authMiddleware.js
    Start the server: cd server && npm start
    Start the client: cd client && npm start
    
## Usage

Once the server and client are running, open a web browser and navigate to http://localhost:${PORT}. From there, you can:

    Register for an account
    Login to your account
    Add a property listing
    Browse property listings

## Features

This web application has the following features:

    User authentication: users can register and login to their account.
    Property listings: users can add, edit, and delete their property listings. They can also view listings posted by other users.
    Property search: users can search for properties.


## Contact

If you have any questions or feedback, please contact me at tejas27dhanani@gmail.com or yashranipa@duck.com.
