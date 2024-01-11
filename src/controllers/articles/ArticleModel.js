const Sequelize = require('sequelize');
const connection = require('@database/database');
const CategoryModel = require('@controllers/categories/CategoryModel.js');

const ArticleModel = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
})

CategoryModel.hasMany(ArticleModel) // Relacionando 1-N da tabela category com article 
ArticleModel.belongsTo(CategoryModel) // Relacionando 1-1 da tabela article com category 

// ArticleModel.sync({force: true});

module.exports = ArticleModel;