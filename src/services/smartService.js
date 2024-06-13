const { formatData } = require('../utils/dataFormatter');

const smartjsonConfig = {
  baseUrl: 'https://dummyjson.com',
  endpoints: {
    items: '/items',
    users: '/users',
    posts: '/posts',
  },
};

const fetchDataFromSmartjson = async (endpoint, offset = 0, limit = 10) => {
  try {
    const response = await fetch(
      `${smartjsonConfig.baseUrl}${endpoint}?offset=${offset}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return formatData(data, 'smartjson');
  } catch (error) {
    console.error(`Error fetching data from Smat json ${endpoint}:`, error);
    throw error;
  }
};

module.exports = {
  fetchDataFromSmartjson,
  smartjsonConfig,
};
