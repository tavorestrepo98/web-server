const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');


app.use(express.static( path.join(__dirname + "/public")));

//Settings
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/parciales' );
app.set('view engine', 'hbs'); 

//middlewares
app.use(express.urlencoded({ extended: false }));
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

app.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`);
});