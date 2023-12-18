const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const body_parser = require('body-parser')
const post = require('./models/Post')


// config, 
// template ENGINE
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body-parser config
app.use(body_parser.urlencoded({ extended: false }))
app.use(body_parser.json())

//  db_poster


app.get('/', (req,res)=>{
res.render('index')
})



// routs 


 app.post('/add', (req, res)=>{
  post.create({
    titulo:req.body.titulo,
    conteudo:req.body.conteudo
  }).then(()=>{res.redirect('/')}).catch((error)=>{"erro na conexao" + error})
})

 
app.listen(8081, console.log('server rodando na http://loca lhost:8081'))

