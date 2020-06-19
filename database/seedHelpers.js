const db = require('./index.js');

// REVIEWS

var getRandomIndex = (optionArrayLength) => {
  return Math.floor(Math.random() * Math.floor(optionArrayLength));
};

var generateReviewBody = () => {

  var moods = ['hated', 'taken aback by', 'angered by', 'confused by', 'surprised by', 'delighted by', 'happy with', 'loved'];
  let randomMood = moods[getRandomIndex(moods.length)];

  var nouns = ['chairs', 'cupboards', 'refreshments', 'assistance', 'amenities', 'appliances'];
  let randomNoun = nouns[getRandomIndex(nouns.length)];

  var areas = ['workout room', 'lobby', 'outdoor area', 'room', 'bathroom', 'garage'];
  let randomArea = areas[getRandomIndex(areas.length)];

  var locationAdjectives = ['horrible', 'noisy', 'okay', 'nothing special', 'relaxing', 'vibrant', 'pleasant', 'fun', 'perfect'];
  let randomAdj = locationAdjectives[getRandomIndex(locationAdjectives.length)];

  var stayAgainLikelihood = ['not', 'probably not', 'potentially', 'likely', 'very likely', 'definitely', 'certainly'];
  let randomLikelihood = stayAgainLikelihood[getRandomIndex(stayAgainLikelihood.length)];

  return `I ${randomMood} the ${randomNoun} in the ${randomArea}. The location was ${randomAdj}. All things aside, I would ${randomLikelihood} stay here again.`;
};

var generateRoomTip = () => {
  // some people might not have tips, but assume everyone does at first
  var commands = ['Do not forget to', 'Make sure to', 'Always', 'You might want to', 'I would advise everyone to', 'Never forget to', 'It is always recommended that you', 'Do not', 'Never'];
  let randomCommand = commands[getRandomIndex(commands.length)];

  var actions = ['try the snacks', 'hang out in the lobby', 'eat at the hotel restaurant', 'go swimming', 'ask for an upgrade', 'request a tour of the facilities', 'ask for local restaurant recommendations', 'tip the maids', 'use the mini bar', 'check out the bar'];
  let randomAction = actions[getRandomIndex(actions.length)];

  return `${randomCommand} ${randomAction}.`;
};

var generateTripType = () => {
  var tripTypes = ['Families', 'Couples', 'Solo', 'Business', 'Friends'];
  let randomTripType = tripTypes[generateRandomIndex(tripTypes.length)];
  return randomTripType;
}

var generateUserName = () => {
  var firstName = ['Dave', 'Eric', 'Rob', 'Craig', 'Greg', 'Adam', 'John', 'Raj', 'Taylor', 'Alex', 'Angela', 'Kathy', 'Destiny', 'Jennifer', 'Ashley', 'Jess'];
  let randomFirstName = firstName[getRandomIndex(firstName.length)];

  var lastInitial = ['J', 'D', 'W', 'S', 'K', 'C', 'H', 'A', 'B'];
  let randomLastInitial = lastInitial[getRandomIndex(lastInitial.length)];

  var maxNumber = 100;
  let randomLastNumber = maxNumber[getRandomIndex(maxNumber)];

  return `${randomFirstName} ${randomLastInitial}`;
};

var generateCity = () => {
  // cities only at first; could expand to states
  var city = ['Los Angeles', 'San Francisco', 'Dallas', 'Houston', 'Fort Worth', 'Louisville', 'New Orleans', 'San Diego', 'Chicago', 'St. Louis', 'Denver', 'Boise', 'Indianapolis', 'Jacksonville', 'Tampa', 'Miami', 'New York City', 'Nashville', 'Huntsville', 'Oklahoma City', 'Phoenix'];
  let randomCity = city[getRandomIndex(city.length)];
  return randomCity;
};

var generateUserAvatar = () => {
  var avatarUrls = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fbeautiful-view-of-moraine-lake-2662116%2F&psig=AOvVaw2KVYteqdGtnIBWVYrUzqrB&ust=1592590149247000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjh0eP6i-oCFQAAAAAdAAAAABAD', 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.healthreason.com%2Fbeautiful-view%2F&psig=AOvVaw2KVYteqdGtnIBWVYrUzqrB&ust=1592590149247000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjh0eP6i-oCFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fwallpaper%2Fcomments%2F81xxwe%2Fa_beautiful_view_of_the_sea_1920x1080%2F&psig=AOvVaw2KVYteqdGtnIBWVYrUzqrB&ust=1592590149247000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjh0eP6i-oCFQAAAAAdAAAAABAO', 'https://image.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVscczKCwBsAg0aMMcI5NjX1meu8_HDZ3d2jhQonix1DCY5n1E&usqp=CAU', 'https://cache.desktopnexus.com/thumbseg/1584/1584748-bigthumbnail.jpg', 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUQobLPiOw-RstxSgFJdTdA5eB0xzHi8p8cbkZfG7u9Ne3xTqz&usqp=CAU'];
  let randomUrl = avatarUrls[getRandomIndex(avatarUrls.length)];
  return randomUrl;
};

// for user contributions, user helpful votes, ratings
var generateNumber = (num) => {
  // pass num + 1 in order that we can pass 5 for ratings and potentially receive a 5
  return getRandomIndex(num+1);
}

var generateDate = (start) => {
  let end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};


// QUESTIONS

var generateQuestionBody = () => {
  var opener = ['Do they have', 'Anyone know if they have', 'By chance, do they have', 'I was wondering... do they have'];
  let randomOpener = opener[getRandomIndex(opener.length)];

  var amenity = ['fresh fruit', 'entertainment on site', 'complimentary breakfast', 'any grocery stores nearby', 'any historic landmarks nearby', 'a concierge desk', 'free parking', 'a valet service', 'a onsite gym', 'a business center', 'any good pizza nearby', 'a business center', 'a bar'];
  let randomAmenity = amenity[getRandomIndex(amenity.length)];

  return `${randomOpener} ${randomAmenity}?`;
}

var generateAnswerBody = () => {
  var answerBody = ['I believe so. I recommend double checking with them.', 'Absolutely!', 'No, but check with front desk to see if anything has changed.', 'You betcha. Have a great stay!'];
  let randomAnswerBody = answerBody[getRandomIndex(answerBody.length)];
  return randomAnswerBody;
}

// HOTELS

var generateHotelName = () => {
  var first = ['The', 'International', 'Regional', 'Intercontinental', 'Best', 'Oriental', 'Western', 'Northern', 'Luxury', 'Economy'];
  let randomFirst = first[getRandomIndex(first.length)];

  var middle = ['Holiday', 'Fairmont', 'Embassy', 'Travelers', 'Midtown', 'Uptown', 'Ambassadors', 'Nomad'];
  let randomMiddle = middle[getRandomIndex(middle.length)];

  var last = ['Resort', 'Suites', 'Hotel', 'Lodges' ,'Club', 'Inn', 'Oriental', 'Lodge', 'Moon', 'Horizons', 'Quarters'];
  let randomLast = last[getRandomIndex(last.length)];

  return `${randomFirst} ${randomMiddle} ${randomLast}`;
}


var numberOfHotels = 100;

var seedHotels = (callback) => {
  let sql = 'INSERT INTO hotels(hotel_name, hotel_city) VALUES (?)';
  var hotelTasks = [];
  for (let i = 0; i < numberOfHotels; i++) {
    let queryArgs = [generateHotelName(), generateCity()];
    hotelTasks.push(queryArgs);
  }
  db.query(sql, [hotelTasks], (err) => {
    if (err) {
      console.log('error: ' + err);
    } else {
      callback();
    }
  });
};


var numberOfUsers = 2000;

var seedUsers = (callback) => {
  let sql = 'INSERT INTO users(username, user_avatar, user_city, user_contributions, user_helpful_votes) VALUES (?)';
  var userTasks = [];
  for (let i = 0; i < numberOfUsers; i++) {
    let queryArgs = [generateUserName(), generateUserAvatar(), generateCity(), generateNumber(30), generateNumber(30)];
    userTasks.push(queryArgs);
  }
  db.query(sql, [userTasks], (err) => {
    if (err) {
      console.log('error: ' + err);
    } else {
      callback();
    }
  });
};

var seedReviews = (callback) => {
  let sql = 'INSERT INTO reviews(user_id, hotel_id, review_date, review_body, date_of_stay, room_tip, trip_type, overall_rating, value_rating, location_rating, service_rating, rooms_rating, cleanliness_rating, sleep_quality_rating, collected_in_part_hotel, review_helpful_votes) VALUES (?)';
  var reviewTasks = [];
  for (let i = 0; i < numberOfHotels; i++) {
    // generate random number of reviews needed
    let reviewsPerHotel = generateNumber(100);
    for (let x = 0; x < reviewsPerHotel; x++) {
      let dateOfStay = generateDate(new Date(2010, 0, 1));
      let reviewDate = generateDate(dateOfStay);
      let queryArgs = [generateNumber(numberOfUsers), i, reviewDate, generateReviewBody(), dateOfStay, generateRoomTip(), generateTripType(), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(1), generateNumber(30)];
      reviewTasks.push(queryArgs);
    }
  }
  db.query(sql, [reviewTasks], (err) => {
    if (err) {
      console.log('error: ' + err);
    } else {
      callback();
    }
  });
};

var seedQuestions = (callback) => {
  let sql = 'INSERT INTO questions(user_id, hotel_id, question_date, question_body) VALUES (?)';
  var questionTasks = [];
  // for each hotel id
  for (let i = 0; i < numberHotelIds; i++) {
    // generate random number of reviews needed
    let questionsPerHotel = generateNumber(40);
    for (let x = 0; x < questionsPerHotel; x++) {
      let questionDate = generateDate(new Date(2010, 0, 1));
      let queryArgs = [generateNumber(numberOfUsers), i, questionDate, generateQuestionBody()];
      questionTasks.push(queryArgs);
    }
  }
  db.query(sql, [questionTasks], (err) => {
    if (err) {
      console.log('error: ' + err);
    } else {
      callback();
    }
  });
};

var seedAnswers = (callback) => {
  let sql = 'INSERT INTO answers(question_id, user_id, answer_body, thumbs_up_count, thumbs_down_count) VALUES (?)';
  var answerTasks = [];
  // for each hotel id
  for (let i = 0; i < numberQuestionIds; i++) {
    // generate random number of reviews needed
    let answersPerQuestion = generateNumber(2);
    for (let x = 0; x < answersPerQuestion; x++) {
      // make answerDate an advanced feature -- requires coordination amongst tables
        // let answerDate = generateDate(new Date(2010, 0, 1));
      let queryArgs = [i, generateNumber(numberOfUsers), generateQuestionBody(), generateNumber(10), generateNumber(2)];
      answerTasks.push(queryArgs);
    }
  }
  db.query(sql, [answerTasks], (err) => {
    if (err) {
      console.log('error: ' + err);
    } else {
      callback();
    }
  });
};

seedHotels(seedUsers(seedReviews(seedQuestions(seedAnswers(() => console.log('Done seeding!'))))));