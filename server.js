const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();


const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))

app.use(express.static(path.join(__dirname, 'build')));

// Serve the React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on a specified port (e.g., 3000)
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log('Server is running on port',PORT);
})