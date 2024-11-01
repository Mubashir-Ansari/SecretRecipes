# Secret Baking Recipe

A secure Node.js API for managing private cookie recipes with user authentication and authorization. This API enables users to register, log in, and securely manage their own recipes using JWTs for authentication and AES encryption for storing sensitive recipe information.

## Environment Variables
The .env file in this project includes the following:

JWT_SECRET: Used to sign JWT tokens.
SECRET_KEY: AES encryption key for sensitive recipe data.
PORT: Port for the server to listen on.
Note: The .env file is included in this repository for demonstration purposes with randomly generated values. In production, never include sensitive information like this in a public repository.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/memodioTask.git
   
2. **Install Dependencies**:
   ```bash
   npm install
