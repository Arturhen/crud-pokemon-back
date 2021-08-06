const express = require("express");
const pokemonRouter = require('./pokemonRoutes')
const cors = require('cors')


module.exports = (app) => {
  //para atender requisições em Json
  app.use(express.json());
  //Requisições podem ser aceitas de outros formatos
  app.use(express.urlencoded({ extended: true }));
  
  //Configurações do Cors
  app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,DELETE,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors())
    next();
  })

  app.use(pokemonRouter);
  app.get("/", (req, res) => res.send("I'M ALIVE"));
};
