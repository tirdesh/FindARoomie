## User Story 1: Account Creation and Login
- **As** a new user,
- **I want** to easily create an account and log in to "Find a Roomie",
- **So that** I can securely access the features for finding or listing a room.

### API Resources:
1. **Endpoint:** `/api/users`
   - **Method:** `GET`
   - **Description:** Retrieve a list of users.

2. **Endpoint:** `/api/users/{userId}`
   - **Method:** `GET`
   - **Description:** Retrieve user details by ID.

3. **Endpoint:** `/api/users/{userId}`
   - **Method:** `PUT`
   - **Description:** Update user details by ID.

4. **Endpoint:** `/api/signup`
   - **Method:** `POST`
   - **Description:** Create a new user account.

5. **Endpoint:** `/api/login`
   - **Method:** `POST`
   - **Description:** Authenticate and log in a user.

6. **Endpoint:** `/api/password-reset`
   - **Method:** `POST`
   - **Description:** Reset user password.