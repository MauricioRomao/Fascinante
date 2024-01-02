const db = require('./db')
const date = require('./Agendas')
const cliente = db.sequelize.define('cliente',{
    Nome:{
        type:db.Sequelize.STRING
    },
    Email:{
        type:db.Sequelize.TEXT
    }

})

module.exports = cliente
