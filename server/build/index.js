"use strict";
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;
// Middlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.get('/api/hello', (_req, res) => {
    res.send('The Knight Shortener API');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
