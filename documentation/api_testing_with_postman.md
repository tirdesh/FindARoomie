## Testing User Login with Postman

### Prerequisites:
- Run `node server.js` in backend folder to start the server.

### 1. Signing Up a New User (/api/signup)
- **HTTP Method:** POST
- **URL:** `http://localhost:3000/api/signup`
- **Body:** JSON format

### 2. User Login (/api/login)
- **HTTP Method:** POST
- **URL:** `http://localhost:3000/api/login`
- **Body:** JSON format

### 3. Resetting Password (/api/password-reset)
- **HTTP Method:** POST
- **URL:** `http://localhost:3000/api/password-reset`
- **Body:** JSON format

## Profile Management with Postman

### Prerequisites:
- Ensure the server is running: `node server.js`

### 1. Retrieve a User's Profile
- **Method:** GET
- **Endpoint:** `/profile/:userId`
- **URL:** `http://localhost:3000/profile/:userId`
- **Parameters:** Replace `:userId` with the actual user ID.

### 2. Create or Update a User's Profile
- **Method:** POST
- **Endpoint:** `/profile/:userId`
- **URL:** `http://localhost:3000/profile/:userId`
- **Parameters:** Replace `:userId` with the user ID.

### 3. Update Specific Fields in a User's Profile
- **Method:** PATCH
- **Endpoint:** `/profile/:userId`
- **URL:** `http://localhost:3000/profile/:userId`
- **Parameters:** Replace `:userId` with the user ID.

### 4. Delete a User's Profile
- **Method:** DELETE
- **Endpoint:** `/profile/:userId`
- **URL:** `http://localhost:3002/profile/:userId`
- **Parameters:** Replace `:userId` with the user ID.

## Room Filtering with Postman

### 1. Display All Room Filters
- **Method:** GET
- **Endpoint:** `/`
- **URL:** `http://localhost:3002/`

### 2. Create a New Room Filter
- **Method:** POST
- **Endpoint:** `/`
- **URL:** `http://localhost:3002/`

### 3. Retrieve a Specific Room Filter
- **Method:** GET
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3002/:id`

### 4. Update a Specific Room Filter
- **Method:** PUT
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3002/:id`

### 5. Delete a Specific Room Filter
- **Method:** DELETE
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3002/:id`

## Blog Management with Postman

### 1. Display All Blogs
- **Method:** GET
- **Endpoint:** `/`
- **URL:** `http://localhost:3002/`

### 2. Create a New Blog
- **Method:** POST
- **Endpoint:** `/`
- **URL:** `http://localhost:3002/`
- **Body:** JSON format

### 3. Retrieve a Specific Blog
- **Method:** GET
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3002/:id`

### 4. Update a Specific Blog
- **Method:** PUT
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3002/:id`
- **Body:** JSON format

### 5. Delete a Specific Blog
- **Method:** DELETE
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3002/:id`