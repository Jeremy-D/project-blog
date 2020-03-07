const knex = require('../../db/config')



// For debug only!!!
// *****************
// Never expose all the users like below in a production application!!!

const getUsers = (req, res) => {
    knex.select().table('users')
    
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err));
}; 

//const getUser =

module.exports = {
    getUsers
}