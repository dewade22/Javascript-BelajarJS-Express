const express = require('express')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.json()) //Karena Typenya JSON


//Panggil Router yang telah dibuat
const productRoutes = require('./src/routes/products');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', productRoutes);
app.listen(4000)