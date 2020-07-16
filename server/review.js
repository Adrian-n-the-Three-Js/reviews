const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('reviewComp', 'root', 'root', {
  host: 'localhost',
  dialect: 'postgres',
});

const reviewSchema = {
  user_id: DataTypes.INTEGER,
  hotel_id: DataTypes.INTEGER,
  review_date: DataTypes.DATE,
  review_body: DataTypes.TEXT,
  date_of_stay: DataTypes.DATE,
  room_tip: DataTypes.TEXT,
  trip_type: DataTypes.TEXT,
  overall_rating: DataTypes.INTEGER,
  value_rating: DataTypes.INTEGER,
  location_rating: DataTypes.INTEGER,
  service_rating: DataTypes.INTEGER,
  rooms_rating: DataTypes.INTEGER,
  cleanliness_rating: DataTypes.INTEGER,
  sleep_quality_rating: DataTypes.INTEGER,
  review_helpful_votes: DataTypes.INTEGER,
}

const Review = sequelize.define('review', reviewSchema);

const getAllReviews = (hotelId) => Review.findAll({ where: { hotel_id: hotelId } });

const postReview = (review) => Review.create(review);

const editReview = (id, reviewEdits) => Review.findAll({ where: { id } })
  .then((review) => { review.updateAttribute(reviewEdits); });

const deleteReview = (id) => Review.destroy({ where: { id } });

module.exports = {
  getAllReviews, postReview, editReview, deleteReview,
};
