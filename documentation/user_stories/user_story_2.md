## User Story 2:  Profile Management and Access
- **As** a new user,
- **I want** to efficiently manage my profile and access the "Profile Management" features,
- **So that** I can keep my profile information up to date and utilize the available profile management functionalities.

### API Resources:
1. **Endpoint:** `/api/profiles`
   - **Method:** `POST`
   - **Description:** Create a new user profile.

2. **Endpoint:** `/api/profiles/{username}`
   - **Method:** `GET`
   - **Description:** Retrieve user profile by username.

3. **Endpoint:** `/api/profiles/{username}`
   - **Method:** `PUT`
   - **Description:** Update user profile by username.

4. **Endpoint:** `/api/profiles/{username}`
   - **Method:** `DELETE`
   - **Description:** Delete user profile by username.