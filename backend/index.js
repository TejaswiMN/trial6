const express = require('express');
const app = express();
const profile = require('./profile');

app.use('/profile', profile);

const PORT = 5000;
const server = app.listen(PORT, () => {
    console.log('Server is running on port',PORT);
})