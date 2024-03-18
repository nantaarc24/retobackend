// module.exports.handler = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: "Go Serverless v3.0! Your function executed successfully!",
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// };
import * as express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';
import * as mapeo from './mapeo.json';
const db = require('./db');


const app = express();
app.use(express.json());
const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';

// Endpoint GET
app.get('/recurso/:tipo/:id', async (req: Request, res: Response) => {
  try {
    const { tipo, id } = req.params;
    const response = await axios.get(`${SWAPI_BASE_URL}/${tipo}/${id}`);
    const data = adaptarAtributos(response.data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el recurso' });
  }
});

// Endpoint POST 
// app.post('/crear-recurso/:tipo', async (req: Request, res: Response) => {
//   try {
//     const { tipo } = req.params;
//     const data = req.body;
//     const newData = adaptarAtributos(data);
//     const response = await axios.post(`${SWAPI_BASE_URL}/${tipo}`, newData);
//     res.status(201).json(response.data); 
//   } catch (error) {
//     console.error('Error al crear el recurso:', error); 
//     res.status(500).json({ error: 'Error al crear el recurso' });
//   }
// });

app.post('/crear-recurso/personaje', async (req, res) => {
  try {
    const data = req.body;
    const query = 'INSERT INTO personaje (name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      data.name,
      data.height,
      data.mass,
      data.hair_color,
      data.skin_color,
      data.eye_color,
      data.birth_year,
      data.gender,
      data.homeworld,
      JSON.stringify(data.films),
      JSON.stringify(data.species),
      JSON.stringify(data.vehicles),
      JSON.stringify(data.starships),
      data.created,
      data.edited,
      data.url
    ];
    await db.query(query, values);
    res.status(201).json({ message: 'Personaje creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el personaje:', error);
    res.status(500).json({ error: 'Error al crear el personaje' });
  }
});

// Función para adaptar los nombres de atributos
function adaptarAtributos(data: any): any {
  console.log('Datos recibidos:', data);
  const newData: any = {};
  for (const key in data) {
    if (mapeo[key]) {
      const translatedKey = mapeo[key];
      newData[translatedKey] = data[key];
    } else {
      newData[key] = data[key];
    }
  }
  console.log('Datos después del mapeo:', newData);
  return newData;
}

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default server;
