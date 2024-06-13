const express = require('express');

const dummyjsonController = require('./src/controllers/dummyController');
const smartjsonController = require('./src/controllers/smartController');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/v1/dummyjson', dummyjsonController);
app.use('/v1/smartjson', smartjsonController);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
