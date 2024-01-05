const express = require('express')
const router = express()

router.get('/agendar',(req,res)=>{
    res.render('agendar')
})

module.exports = router