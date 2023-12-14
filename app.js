const express = require('express');
require('dotenv').config();
const imageRoutes = require('./src/routes/imageRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

const port = 3000;
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Text to Speech API',
      version: '1.0.0',
      description: 'Text to Speech API using Azure AI',
    },
    servers: [{
      url: process.env.BASE_URL || 'http://localhost:3000',
    }],
  },
  apis: ['./src/routes/imageRoutes.js'],
};
const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/analyze', imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;