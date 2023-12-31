const Sequelize = require('sequelize')
const sequelize = new Sequelize('fascinante', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectModule: require('mysql2')
})

module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize     
}