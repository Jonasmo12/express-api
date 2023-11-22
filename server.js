const express = require('express')
const app = express();
const port = 2600;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const users = [];


app.get('/api/users', (request, response) => {
    res.json(users)
});

app.post('/api/user/', (request, response) => {
    // set data to user object
    const user = {
        id: request.body.id, // get id from user in the request
        name: request.body.name // get name from user in the request
    }
    users.push(user); //Insert data into the array
    resp.json('succesfully added: ' + user); 
});

app.get('/', (req, res) => {
    res.json("Server Online")
})

app.listen(port, () => {
    console.log(`Server listening on port::${port}`)
});