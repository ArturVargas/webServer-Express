
const express = require('express');
const app = express()
const hbs = require('hbs');

//helpers
require('./hbs-helpers/helpers');

const port = process.env.PORT || 3000

//midleware
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

//hbs
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //renderiza el home del view
    res.render('home', {
        nombre: 'Arturo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})




 
app.listen(port, () => {
    console.log(`Escuchando en Puerto ${port}`);
})