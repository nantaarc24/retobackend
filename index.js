"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var express = require("express");
var axios_1 = require("axios");
var mapeo = require("./mapeo.json");
var db = require('./db');
var app = express();
app.use(express.json());
var SWAPI_BASE_URL = 'https://swapi.py4e.com/api';
// Endpoint GET
app.get('/recurso/:tipo/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, tipo, id, response, data, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.params, tipo = _a.tipo, id = _a.id;
                return [4 /*yield*/, axios_1.default.get("".concat(SWAPI_BASE_URL, "/").concat(tipo, "/").concat(id))];
            case 1:
                response = _b.sent();
                data = adaptarAtributos(response.data);
                res.json(data);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                res.status(500).json({ error: 'Error al obtener el recurso' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
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
app.post('/crear-recurso/personaje', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, query, values, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                data = req.body;
                query = 'INSERT INTO personaje (name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships, created, edited, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                values = [
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
                return [4 /*yield*/, db.query(query, values)];
            case 1:
                _a.sent();
                res.status(201).json({ message: 'Personaje creado exitosamente' });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error('Error al crear el personaje:', error_2);
                res.status(500).json({ error: 'Error al crear el personaje' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Función para adaptar los nombres de atributos
function adaptarAtributos(data) {
    console.log('Datos recibidos:', data);
    var newData = {};
    for (var key in data) {
        if (mapeo[key]) {
            var translatedKey = mapeo[key];
            newData[translatedKey] = data[key];
        }
        else {
            newData[key] = data[key];
        }
    }
    console.log('Datos después del mapeo:', newData);
    return newData;
}
var PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function () {
    console.log("Servidor corriendo en el puerto ".concat(PORT));
});
exports.default = server;
