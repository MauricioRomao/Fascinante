const Sequelize = require('sequelize')
const sequelize = new Sequelize('fascinante', 'root', 'yourPass', {
    host: '27.0.0.11',
    dialect: 'mysql',
    dialectModule: require('mysql2')
})

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize     
}