#Organic Farming Backend

Welcome to the Organic Farming Backend repository! This project provides a comprehensive backend solution for managing organic farming operations, built using Express.js and MongoDB. It facilitates seamless interactions between farmers and consumers, ensuring efficient management of products, orders, and user authentication.

## Getting Started
>**Note**:Ensure you have the following installed before proceeding:

1. Node.js
2. MongoDB 


## Installation
Clone the Repository:

```bash
git clone https://github.com/yourusername/organic-farming-backend.git
```

Navigate to the Project Directory:
```bash
cd organic-farming-backend
```

Install Dependencies:
```bash
npm install
```

Set Up Environment Variables:

Create a .env file in the root directory and add the following:
```code
env
Copy
Edit
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret with a secure secret key for JWT authentication.

Usage
Start the  Server:

```bash
nodemon start
```
The server will start on the port specified in your .env file (default is 
http://0.0.0.0:5000).

Access the API:

Use tool Postman to interact with the API endpoints.
