const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
//const meuMiddleware = require('./src/middlewares/middlewares');
const { middleGlobal } =  require('./src/middlewares/middlewares');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//         Nossos proprios middlewares
app.use(middleGlobal)
app.use(routes);

app.listen(3000, ()=> {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});