CREATE KEYSPACE IF NOT EXISTS reviewComp;
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

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
  user_id uuid,
  hotel_id uuid,
  review_date timestamp,
  review_body text,
  date_of_stay date,
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