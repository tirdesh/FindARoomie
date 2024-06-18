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