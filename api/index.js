const express = require('express')
const dotEnv = require('dotenv')

dotEnv.config()

const routes = require('./routes');

const app = express();

routes(app);

const port = process.env.PORT;

app.listen(port,() => console.log(`o servidor esta rodando`))