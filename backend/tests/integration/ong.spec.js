const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    //limpa o banco antes de fazer um test
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
    .send({
      name: "APAD2",
      email: "contato@test.com",
      whatsapp: "1212121212",
      city: "Diamantina",
      uf: "MG"
    })

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});