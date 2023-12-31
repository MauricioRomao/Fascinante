const db = require ('./db')

const Agendas  =  db.sequelize.define('Agenda', {
    data : {
        type:db.Sequelize.DATE,
        allowNull: false
    }
})
