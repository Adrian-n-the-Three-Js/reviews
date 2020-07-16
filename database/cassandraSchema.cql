DROP KEYSPACE IF EXISTS reviewComp;

CREATE KEYSPACE reviewComp
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

USE reviewcomp;

CREATE TABLE hotels (
  id int PRIMARY KEY,
  hotel_name text,
  hotel_city text,
);

CREATE TABLE users (
  id int PRIMARY KEY,
  username text,
  user_avatar text,
  user_city text,
  user_contributions int,
  user_helpful_votes int,
);

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