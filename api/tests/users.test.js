const request = require('supertest');
const app = require('../server/app');
const knex = require('../knexfile');

process.env.NODE_ENV = 'test';

beforeEach(()=>{
    return knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run());
})

afterEach(() => {
    return knex.migrate.rollback();
});

describe('Get root path', ()=>{
    test('It should respond with 200', async () =>{
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })
});