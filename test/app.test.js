const request = require('supertest');
const app = require('../index');

afterAll((done) => {
  server.close(); // Close the server after tests
  done();
});


describe('GET /', () => {
  it('responds with the correct greeting message', async () => {
    const expectedMessage = process.env.GREETING || 'Hello to Cloud & DevOps World !!!!';
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(expectedMessage);
  });
});

