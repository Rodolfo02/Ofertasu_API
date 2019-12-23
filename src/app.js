//Base da Aplicação
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const app = express();

//Conexão com o banco

mongoose.connect(config.connectionString, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});


//Carregar os models
require('./models/product');
require('./models/user');
require('./models/market');

//Rotas da aplicação
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const userRoute = require('./routes/user-route');
const marketRoute = require('./routes/market-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

app.use('/', indexRoute);
app.use('/api/products', productRoute);
app.use('/api/user', userRoute);
app.use('/api/market', marketRoute);


module.exports = app;