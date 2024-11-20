require('dotenv').config();
const { Sequelize } = require('sequelize');

// Conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,  // Nombre de la base de datos
  process.env.DB_USER,  // Usuario
  process.env.DB_PASS,  // Contraseña
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',   // Usamos MySQL
  }
);

// Importar modelos
const Products = require('./products')(sequelize);
const SalesReport30day = require('./salesReport30day')(sequelize);

module.exports = { sequelize, Products, SalesReport30day };
