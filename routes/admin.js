const express = require('express')
const router = express()



router.get('/admin', (req, res) => {
   res.render('secure')
})

  /* Post HTTP */




module.exports = router