const db = require('../database/index.js');

const getReviews = (hotelId) => {
  const query = {
    text: 'select * from reviews inner join hotels on reviews.hotel_id = hotels.id inner join users on reviews.user_id = users.id where reviews.hotel_id = ' + hotelId
  };

  return db.query(query)
};

module.exports = { getReviews };
