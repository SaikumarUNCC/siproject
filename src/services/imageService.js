const { Readable } = require('stream');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
const ComputerVisionAPIClient = require('azure-cognitiveservices-computervision');

const serviceKey = process.env.AZURE_COMPUTER_VISION_KEY;
const endpoint = process.env.AZURE_COMPUTER_VISION_ENDPOINT;

const credentials = new CognitiveServicesCredentials(serviceKey);
const computerVisionClient = new ComputerVisionAPIClient(credentials, endpoint);

const analyzeImage = async (imageBuffer) => {
  const fileStream = new Readable();
  fileStream.push(imageBuffer);
  fileStream.push(null);

  const visualFeatures = ['Categories', 'Description', 'Color'];
  const details = [''];

  return computerVisionClient.analyzeImageInStream(fileStream, { visualFeatures, details });
};

module.exports = {
  analyzeImage,
};