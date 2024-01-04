const db = require('./db')

const Agendas = db.sequelize.define('Agenda', {
    servico: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: db.Sequelize.DATE,
        unique: true, 
        allowNull: false,
    }
})
/*
Agendas.sync({force:true})
*/
module.exports = Agendas
