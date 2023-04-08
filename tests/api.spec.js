const request = require('supertest');
const app = require('../server');

describe('Get all products', () => {
  it('Should return data as an object that can be read by the front-end', async () => {
    const response = await request(app).get('/products');
    expect(response.body).toHaveLength(5);
    expect(response.statusCode).toBe(200);
    expect(response.body);

    expect(response.body[1]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        slogan: expect.any(String),
        description: expect.any(String),
        category: expect.any(String),
        default_price: expect.any(Number),
      }),
    );
  });
});
