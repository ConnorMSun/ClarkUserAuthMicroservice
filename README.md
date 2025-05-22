Hi Clark! This is my implementation of your user authentication service. It's pretty standard so there shouldn't be anything unexpected you have to get used to.

Existing API endpoint: '/login'

Here are the steps to get it working:
1. Run the following commands:
npm init -y
npm install express

2. Run the microservice:
node server.js

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

<img width="507" alt="Screenshot 2025-05-21 at 9 50 52 PM" src="https://github.com/user-attachments/assets/46ebff99-0bd2-45b9-873a-cef74de62291" />
