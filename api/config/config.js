module.exports = {
  development: {
    username: "root",
    password: "admin",
    database: "banco_pokemon_crud",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.username_production,
    password: process.env.password_production,
    database: process.env.database_production,
    host: process.env.host_production,
    dialect: "mysql",
  },
};

