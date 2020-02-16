const app = require('./app');
//put port in env variable
const port = 3000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`)
})