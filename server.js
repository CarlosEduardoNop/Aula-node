const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

requireDir("./src/models");

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./src/routes'));

app.listen(3001);
