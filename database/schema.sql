CREATE DATABASE reviewComp;

USE reviewComp;

CREATE TABLE hotels (
  id int NOT NULL auto_increment,
  hotel_name varchar(140) NOT NULL UNIQUE,
  hotel_city varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL auto_increment,
  username varchar(50) NOT NULL UNIQUE,
  user_avatar varchar(2083),
  user_city varchar(255) NOT NULL,
  user_contributions int DEFAULT 0,
  user_helpful_votes int DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int NOT NULL auto_increment,
  user_id int NOT NULL,
  hotel_id int NOT NULL,
  review_date TIMESTAMP NOT NULL,
  review_body text(20000) NOT NULL,
  date_of_stay DATE NOT NULL,
  room_tip varchar(140),
  trip_type varchar(60),
  overall_rating tinyint NOT NULL,
  value_rating tinyint,
  location_rating tinyint,
  service_rating tinyint,
  rooms_rating tinyint,
  cleanliness_rating tinyint,
  sleep_quality_rating tinyint,
  collected_in_part_hotel tinyint(1),
  review_helpful_votes int DEFAULT 0,
  PRIMARY KEY (id),
  CONSTRAINT one_review_per_user_per_hotel UNIQUE (user_id, hotel_id)
);

CREATE TABLE questions (
  id int NOT NULL auto_increment,
  user_id int NOT NULL,
  hotel_id int NOT NULL,
  question_date TIMESTAMP NOT NULL,
  question_body text(20000) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE answers (
  id int NOT NULL auto_increment,
  question_id int NOT NULL,
  answerer_user_id int NOT NULL,
  answer_date TIMESTAMP NOT NULL,
  answer_body text(20000) NOT NULL,
  thumbs_up_count int DEFAULT 0,
  thumbs_down_count int DEFAULT 0,
  PRIMARY KEY (id)
);

-- To execute: mysql -u root < ./database/schema.sql
-- Kill answer date -- stretch feature