const { formatData } = require('../utils/dataFormatter');

const dummyjsonConfig = {
  baseUrl: 'https://dummyjson.com',
  endpoints: {
    products: '/products',
    users: '/users',
    posts: '/posts',
  },
};

const fetchDataFromDummyjson = async (endpoint, skip = 0, limit = 10) => {
  try {
    const response = await fetch(
      `${dummyjsonConfig.baseUrl}${endpoint}?skip=${skip}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return formatData(data, 'dummyjson');
  } catch (error) {
    console.error(`Error fetching data from DummyJSON ${endpoint}:`, error);
    throw error;
  }
};

module.exports = {
  fetchDataFromDummyjson,
  dummyjsonConfig,
};
