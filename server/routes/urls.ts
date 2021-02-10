const Url = require("../models/Url");
import express from 'express';
let router = express.Router()

router.get("/", (req, res) => {
  res.send("acortando")
})

router.post("/", (req,res) => {
  
})

module.exports = router