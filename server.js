const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const Agendas = require('./models/Agendas');
const cliente = require('./models/cliente')


app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('home');
});




/*  rota post e get para a criação de servicos */

app.get('/agendar', (req, res) => {
  res.render('agendar')

});

app.post('/agendar', (req, res) => {
  Agendas.create({
    servico: req.body.servico,
    date: req.body.data
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Erro na conexão:', error);
      res.status(500).send('Erro interno no servidor');
    });
});
/* fim desta rota */

/*  rota post e get para  login */

app.get('/login', (req, res) => {
  res.render('login')
});
  
app.post('/agendar', (req, res) => {
  agendar.create({
    servico: req.body.servico,
    date: req.body.date
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      console.error('Erro na conexão:', error);
      res.status(500).send('Erro interno no servidor');
    });
});
/* fim desta rota */


const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
