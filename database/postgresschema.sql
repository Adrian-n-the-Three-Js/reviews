DROP DATABASE IF EXISTS reviewcomp;

CREATE DATABASE reviewcomp;

\c reviewcomp;

CREATE SCHEMA reviews;

CREATE TABLE hotels (
  id int PRIMARY KEY,
  hotel_city varchar(255) NOT NULL,
  hotel_name varchar(140) NOT NULL
);

CREATE TABLE users (
  id int PRIMARY KEY,
  user_avatar varchar(2083),
  user_city varchar(255) NOT NULL,
  user_contributions int DEFAULT 0,
  user_helpful_votes int DEFAULT 0,
  username varchar(50) NOT NULL
);

CREATE TABLE reviews (
  hotel_id int NOT NULL references hotels(id),
  review_date TEXT NOT NULL,
  id int PRIMARY KEY,
  cleanliness_rating int,
  date_of_stay TEXT NOT NULL,
  location_rating int,
  overall_rating int NOT NULL,
  review_body VARCHAR(20000) NOT NULL,
  review_helpful_votes int DEFAULT 0,
  room_tip varchar(140),
  rooms_rating int,
  service_rating int,
  sleep_quality_rating int,
  trip_type varchar(60),
  user_id int NOT NULL references users(id),
  value_rating int
);