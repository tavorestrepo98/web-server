const morgan = require('morgan')
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');


app.use(express.static( __dirname + "/public"));

//Settings
app.set('port', process.env.PORT || 3000);
hbs.registerPartials(__dirname + '/views/parciales' );
app.set('view engine', 'hbs'); 

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gustavo',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res ) =>{
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(app.get('port'), ()=>{
    console.log(`Escuchando puerto ${app.get('port')}`);
});