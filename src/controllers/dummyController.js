const express = require('express');
const {
  dummyjsonConfig,
  fetchDataFromDummyjson,
} = require('../services/dummyService');

const router = express.Router();

router.get('/products', async (req, res) => {
  const { skip, limit } = req.query;
  try {
    const data = await fetchDataFromDummyjson(
      dummyjsonConfig.endpoints.products,
      skip,
      limit
    );
    res.json(data);
  } catch (error) {
    res.status(500).send('Error retrieving products from Dummyjson');
  }
});

module.exports = router;
