# Secret Baking Recipe

A secure Node.js API for managing private cookie recipes with user authentication and authorization. This API enables users to register, log in, and securely manage their own recipes using JWTs for authentication and AES encryption for storing sensitive recipe information.

## Environment Variables
The .env file in this project includes the following:

JWT_SECRET: Used to sign JWT tokens.
SECRET_KEY: AES encryption key for sensitive recipe data.
PORT: Port for the server to listen on.
Note: The .env file is included in this repository for demonstration purposes with randomly generated values. In production, never include sensitive information like this in a public repository.

### How to execute the Project?

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/memodioTask.git
   
2. **Install Dependencies**:
   ```bash
   npm install
   
3. **Run the project**:
   ```bash
   npm start

3. **Testing the API with Postmans**
   Import the Postman Collection and Environments:
      Import the Postman collection memodioTask.postman_collection.json for ready-to-use API requests.
      Import the two Postman environments, User 1 and User 2, to easily test user-specific data access and permissions.

## Features

- **User Registration**: Register with a unique username and password.
- **User Login**: Log in to receive a JWT for accessing protected routes.
- **Add Recipe**: Save encrypted recipes that are accessible only to the user who created them.
- **Get Recipes**: Retrieve all recipes created by the authenticated user, with recipe data decrypted upon retrieval.

