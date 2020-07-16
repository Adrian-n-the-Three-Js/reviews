const express = require('express');
const {
  getAllReviews, postReview, editReview, deleteReview,
} = require('./review.js');

const app = express();
const port = 3004;

app.use('/hotels/:hotelId', express.static(`public`));

app.get('/hotels/:hotelId/reviews', (req, res) => {
  getAllReviews()
    .then((response) => res.send(response))
    .catch(() => res.sendStatus(400));
});

app.post('/hotels/:hotelId/reviews', (req, res) => {
  postReview(req.body)
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(400));
});

app.patch('/hotels/:hotelId/reviews/:reviewId', (req, res) => {
  editReview(req.params.reviewId, req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

app.delete('/hotels/:hotelId/reviews/:reviewId', (req, res) => {
  deleteReview(req.params.reviewId)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))