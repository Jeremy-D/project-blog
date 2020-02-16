const app = require('./app');
//put port in env variable


const PORT = process.env.port || 5000



app.listen(port, ()=>{
    console.log(`App running on port ${PORT}.`)
})