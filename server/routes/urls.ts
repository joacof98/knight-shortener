import express from 'express';
const Url = require("../models/Url");
const validUrl = require('valid-url'); 
import { nanoid } from 'nanoid'

let router = express.Router()

router.get("/:urlCode", async (req, res) => {
  const code: string = req.params.urlCode;
  try {
    const url = await Url.findOne({ urlCode: code });
    if (!url) {
      return res
        .status(400)
        .send("There is no webpage associated with that code 🤯");
    }

    return res.send(url.realUrl);
  } catch (err) {
    return res.status(500).send("Server Error 🤯");
  }
});

router.post("/", async (req, res) => {
  const { urlToShorten } = req.body;
  if (typeof urlToShorten !== "string" || !validUrl.isUri(urlToShorten)) {
    res.status(400).send("Please, provide a valid Url. ⚔️");
  } else {
    try {
      const urlCode: string = nanoid(7);
      const code = await Url.findOne({ urlCode });
      if (code) return res.send(code.realUrl);

      const shortUrl: string = `knt.st/${urlCode}`;
      const urlShortened = new Url({
        urlCode,
        realUrl: urlToShorten,
        shortUrl,
        date: new Date().toISOString(),
      });

      await urlShortened.save();
      return res.send(shortUrl);
    } catch (err) {
      return res.status(500).send("Server Error 🤯");
    }
  }
});

module.exports = router