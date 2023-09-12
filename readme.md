# Restful Routes

## Usage:
1. create new user: copy https://example.com/api and make a **POST** request via postman or any other endpoint testing tool of your choice. **when a new user is successfully created, copy the given id in the response to perform other crud operations**

2. Read existing user data: copy https://example.com/api/id and make a **GET** request via postman or any other endpoint testing tool of your choice.

3. Update existing user data: copy https://example.com/api/id and make a **PATCH** request via postman or any other endpoint testing tool of your choice.

4. Delete existing user data: copy https://example.com/api/id and make a **DELETE** request via postman or any other endpoint testing tool of your choice

**NOTE:** `id in this case is a unique identifier for saved data, for testing pusposes, first create a new user by sending a post request to https://example.com/api/id. copy the id value returned in the request response and use for other operations`