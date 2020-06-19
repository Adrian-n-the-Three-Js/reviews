const db = require('../database/index.js');
const mysql = require('mysql');

var getReviewData = (callback) => {
  let sql = 'SELECT reviews.*, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM reviews JOIN hotels ON reviews.hotel_id = hotels.id JOIN users ON reviews.user_id = users.id';

  db.query(sql, (err, results) => {
    if (err) throw error;
    callback(results);
  });
};

var getQuestionData = (callback) => {
  //
};

module.exports.getReviewData = getReviewData;
module.exports.getQuestionData = getQuestionData;