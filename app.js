const express = require('express');
require('dotenv').config();
const imageRoutes = require('./src/routes/imageRoutes');

const app = express();
const port = 3000;

app.use('/analyze', imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;