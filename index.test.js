const request = require('supertest');
const app = require('./index').default;

describe('POST /crear-recurso/personaje', () => {
  it('devuelve 201 y un mensaje de éxito al crear un personaje', async () => {
    const response = await request(app)
      .post('/crear-recurso/personaje')
      .send({
        name: 'Fernando Tapia',
        height: '172',
        mass: '77',
        hair_color: 'black',
        skin_color: 'fair',
        eye_color: 'brown',
        birth_year: '24BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/6/'
        ],
        species: [],
        vehicles: [
            'https://swapi.dev/api/vehicles/14/',
            'https://swapi.dev/api/vehicles/30/'
        ],
        starships: [
            'https://swapi.dev/api/starships/12/',
            'https://swapi.dev/api/starships/22/'
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.dev/api/people/1/'
      });
      
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Personaje creado exitosamente' });
  });
});
