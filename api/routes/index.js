const express = require("express");
const pokemonRouter = require('./pokemonRoutes')
const cors = require('cors')


module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,DELETE,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    app.use(cors())
    next();
  })

  app.use(pokemonRouter);
  app.get("/", (req, res) => res.send("AAA"));
};
