USE reviewcomp; 

DROP TABLE IF EXISTS reviews;
 
 CREATE TABLE reviews (
  id int,
  user_id int,
  hotel_id int,
  review_date text,
  review_body text,
  date_of_stay text,
  room_tip text,
  trip_type text,
  overall_rating tinyint,
  value_rating tinyint,
  location_rating tinyint,
  service_rating tinyint,
  rooms_rating tinyint,
  cleanliness_rating tinyint,
  sleep_quality_rating tinyint,
  review_helpful_votes int,
  PRIMARY KEY ((hotel_id), review_date, id)
);

COPY reviewComp.reviews(hotel_id,review_date,id,cleanliness_rating,date_of_stay,location_rating,overall_rating,review_body,review_helpful_votes,room_tip,rooms_rating,service_rating,sleep_quality_rating,trip_type,user_id,value_rating) from './database/reviews.csv' with delimiter=',' and header=true;