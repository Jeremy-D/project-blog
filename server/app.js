const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//const userRoutes = require('./routes/users');


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (request, response)=>{
    response.json({info: 'up and running!'})
})
require('./routes/users')(app)


module.exports = app;