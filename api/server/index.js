const app = require('./app');

//put port in env variable
const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}.`)
})

//show all users route functional, but should probably move to app.js 
// as per convention leave index.js mostly blank except for some config
//write some tests commit to git, create new feature branch, repeat

//app.get('/users', userRoutes.getUsers)