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