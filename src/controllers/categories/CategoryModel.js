const Sequelize = require('sequelize');
const connection = require('@database/database');

const CategoryModel = connection.define('categorias', {
  title: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

// CategoryModel.sync({force: true});

module.exports = CategoryModel;