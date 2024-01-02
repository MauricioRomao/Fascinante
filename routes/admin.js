const cliente = require ('')




cliente.findAll().then(function (cliente) {
    const nomesClientes = cliente.map(cliente => cliente.Email);
    res.render('home', { nomesClientes });
})