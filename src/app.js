const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const p5Routes = require('./routes/p5Routes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', p5Routes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI).then(() => {
    server = app.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    });
});

mongoose.connection.on('connected', () => {
    console.log("database connected")
});
