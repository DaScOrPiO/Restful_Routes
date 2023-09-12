# Endpoint Detailed documentation

## Environment Setup:
1. **Clone the repo:** on your terminal, cd into a directory of choice and run `git clone https://github.com/DaScOrPiO/Restful_routes.git`

2. **Installing Dependencies:** Go into the root folder Example: `cd Restful_routes` then run `npm install` or `yarn install` and wait for dependencies to intall.

3. **Run Locally:** Once done with step two above, run `node index.js` or `nodemon index.js` if you have `nodemon` installed.

## Endpoint usage and responses

### 1. create new user:
Copy https://example.com/api and make a **POST** request via postman or any other endpoint testing tool of your choice.

### How it works
To sucessfully create a person the api searches the database if a person with that name exists, if so, response is sent saying `Person already exists` with status code of 200. and if not a new user is created.

2. ### Read existing user data:
Copy https://example.com/api/id and make a **GET** request via postman or any other endpoint testing tool of your choice. 

### How it works
If a user exists, it returns a response code 200 format along with details regarding the person (`In this scenerio an ID`). if person isn't found, you will get a response code 404 saying `Person not found`

3. ### Update existing user data:
Copy https://example.com/api/id and make a **PATCH** request via postman or any other endpoint testing tool of your choice.

### How it works
Checks if a person exists in the database before updating, if the id doesn't exist in the database, an error with code 400 is thrown saying `Person not found!`.

4. Delete existing user data: copy https://example.com/api/id and make a **DELETE** request via postman or any other endpoint testing tool of your choice

### How it works
Checks if a person exists in the database before deleting, if the id doesn't exist in the database, an error with code 400 is thrown saying `Person not found!`.

**NOTE:** `id in this case is a unique identifier for saved data. for testing pusposes, first create a new user by sending a post request to https://example.com/api/id, copy the id value returned in the request response and use for other operations`

### Responses Sent:
**Response 409 (Conflict):** This error is thrown if a user already exists
**Response 404 (Not Found):** This error is thrown when query data isn't found in database
**Response 400 (Bad Request)** Thrown for bad requests *scenerio*: `if the name parameter is not included with a post request or an ID is found to be invalid`
**Response 200:** Sent when all expected parameters are received
**Response 500:** Sent when there's a server error