require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();


// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Server Config
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));