const express = require('express')
const router = express()
const bodyParser = require('body-parser');

/* pegando o modelo agendar */
const Agendar = require('../models/Agendas')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



router.get('/agendar',(req,res)=>{
    res.render('agendar')
     
  })
  
  router.post('/agendar',(req,res)=>{
    const {servico, date} = req.body
  Agendar.create({
      servico,
      date
  }).then(()=>{
      res.redirect('/')
  }).catch((e)=>{
      res.send('erro' + e)
  })
  
    
  })

module.exports = router