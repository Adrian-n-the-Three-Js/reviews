const express = require('express');

const app = express();
const port = 3000;
const models = require('./models.js');

app.use('/', express.static('public'));

app.get('/reviews/:hotelId', (req, res) => {
  const hotelId = req.params.hotelId || 1;
  models.getReviewData((results) => {
    res.status(200).send(JSON.stringify(results));
  }, hotelId);
});

app.get('/questions', (req, res) => {
  models.getQuestionData((resultsPacket) => {
    res.status(200).send(JSON.stringify(resultsPacket));
  });
});

app.listen(port, () => console.log(`Reviews app listening at ${port}`));
