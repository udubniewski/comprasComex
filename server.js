const express = require('express');
const { sequelize } = require('./models');

const app = express();

app.get('/', (req, res) => res.send('Servidor funcionando correctamente.'));

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
  );
});
