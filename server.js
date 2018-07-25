require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Express Static Middleware
// app.use(express.static(`${__dirname}/client/build`))

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Server Config
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));