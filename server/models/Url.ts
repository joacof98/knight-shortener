const { model, Schema } = require('mongoose');

const urlSchema = new Schema({
  urlCode: String,
  realUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now }
})

module.exports = model('Url', urlSchema);
