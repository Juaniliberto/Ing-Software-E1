// db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',      // porque Docker expone el puerto 5432 a tu máquina
  port: 5432,
  user: 'inventory',      // el usuario que definiste al correr el contenedor
  password: 'inventory',  // la contraseña que definiste
  database: 'inventory',  // la base que definiste
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
