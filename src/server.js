const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// String de Conexão
mongoose.connect('mongodb+srv://usr_aircnc_db:aircnc2k19@cluster0-hlave.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// habilitar middleware CORS
app.use(cors());

// habilitar middleware express para utilizar formato JSON
app.use(express.json());
// habilitar middleware de rotas
app.use(routes);

app.listen(3333);
