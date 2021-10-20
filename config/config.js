require('dotenv').config();

module.exports = {
  "development": {
    "username": "rui",
    "password": process.env.password,
    "database": "rui",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": "rui",
    "password": process.env.password,
    "database": "rui",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": "rui",
    "password": process.env.password,
    "database": "rui",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": false
  }
}
