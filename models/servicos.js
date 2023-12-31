const db = require('./db')

const service = db.sequelize.define('service',{
    Cabelo:{
        type:db.Sequelize.STRING
    },
    descricao:{
        type:db.Sequelize.TEXT
    }

})

