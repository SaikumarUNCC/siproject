const express = require('express');
const imageController = require('../controllers/imageController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/', upload.single('image'), imageController.analyzeImage);

module.exports = router;