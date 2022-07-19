const request = require('supertest')
const app = require('../server.js')

describe('Authentication Test (Existing user)', () => {
  it('should return message "User not authenticated"', async () => {
    const res = await request(app)
      .get('/api/v1/projects')
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual("User not authenticated");
  })

  it('should return all projects after logging in', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        username: "admin",
        password: "admin"
      })
    expect(res.statusCode).toEqual(200);

    const res2 = await request(app)
      .get('/api/v1/projects')
      .set('Authorization', `Bearer ${res.body.token}`)
    
    expect(res2.statusCode).toEqual(200);
    expect(res2.body.length).toEqual(3);
  })
})

describe('Authentication Test (New user)', () => {
  it('should return message "User not authenticated"', async () => {
    const res = await request(app)
      .get('/api/v1/projects')
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual("User not authenticated");
  })

  it('should return all projects after register', async () => {
    const res = await request(app)
      .post('/api/v1/auth/register')
      .send({
        username: "newUser",
        password: "password"
      })
    
    expect(res.statusCode).toEqual(201);

    const res2 = await request(app)
      .get('/api/v1/projects')
      .set('Authorization', `Bearer ${res.body.token}`)
    
    expect(res2.statusCode).toEqual(200);
    expect(res2.body.length).toEqual(3);
  })
})