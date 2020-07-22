require('dotenv').config()
const express = require('express');
const { getReviews } = require('./review.js');
const cluster = require('cluster');
// const relic = require('newrelic');
const numCPUs = require('os').cpus().length;
const app = express();
const port = 3004;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  // cluster.on('exit', (worker, code, signal) => {
  //   console.log(`worker ${worker.process.pid} died`);
  // });
} else {
  app.use('/hotels/:hotelId', express.static(`public`));

  app.get('/hotels/:hotelId/reviews', (req, res) => {
    getReviews(req.params.hotelId)
      .then((response) => res.send(JSON.stringify(response.rows)))
      .catch((err) => { console.log('err', err); res.send(err) });
  });
  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
}


// app.post('/hotels/:hotelId/reviews', (req, res) => {
//   postReview(req.body)
//     .then(() => res.sendStatus(201))
//     .catch(() => res.sendStatus(400));
// });

// app.patch('/hotels/:hotelId/reviews/:reviewId', (req, res) => {
//   editReview(req.params.reviewId, req.body)
//     .then(() => res.sendStatus(200))
//     .catch(() => res.sendStatus(404));
// });

// app.delete('/hotels/:hotelId/reviews/:reviewId', (req, res) => {
//   deleteReview(req.params.reviewId)
//     .then(() => res.sendStatus(200))
//     .catch(() => res.sendStatus(404));
// });
