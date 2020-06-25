/* eslint-disable no-plusplus */
/* eslint-disable max-len */
const db = require('./index.js');

// REVIEWS

const getRandomIndex = (optionArrayLength) => Math.floor(Math.random() * Math.floor(optionArrayLength));

const generateReviewBody = () => {
  const moods = ['hated', 'taken aback by', 'angered by', 'confused by', 'surprised by', 'delighted by', 'happy with', 'loved'];
  const randomMood = moods[getRandomIndex(moods.length)];
  const nouns = ['chairs', 'cupboards', 'refreshments', 'assistance', 'amenities', 'appliances'];
  const randomNoun = nouns[getRandomIndex(nouns.length)];
  const areas = ['workout room', 'lobby', 'outdoor area', 'room', 'bathroom', 'garage'];
  const randomArea = areas[getRandomIndex(areas.length)];
  const locationAdjectives = ['horrible', 'noisy', 'okay', 'nothing special', 'relaxing', 'vibrant', 'pleasant', 'fun', 'perfect'];
  const randomAdj = locationAdjectives[getRandomIndex(locationAdjectives.length)];
  const stayAgainLikelihood = ['not', 'probably not', 'potentially', 'likely', 'very likely', 'definitely', 'certainly'];
  const randomLikelihood = stayAgainLikelihood[getRandomIndex(stayAgainLikelihood.length)];
  return `I ${randomMood} the ${randomNoun} in the ${randomArea}. The location was ${randomAdj}. All things aside, I would ${randomLikelihood} stay here again.`;
};

const generateRoomTip = () => {
  // some people might not have tips, but assume everyone does at first
  const commands = ['Do not forget to', 'Make sure to', 'Always', 'You might want to', 'I would advise everyone to', 'Never forget to', 'It is always recommended that you', 'Do not', 'Never'];
  const randomCommand = commands[getRandomIndex(commands.length)];
  const actions = ['try the snacks', 'hang out in the lobby', 'eat at the hotel restaurant', 'go swimming', 'ask for an upgrade', 'request a tour of the facilities', 'ask for local restaurant recommendations', 'tip the maids', 'use the mini bar', 'check out the bar'];
  const randomAction = actions[getRandomIndex(actions.length)];
  return `${randomCommand} ${randomAction}.`;
};

const generateTripType = () => {
  const tripTypes = ['Families', 'Couples', 'Solo', 'Business', 'Friends'];
  const randomTripType = tripTypes[getRandomIndex(tripTypes.length)];
  return randomTripType;
};

const generateUserName = () => {
  const firstName = ['Dave', 'Eric', 'Rob', 'Craig', 'Greg', 'Adam', 'John', 'Raj', 'Taylor', 'Alex', 'Angela', 'Kathy', 'Destiny', 'Jennifer', 'Ashley', 'Jess'];
  const randomFirstName = firstName[getRandomIndex(firstName.length)];
  const lastInitial = ['J', 'D', 'W', 'S', 'K', 'C', 'H', 'A', 'B'];
  const randomLastInitial = lastInitial[getRandomIndex(lastInitial.length)];
  return `${randomFirstName} ${randomLastInitial}`;
};

const generateCity = () => {
  // cities only at first; could expand to states
  const city = ['Los Angeles', 'San Francisco', 'Dallas', 'Houston', 'Fort Worth', 'Louisville', 'New Orleans', 'San Diego', 'Chicago', 'St. Louis', 'Denver', 'Boise', 'Indianapolis', 'Jacksonville', 'Tampa', 'Miami', 'New York City', 'Nashville', 'Huntsville', 'Oklahoma City', 'Phoenix'];
  const randomCity = city[getRandomIndex(city.length)];
  return randomCity;
};

const generateUserAvatar = () => {
  const avatarUrls = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fbeautiful-view-of-moraine-lake-2662116%2F&psig=AOvVaw2KVYteqdGtnIBWVYrUzqrB&ust=1592590149247000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjh0eP6i-oCFQAAAAAdAAAAABAD', 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.healthreason.com%2Fbeautiful-view%2F&psig=AOvVaw2KVYteqdGtnIBWVYrUzqrB&ust=1592590149247000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjh0eP6i-oCFQAAAAAdAAAAABAI', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fwallpaper%2Fcomments%2F81xxwe%2Fa_beautiful_view_of_the_sea_1920x1080%2F&psig=AOvVaw2KVYteqdGtnIBWVYrUzqrB&ust=1592590149247000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjh0eP6i-oCFQAAAAAdAAAAABAO', 'https://image.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVscczKCwBsAg0aMMcI5NjX1meu8_HDZ3d2jhQonix1DCY5n1E&usqp=CAU', 'https://cache.desktopnexus.com/thumbseg/1584/1584748-bigthumbnail.jpg', 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUQobLPiOw-RstxSgFJdTdA5eB0xzHi8p8cbkZfG7u9Ne3xTqz&usqp=CAU'];
  const randomUrl = avatarUrls[getRandomIndex(avatarUrls.length)];
  return randomUrl;
};

// for user contributions, user helpful votes, ratings
// pass num + 1 in order that we can pass 5 for ratings and potentially receive a 5
const generateNumber = (num) => getRandomIndex(num + 1);

const generateDate = (start) => {
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// QUESTIONS

const generateQuestionBody = () => {
  const opener = ['Do they have', 'Anyone know if they have', 'By chance, do they have', 'I was wondering... do they have'];
  const randomOpener = opener[getRandomIndex(opener.length)];
  const amenity = ['fresh fruit', 'entertainment on site', 'complimentary breakfast', 'any grocery stores nearby', 'any historic landmarks nearby', 'a concierge desk', 'free parking', 'a valet service', 'a onsite gym', 'a business center', 'any good pizza nearby', 'a business center', 'a bar'];
  const randomAmenity = amenity[getRandomIndex(amenity.length)];
  return `${randomOpener} ${randomAmenity}?`;
};

const generateAnswerBody = () => {
  const answerBody = ['I believe so. I recommend double checking with them.', 'Absolutely!', 'No, but check with front desk to see if anything has changed.', 'You betcha. Have a great stay!'];
  const randomAnswerBody = answerBody[getRandomIndex(answerBody.length)];
  return randomAnswerBody;
};

// HOTELS

const generateHotelName = () => {
  const first = ['The', 'International', 'Regional', 'Intercontinental', 'Best', 'Oriental', 'Western', 'Northern', 'Luxury', 'Economy'];
  const randomFirst = first[getRandomIndex(first.length)];
  const middle = ['Holiday', 'Fairmont', 'Embassy', 'Travelers', 'Midtown', 'Uptown', 'Ambassadors', 'Nomad'];
  const randomMiddle = middle[getRandomIndex(middle.length)];
  const last = ['Resort', 'Suites', 'Hotel', 'Lodges', 'Club', 'Inn', 'Oriental', 'Lodge', 'Moon', 'Horizons', 'Quarters'];
  const randomLast = last[getRandomIndex(last.length)];
  return `${randomFirst} ${randomMiddle} ${randomLast}`;
};

const numberOfHotels = 100;

const seedHotels = (callback) => {
  const sql = 'INSERT INTO hotels(hotel_name, hotel_city) VALUES ?';
  const hotelTasks = [];
  for (let i = 0; i < numberOfHotels; i++) {
    const queryArgs = [generateHotelName(), generateCity()];
    hotelTasks.push(queryArgs);
  }
  console.log(hotelTasks);
  console.log(hotelTasks.length);
  db.query(sql, [hotelTasks], (err) => {
    if (err) {
      console.log(`error: ${err}`);
    } else {
      callback();
    }
  });
};

const numberOfUsers = 2000;

const seedUsers = (callback) => {
  const sql = 'INSERT INTO users(username, user_avatar, user_city, user_contributions, user_helpful_votes) VALUES ?';
  const userTasks = [];
  for (let i = 0; i < numberOfUsers; i++) {
    const queryArgs = [generateUserName(), generateUserAvatar(), generateCity(), generateNumber(30), generateNumber(30)];
    userTasks.push(queryArgs);
  }
  console.log(userTasks);
  console.log(userTasks.length);
  db.query(sql, [userTasks], (err) => {
    if (err) {
      console.log(`error: ${err.message}`);
    } else {
      callback();
    }
  });
};

const seedReviews = (callback) => {
  const sql = 'INSERT INTO reviews(user_id, hotel_id, review_date, review_body, date_of_stay, room_tip, trip_type, overall_rating, value_rating, location_rating, service_rating, rooms_rating, cleanliness_rating, sleep_quality_rating, collected_in_part_hotel, review_helpful_votes) VALUES ?';
  const reviewTasks = [];
  for (let i = 0; i < numberOfHotels; i++) {
    // generate random number of reviews needed
    const reviewsPerHotel = generateNumber(100);
    for (let x = 0; x < reviewsPerHotel; x++) {
      const dateOfStay = generateDate(new Date(2010, 0, 1));
      const reviewDate = generateDate(dateOfStay);
      const queryArgs = [generateNumber(numberOfUsers), i, reviewDate, generateReviewBody(), dateOfStay, generateRoomTip(), generateTripType(), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(5), generateNumber(1), generateNumber(30)];
      reviewTasks.push(queryArgs);
    }
  }
  db.query(sql, [reviewTasks], (err) => {
    if (err) {
      console.log(`error: ${err.message}`);
    } else {
      callback();
    }
  });
};

const seedQuestions = (callback) => {
  const sql = 'INSERT INTO questions(user_id, hotel_id, question_date, question_body) VALUES ?';
  const questionTasks = [];
  // for each hotel id
  for (let i = 0; i < numberOfHotels; i++) {
    // generate random number of reviews needed
    const questionsPerHotel = generateNumber(40);
    for (let x = 0; x < questionsPerHotel; x++) {
      const questionDate = generateDate(new Date(2010, 0, 1));
      const queryArgs = [generateNumber(numberOfUsers), i, questionDate, generateQuestionBody()];
      questionTasks.push(queryArgs);
    }
  }
  db.query(sql, [questionTasks], (err) => {
    if (err) {
      console.log(`error: ${err.message}`);
    } else {
      callback();
    }
  });
};

// const getQuestionCount = (callback) => {
//   db.query('SELECT COUNT(*) FROM questions', (err, result) => {
//     if (err) {
//       console.log('error: ' + err.message);
//     } else {
//       callback(result, () => console.log('Done!'));
//     }
//   });
// };

const seedAnswers = (numberQuestionIds, callback) => {
  const sql = 'INSERT INTO answers(question_id, answerer_user_id, answer_body, thumbs_up_count, thumbs_down_count) VALUES ?';
  const answerTasks = [];
  // for each hotel id
  for (let i = 0; i < numberQuestionIds; i++) {
    // generate random number of reviews needed
    const answersPerQuestion = generateNumber(2);
    for (let x = 0; x < answersPerQuestion; x++) {
      // make answerDate an advanced feature -- requires coordination amongst tables
      // let answerDate = generateDate(new Date(2010, 0, 1));
      const queryArgs = [i, generateNumber(numberOfUsers), generateAnswerBody(), generateNumber(10), generateNumber(2)];
      answerTasks.push(queryArgs);
    }
  }
  db.query(sql, [answerTasks], (err) => {
    if (err) {
      console.log(`error: ${err.message}`);
    } else {
      callback();
    }
  });
};

seedHotels(() => console.log('Seeded hotels'));
seedUsers(() => console.log('Seeded users'));
seedReviews(() => console.log('Seeded reviews'));
seedQuestions(() => console.log('Seeded questions'));
seedAnswers(50, () => console.log('Seeded answers'));
