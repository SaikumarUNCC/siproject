const imageService = require('../services/imageService');

const analyzeImage = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).send('No image uploaded');
      return;
    }

    const analysis = await imageService.analyzeImage(req.file.buffer);
    res.json(analysis);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
};

module.exports = {
  analyzeImage,
};