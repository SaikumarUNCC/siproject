const express = require('express');
const imageController = require('../controllers/imageController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();
/**
 * @swagger
 * /analyze:
 *   post:
 *     summary: Analyze Image
 *     description: Uploads an image for analysis.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file to be analyzed.
 *     responses:
 *       200:
 *         description: Successful response with analysis results.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *                   description: Analysis result of the image.
 *       400:
 *         description: Bad request, invalid image format or missing image.
 *       500:
 *         description: Server error or issue with the analysis process.
 */
router.post('/', upload.single('image'), imageController.analyzeImage);

module.exports = router;