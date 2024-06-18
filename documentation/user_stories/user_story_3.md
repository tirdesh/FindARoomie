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