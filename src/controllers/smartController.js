const express = require('express');
const {
  fetchDataFromSmartjson,
  smartjsonConfig,
} = require('../services/smartService');

const router = express.Router();

router.get('/items', async (req, res) => {
  const { offset, limit } = req.query;
  try {
    const data = await fetchDataFromSmartjson(
      smartjsonConfig.endpoints.items,
      offset,
      limit
    );
    res.json(data);
  } catch (error) {
    res.status(500).send('Error retrieving items from SmartJSON');
  }
});

module.exports = router;
