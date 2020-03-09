const request = require('supertest');

const app = require('../server/app');
const knex = require('../db/config');

process.env.NODE_ENV = 'test';

//test setup
const newUser = {
    first_name: 'Tina',
    last_name: 'Belcher'
}

beforeEach(()=>{
    return knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run());
})

afterEach(() => {
    return knex.migrate.rollback();
});

afterAll(() => {
    knex.destroy()
})

//move to static pages test file
describe('Get root path', ()=>{
    test('root path should respond with 200', async () =>{
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
});

//=====================================
//test user CRUD routes
//=====================================
//index
describe('get /users', ()=>{
    test('Get /users should respond with 200', async () =>{
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
    })
});

//show
describe('get users with userId of 1', ()=>{
    test('Get /users should respond with 200', async () =>{
        const response = await request(app).get('/users/1')
        expect(response.statusCode).toBe(200);

    })
});

//create 
describe('POST /user', ()=>{
    test('It should respond with a 201', async () =>{
        const response = await request(app)
            .post('/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(newUser));

        expect(response.statusCode).toBe(201);
    })
});

//update
describe('PUT /user', () => {
    test('It should respond with 200', async () => {
        const response = await request(app)
            .put('/users/1')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send({ data: { first_name: 'Mitchellupdated' } })

        expect(response.statusCode).toBe(200);
    })
})

describe("DELETE /user/:userId", () => {
    test('It should respond with 200', async () => {
        const response = await request(app)
            .delete('/users/1')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
        
        expect(response.statusCode).toBe(200);
    })
})


//new 
//edit
//destroy