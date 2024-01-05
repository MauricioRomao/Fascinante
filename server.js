const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');


/* Models*/
const Agendas = require('./models/Agendas');
const cliente = require('./models/cliente');
const { json } = require('sequelize');

/* Routes */

const admin = require('./routes/admin')
const agendar = require('./routes/agendas')


/*config */
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

/* <!--------------> */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* <!-- Admin ------> */

app.use('/controller', admin)
app.use('/controller', agendar)

/* principal route */

app.get('/', (req, res) => {
  res.render('home')

});










const PORT = 8082;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
