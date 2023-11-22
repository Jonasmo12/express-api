const express = require('express')
const app = express();
const port = 2600;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const users = [];


app.get('/api/users', (request, response) => {
    response.json(users)
});



app.post('/api/user/', (request, response) => {
    // set data to user object
    const user = {
        id: request.body.id, // get id from user in the request
        firstName: request.body.firstName, // get name from user in the request
        lastName: request.body.lastName,
        email: request.body.email
    }

    users.push(user); //Insert data into the array

    response.json('succesfully added: ' + user); 
});



app.get('/', (request, response) => {
    response.json("Server Online")
})

app.listen(port, () => {
    console.log(`Server listening on port::${port}`)
});