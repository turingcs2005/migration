'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {}; // db starts with an empty object

// 🔥 create database connection pool
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // connect to database
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// 🔥 create a bunch of sequelize models and attach them to 'db' object as properties
fs
  .readdirSync(__dirname) // Returns an array of directory/file names
  .filter(file => {
    // any JavaScript file (.js) not equal to index.js
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    // invoke function defined in each model file to create models
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // every JavaScript class has a name property. assign model to a db property with the same name as the model name.
    db[model.name] = model;
  });

// 🔥 create associations between models 
Object.keys(db).forEach(modelName => {
  // if static function 'associate' is not empty, invoke it to create association
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// 🔥 add database connection pool and Sequelize constructor to db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
