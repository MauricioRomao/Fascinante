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
/*
cliente.sync({force:true})
*/
module.exports = cliente
