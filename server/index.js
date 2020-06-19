const express = require('express');
const app = express();
const port = 3000;
const models = require('./models.js');

app.get('/reviews', (req, res) => {
  models.getReviewData((results) => {
    res.status(200);
    res.end(JSON.stringify(results));
  });
});

app.listen(port, () => console.log(`Reviews app listening at ${port}`));