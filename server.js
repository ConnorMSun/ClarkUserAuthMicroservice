const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//Change this to fit users as necessary
let users = [
    {username: 'suncon', password: 'password'},
    {username: 'SWE1', password: 'CS361'},
];
/************************************************
//MAY WANT TO ADD FUNCTION THAT CREATES NEW USERS
************************************************/

//Basic endpoint that checks for user credentials
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user) {
        if (user.password === password) {
            res.status(200).json({message: "Authentication successful!", username: username, password: password});
        }
        else {
            res.status(401).json({message: "Invalid Password", password: password});
        }
    } 
    else {
        res.status(401).json({message: "User does not exist", username: username});
    }
});

app.listen(PORT, () => {
    console.log(`User authentication microservice running at http://localhost:${PORT}`);
});
