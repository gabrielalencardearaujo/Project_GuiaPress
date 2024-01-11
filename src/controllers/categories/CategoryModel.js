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

 // Criando a tabela no banco de dados, apos a criacao podemos remover ou comentar a linha de codigo abaixo para nao forcar a criacao da tabela toda vez que o arquivo é carregado: 
// CategoryModel.sync({force: true});

module.exports = CategoryModel;