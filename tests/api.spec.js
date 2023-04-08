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
    const response = await request(app)
      .get('/products')
      .query({
        page: 2,
        count: 5,
      });

    expect(response.body[0]).toEqual(
      expect.objectContaining({
        id: 6,
        name: 'Pumped Up Kicks',
        slogan: 'Faster than a just about anything',
        description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
        category: 'Kicks',
        default_price: 89,
      }),
    );
  });
});



// expect(response.body[1]).toEqual(
//   expect.objectContaining({
//     id: expect.any(Number),
//     name: expect.any(String),
//     slogan: expect.any(String),
//     description: expect.any(String),
//     category: expect.any(String),
//     default_price: expect.any(Number),
//   }),
// );