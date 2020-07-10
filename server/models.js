const db = require('../database/index.js');

const getReviewData = (callback, hotelId = 1) => {
  const sql = 'SELECT reviews.*, month(reviews.date_of_stay) as month_of_stay, hotels.hotel_name, hotels.hotel_city, users.username, users.user_avatar, users.user_city, users.user_contributions, users.user_helpful_votes FROM reviews JOIN hotels ON reviews.hotel_id = hotels.id JOIN users ON reviews.user_id = users.id WHERE hotels.id = ?';

  db.query(sql, [hotelId], (err, results) => {
    if (err) throw err;
    callback(results);
  });
};

module.exports.getReviewData = getReviewData;
