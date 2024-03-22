# JWT Middleware App (Hono)

This repository contains a simple web application built with Bun, a web framework in Go, that demonstrates how to implement JWT (JSON Web Tokens) based authentication middleware.

## Introduction

JWT (JSON Web Tokens) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

This repository showcases the implementation of JWT-based authentication middleware in a Bun web application.

## Features

- **JWT Authentication Middleware**: Implementation of JWT-based authentication middleware.
- **User Authentication**: Demonstrates how to authenticate users using JWT tokens.
- **Protected Routes**: Certain routes are protected and can only be accessed with a valid JWT token.
- **Token Generation**: Provides functionality to generate JWT tokens for authenticated users.
- **Custom Claims**: Ability to add custom claims to JWT tokens.

## Usage

To use this application:

1. Clone the repository:

    ```
    git clone https://github.com/JaphetRugas/jwt-middleware-app-hono.git
    ```

2. Navigate to the project directory:

    ```
    cd jwt-middleware-app-hono
    ```

3. Install dependencies:

    ```
    bun install
    ```

4. Run the application:

    ```
    bun run dev
    ```

5. Access the application in your web browser at `http://localhost:3000`.

## Authentication Flow

1. **Login**:
   - Make a `POST` request to `/login` endpoint with user credentials in the request body.
   - Upon successful authentication, the server responds with a JWT token.

2. **Access Dashboard**:
   - Make requests to protected routes (e.g., `/dashboard`) with the generated JWT token.
   - Ensure the JWT token is included in the request header with the `Authorization` field.
   - Set the header prefix as `Bearer`.
   - The JWT token should be included in the header as follows:
     - Type: JWT Header
     - Algorithm: HS256
     - Secret: [Your Secret Key]
     - Request header prefix: Bearer
     - JWT header: token
 

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or features you'd like to add.
 
