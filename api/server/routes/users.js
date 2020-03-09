const knex = require('../../db/config')
//add authentication

module.exports = (app) => {
    //index
    // For debug only!!!
    // *****************
    // Never expose all the users like below in a production application!!!
    app.get('/users', (req, res) => {
            knex.select().table('users')
              .then(data => res.status(200).send(data))
              .catch(err => res.status(500).send(err));
        }
    )

    //show
    app.get('/users/:userId', (req, res) => {
            //console.log(req.params)
            let id = parseInt(req.params.userId)

            knex.select().table('users')
              .where('userId', id)
              .then(data => res.status(200).send(data))
              .catch(err => res.status(500).send(err));
        }
    )
    
    //create 
    app.post('/users', (req, res) => {
        //console.log(req.body)
        //console logging here shows req object when you run the tests
        knex('users')
            .insert(req.body)
            .then(() => res.status(201).send())
            .catch(err => res.status(500).send(err));
    })

    //update
    app.put('/users/:userId', (req, res) => {
        knex('users')
            .update(req.body.data, Object.keys(req.body.data))
            .then(() => res.status(200).send())
            .catch(err => res.status(500).send(err));
    })

    //delete
    app.delete('/users/:userId', (req,res) => {
        console.log(req.params)
        let id = parseInt(req.params.userId)

        console.log('id', id)
        knex('users')
            .where('userId', id)
            .del()
            .then(() => res.status(200).send())
            .catch(err => res.status(500).send(err));
    })
}

