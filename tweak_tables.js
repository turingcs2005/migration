const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./models');
const queryInterface = sequelize.getQueryInterface();

( async () => {
    try {
        await queryInterface.dropTable('Moms');
        await queryInterface.dropTable('Dads');
        await queryInterface.dropTable('SequelizeMeta');

        await queryInterface.createTable('Dads', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          firstName: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          deletedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
    } catch (e) {
        console.log('Error:', e);
    }
})();