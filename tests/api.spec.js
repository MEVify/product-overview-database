const request = require('supertest');
const app = require('../server');

describe('Get all products', () => {
  it('Should return data as an array with default count of 5', async () => {
    const response = await request(app).get('/products');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(5);
  });

  it('Should return data as an object', async () => {
    const response = await request(app).get('/products');
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
