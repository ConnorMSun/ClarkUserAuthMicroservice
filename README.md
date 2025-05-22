Hi Clark! This is my implementation of your user authentication service. It's pretty standard so there shouldn't be anything unexpected you have to get used to.

Existing API endpoint: '/login'

Here are the steps to get it working:
1. Run the following commands:
npm init -y
npm install express

2. Run the microservice:
EITHER DO
a) node server.js
--This runs the microservice itself and allows it to be interacted with--

b) node test.js
--This runs some tests for the microservice, showing the expected and actual output--

FOR THE ASSIGNMENT:
How to programmatically REQUEST data from the microservice
    HTTP Method: POST
    URL: /login
    Content-Type: application/json
    Request Body: JSON with two fields:
    {
    "username": "<username>",
    "password": "<password>"
    }

    Example Request:
    -----------------------------------------------------------------------------
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'suncon', password: 'password' })
        });
    -----------------------------------------------------------------------------

How to programmatically RECEIVE data from the microservice 
    Possible Statuses: 200, 401

    Possible Bodies:
    Successful login
    {
        "message": "Authentication successful!",
        "username": "<successful username>",
        "password": "<successful password>"
    }
    Wrong password
    {
        "message": "Invalid Password",
        "password": "<attempted password>"
    }
    User DNE
    {
        "message": "User does not exist",
        "username": "<attempted username>"
    }

    Example Reception:
    -----------------------------------------------------------------------------
        const data = await response.json();
        console.log('\nStatus:', response.status, '\nResponse:', data);
    -----------------------------------------------------------------------------

<img width="467" alt="Screenshot 2025-05-21 at 9 45 21 PM" src="https://github.com/user-attachments/assets/2e10837b-71a2-4e1b-a67e-d5c3405ba132" />
