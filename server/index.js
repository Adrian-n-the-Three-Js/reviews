const express = require('express');

const app = express();
const port = 3004;
const models = require('./models.js');

app.use('/hotels/:hotelId', express.static(`public`));

app.get('/hotels/:hotelId/reviews', (req, res) => {
  // to do: filter hotelId to validate input
  const hotelId = req.params.hotelId || 1;
  models.getReviewData((results) => {
    res.status(200).send(JSON.stringify(results));
  }, hotelId);
});

// app.post('/reviews/:reviewId', (req, res) => {
//   models.postReview(req, res, ((reviewPosted) => {
//     if (err) {
//       res.status(400)
//     } else {
//       res.send(JSON.stringify(reviewPosted))
//     }
//   }));
// });

app.listen(port, () => console.log(`Reviews app listening at ${port}`));
