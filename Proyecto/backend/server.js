const express = require('express');
const http = require('http');
const logger = require('morgan');
const cors = require('cors');
const usersRoutes = require('./routes/userRoutes');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

// Middlewares globales
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Rutas
app.use('/api/users', usersRoutes);

// Configuración extra
app.disable('x-powered-by');
app.set('port', port);

// Servidor
server.listen(port, '172.20.240.1' || 'localhost', function () {
  console.log(
    'App node.js ' +
      process.pid +
      ' ejecutando en ' +
      server.address().address +
      ':' +
      server.address().port
  );
});

// Endpoints de prueba
app.get('/', (req, res) => {
  res.send('Ruta raíz del Backend');
});

app.get('/test', (req, res) => {
  res.send('Ruta TEST');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});
