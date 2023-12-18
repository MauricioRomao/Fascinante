const Sequelize = require('sequelize')

const sequelize = new Sequelize('cadastro', 'root', 'grandecompaq12345', {
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectModule: require('mysql2')
})


const postagens = sequelize.define("postagens", {
    titulo: { type: Sequelize.STRING },
    conteudo: { type: Sequelize.TEXT },
}
);

 postagens.create({
    titulo: 'o anime do ano',
    conteudo:'esse anime foi considerado o melhor anime do ano'
 })


/*
sequelize.authenticate().then(()=> {
    console.log('conect sucessfull');
}).catch((error) => {console.log('errro durante a execução' + error)})

*/
