# memodioTask

A secure Node.js API for managing private cookie recipes with user authentication and authorization. This API enables users to register, log in, and securely manage their own recipes using JWTs for authentication and AES encryption for storing sensitive recipe information.

## Features

- **User Registration**: Register with a unique username and password.
- **User Login**: Log in to receive a JWT for accessing protected routes.
- **Add Recipe**: Save encrypted recipes that are accessible only to the user who created them.
- **Get Recipes**: Retrieve all recipes created by the authenticated user, with recipe data decrypted upon retrieval.

### Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Crypto**: Native Node.js library for AES encryption/decryption.
- **bcrypt.js**: For hashing passwords.
- **JWT (jsonwebtoken)**: For managing user sessions via token-based authentication.
- **express-validator**: For validating and sanitizing user input.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- **Node.js** (v14 or later recommended)
- **npm** (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/memodioTask.git
