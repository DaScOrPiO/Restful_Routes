# Endpoint Documentation
## Description
Restful_routes is an api endpoint created to perform crud operation on a person/user.
## Environment Setup:
1. **Clone the repo:** fork the repo and on your terminal, cd into a directory of choice and run `git clone https://github.com/DaScOrPiO/Restful_routes.git`

2. **Installing Dependencies:** Go into the root folder Example: `cd Restful_routes` then run `npm install` or `yarn install` and wait for dependencies to intall.

3. **New Branch:** create a new branch run: `git checkout -b *branch name*` make changes and publish branch `git push origin -u *branch name*`

4. **Run Locally:** Once done with step two above, run `node index.js` or `nodemon index.js` if you have `nodemon` installed.

## Endpoint usage and responses

### 1. create new user:
Copy https://myrestfulroutes.onrender.com/api and make a **POST** request via postman or any other endpoint testing tool of your choice.

### How it works
To sucessfully create a person the api searches the database if a person with that name exists, if so, response is sent saying `Person already exists` with status code of 409. and if not a new user is created.

**Response Format:** {"Action Successful, user's id is 6501cc55b95aaa1e549b11fa"}

2. ### Read existing user:
Copy https://myrestfulroutes.onrender.com/api/id and make a **GET** request via postman or any other endpoint testing tool of your choice. 

### How it works
If a user exists, it returns a response code 200 format along with details regarding the person (`In this scenerio an ID`). if person isn't found, you will get a response code 404 saying `Person not found`

**Response Format:** {
    "_id": "6501cd2db95aaa1e549b11fd",
    "name": "Faith.K",
    "__v": 0
}

3. ### Update existing user:
Copy https://myrestfulroutes.onrender.com/api/id and make a **PUT** request via postman or any other endpoint testing tool of your choice.

### How it works
Checks if a person exists in the database before updating, if the id doesn't exist in the database, an error with code 404 is thrown saying `Person not found!`.

**Response Format:** {"Action Successful"} or {"Person not found!"}

4. ### Delete existing user: 
Delete existing user data: copy https://myrestfulroutes.onrender.com/api/id and make a **DELETE** request via postman or any other endpoint testing tool of your choice.

### How it works
Checks if a person exists in the database before deleting, if the id doesn't exist in the database, an error with code 404 is thrown saying `Person not found!`. Otherwise, a response with code 204 is sent.

**Response Format:** { } or {"Person not found!"}

**NOTE:** `id in this case is a unique identifier for saved data. for testing pusposes, first create a new user by sending a post request to https://myrestfulroutes.onrender.com/api, copy the id value returned in the request response and use for other operations`

### Responses Sent:
1. **Response 409 (Conflict):** This error is thrown if a user already exists.
2. **Response 404 (Not Found):** This error is thrown when query data isn't found in database.
3. **Response 400 (Bad Request)** Thrown for bad requests *scenerio*: `if the name parameter is not included with a post request or an ID is found to be invalid`
4. **Response 200:** Sent when all expected parameters are received.
5. **Response 500:** Sent when there's a server error.