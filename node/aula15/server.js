const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectString = 'mongodb+srv://hermanotel157:santos123@cursojs02.asjufx9.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority'
mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedtopology: true })
.then(() => {
    
    app.emit('pronto')
})
.catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
//const meuMiddleware = require('./src/middlewares/middlewares');
const { middleGlobal } =  require('./src/middlewares/middlewares');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'ssdsadddadddsasd()sdasd555 dasd ewqeqeq',
    //store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: connectString})
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//         Nossos proprios middlewares
app.use(middleGlobal)
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, ()=> {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
