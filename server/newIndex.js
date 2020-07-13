const express = require('express');
const { default: Review } = require('../client/components/review');
const Review = require('./review.js')
const app = express();
const port = 3004;

app.use('/hotels/:hotelId', express.static(`public`));

app.get('/hotels/:hotelId/reviews', (req, res) => {
  Review.getAllReviews()
    .then((response) => res.send(response))
    .catch(() => res.sendStatus(400))
})

app.post('/hotels/:hotelId/reviews', (req, res) => {
  Review.postReview(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400))
})

app.patch('/hotels/:hotelId/reviews/:reviewId', (req, res) => {
  Review.postReview(req.params.reviewId, req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(400))
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))