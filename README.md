[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/OuSBNpwM)

<p align="center">
  <img src="misc/images/image.png" alt="Alt text"/>
</p>

# Team Maverick Team 35
- Abhishek Chintapalli
- Abhinav Chary Eeranti
- Tirdesh Pettugani
- Sai Krishna Kotla

# Find a Roomie

## Introduction
"Find a Roomie" is a web application designed to assist students across the globe in finding suitable accommodation. With a focus on ease of use and security, it offers a platform for users to list or search for rooms with just a few clicks.

## Key Features
- **User-Friendly Interface**: Intuitive design for effortless navigation.
- **Secure Login**: Ensures a safe, personalized user experience.
- **Dual Functionality**:
  - *List a Room*: Users can list their available rooms with detailed preferences.
  - *Find a Room*: Advanced search options with customizable filters.
- **Additional Implementations**: Blog integration, advanced security features, and confidentiality of personal information.

## How It Works
### Creating an Account
- Quick and simple registration process.
- Enhanced security features available.

### Listing/Searching for a Room
- Easy steps to list or search for rooms.
- Customizable filters to meet individual needs.

### Blogs and Community Support
- Engage with the community through integrated blogs.

### User Verification and Safety
- Comprehensive checks for user identity verification.
- Data protection and privacy guidelines.

## User Authentication
- Account creation via email or social media.
- Strong password policies and optional two-factor authentication.
- Profile management for personal details and preferences.

## Site Features
### How to Find a Room
- **Checklist Creation**: Specify location, budget, gender preference, amenities, etc.
- **Search Filters**: Refined search capabilities.
- **Communication**: Facilitates initial contact between users.
- **Contact Exchange and Moving In**: Coordinate finalizing the deal and moving in.

### Renting a Room
- Comprehensive form to capture property details, type, accommodation duration, security deposit, availability date, expectations, and amenities.

## Site Tabs
### Dashboard
- For guests: List of apartments with uploader details.
- For logged-in users: Additional contact features.

### Activity
- Track apartment listings, contacts, and house hunting progress.

### Our Listings
- Post and manage personal housing listings.

### Account
- Manage personal details and connections akin to social media features.

## Handling GIT:

### Creating a new branch:

```bash
git branch new-branch-name
git checkout new-branch-name
# or using a single command
git checkout -b new-branch-name
```

### Commit Changes:

```bash
git add .
git commit -m "Your commit message"
git push origin new-branch-name
```

These commands help in creating a new branch, switching to it, staging changes, committing them, and pushing the changes to the remote repository.

## Object Model Using Domain Driven Design
<p align="center">
  <img width="717" alt="Object Model" src="https://github.com/info-6150-fall-2023/final-project-mavericks/assets/145165383/3db253b6-86d5-4c6b-a437-b480e4d18381">
</p>

# Find a Roomie - User Stories and Corresponding REST API Resources

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

## User Story 3: Effortless Room Search
- **As** a student looking for accommodation,
- **I want** to find the perfect room,
- **Utilizing** specific filters like location, budget, and amenities,
- **So that** the room aligns seamlessly with my needs and preferences.

### API Resources:
1. **Endpoint:** `/roomlistings/filters`
   - **Method:** `GET`
   - **Description:** Get saved filters for room searches.

2. **Endpoint:** `/roomlistings/filters`
   - **Method:** `POST`
   - **Description:** Save a new filter.

3. **Endpoint:** `/roomlistings/filters/{id}`
   - **Method:** `PUT`
   - **Description:** Update a saved filter by ID.

4. **Endpoint:** `/roomlistings/filters/{id}`
   - **Method:** `DELETE`
   - **Description:** Delete a saved filter by ID.

## User Story 4: Listing a Room
- **As** a room owner,
- **I want** to list my available room with detailed preferences and amenities,
- **So that** I can attract suitable roommates.

### API Resources:
1. **Endpoint:** `/api/rooms`
  - **method:** `GET`
  - **Description:** Get a list of available rooms.

2. **Endpoint:** `/api/rooms`
  - **method:** `POST`
  - **Description:** List a room as available with detailed preferences and amenities.

3. **Endpoint:** `/api/rooms/{roomNumber}`
  - **method:** `PUT`
  - **Description:**  Update details of a room listing by room number.

4. **Endpoint:** `/api/rooms/{roomNumber}`
  - **method:** `DELETE`
  - **Description:** Delete a room listing by room number.
 
## User Story 5: In-App Communication
- **As** a user,
- **I want** to communicate safely with potential roommates within the app,
- **So that** I can discuss details without sharing personal contact information prematurely.

## User Story 6: Blog and Community Engagement
- **As** a user interested in shared living best practices,
- **I want** to access and contribute to blogs and community discussions within the app,
- **So that** I can learn from and engage with a community of like-minded individuals.

### API Resources:
1. **Endpoint:** `/community_blogs`
  - **method:** `GET`
  - **Description:** Retrieve all the blogs

2. **Endpoint:** `/community_blogs`
  - **method:** `POST`
  - **Description:** Post a new Blog with a blogID

3. **Endpoint:** `/community_blogs/{blogID}`
  - **method:** `PUT`
  - **Description:** Update the blog with selected blog id

4. **Endpoint:** `/community_blogs/{blogID}`
  - **method:** `DELETE`
  - **Description:** Delete the blog with selected blog id
 
## User Story 7: User Verification and Safety
- **As** a user concerned about safety,
- **I want** to know that other users are verified,
- **So that** I feel secure in my interactions and potential living arrangements.
## User Story 8: Checklist and Preferences
- **As** a user,
- **I want** to create a checklist of my room and roommate preferences,
- **So that** the search results are tailored to my specific needs.
 
## User Story 9: Roommate Agreement
- **As** a user finalizing a roommate arrangement,
- **I want** to access resources and templates for roommate agreements,
- **So that** both parties have clear, agreed-upon terms from the beginning.

## Set up project in VS code:
### commands:
   -  npm init
   -  npm use 18 (since 20 is not working in Abhinav and Abhishek's environment)
   -  npm i -s express mongoose cors debug bcrypt jsonwebtoken dotenv
### package.json:
   - add ***"type": "module"***

# API Testing Guide with Postman
## Testing User Login with Postman

### Prerequisites:
- Run `node server.js` to start the server.

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
- **URL:** `http://localhost:3000/profile/:userId`
- **Parameters:** Replace `:userId` with the user ID.

## Room Filtering with Postman

### 1. Display All Room Filters
- **Method:** GET
- **Endpoint:** `/`
- **URL:** `http://localhost:3000/`

### 2. Create a New Room Filter
- **Method:** POST
- **Endpoint:** `/`
- **URL:** `http://localhost:3000/`

### 3. Retrieve a Specific Room Filter
- **Method:** GET
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3000/:id`

### 4. Update a Specific Room Filter
- **Method:** PUT
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3000/:id`

### 5. Delete a Specific Room Filter
- **Method:** DELETE
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3000/:id`

## Blog Management with Postman

### 1. Display All Blogs
- **Method:** GET
- **Endpoint:** `/`
- **URL:** `http://localhost:3000/`

### 2. Create a New Blog
- **Method:** POST
- **Endpoint:** `/`
- **URL:** `http://localhost:3000/`
- **Body:** JSON format

### 3. Retrieve a Specific Blog
- **Method:** GET
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3000/:id`

### 4. Update a Specific Blog
- **Method:** PUT
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3000/:id`
- **Body:** JSON format

### 5. Delete a Specific Blog
- **Method:** DELETE
- **Endpoint:** `/:id`
- **URL:** `http://localhost:3000/:id`
