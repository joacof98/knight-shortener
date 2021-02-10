import express from 'express';
const Url = require("../models/Url");
const validUrl = require('valid-url'); 
import { nanoid } from 'nanoid'

let router = express.Router()

router.post("/", async (req, res) => {
  const { urlToShorten } = req.body;
  if (typeof urlToShorten !== 'string' || !validUrl.isUri(urlToShorten)) {
    res.status(400).send("Please, provide a valid Url. ⚔️")
  } else {
    const urlCode: string = nanoid(7)
    const code = await Url.find({urlCode})
    if(code.length > 0) return res.send(code.realUrl)
    
    const shortUrl: string = `knt.st/${urlCode}`
    const urlShortened = new Url({
      urlCode,
      realUrl: urlToShorten,
      shortUrl,
      date: new Date().toISOString()
    })

    await urlShortened.save()
    return res.send(shortUrl)
  }
});

module.exports = router