const fs = require('fs');
const csvWriter = require('csv-write-stream');

const userWriter = csvWriter();
const hotelWriter = csvWriter();
const reviewWriter = csvWriter();

let userIdCounter = 0;
let hotelIdCounter = 0;
let reviewIdCounter = 0;

const getRandomIndex = (optionArrayLength) => Math.floor(Math.random() * Math.floor(optionArrayLength));

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

// for user contributions, user helpful votes
const generateNumber = (num) => getRandomIndex(num + 1);


const generateHotelName = () => {
  const first = ['The', 'International', 'Regional', 'Intercontinental', 'Best', 'Oriental', 'Western', 'Northern', 'Luxury', 'Economy'];
  const randomFirst = first[getRandomIndex(first.length)];
  const middle = ['Holiday', 'Fairmont', 'Embassy', 'Travelers', 'Midtown', 'Uptown', 'Ambassadors', 'Nomad'];
  const randomMiddle = middle[getRandomIndex(middle.length)];
  const last = ['Resort', 'Suites', 'Hotel', 'Lodges', 'Club', 'Inn', 'Oriental', 'Lodge', 'Moon', 'Horizons', 'Quarters'];
  const randomLast = last[getRandomIndex(last.length)];
  return `${randomFirst} ${randomMiddle} ${randomLast}`;
};

const generateDate = (start) => {
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateReviewBody = () => {
  const moods = ['hated', 'was taken aback by', 'was angered by', 'was confused by', 'was surprised by', 'was delighted by', 'was happy with', 'loved', 'liked'];
  const randomMood = moods[getRandomIndex(moods.length)];
  const nouns = ['chairs', 'cupboards', 'refreshments', 'assistance', 'amenities', 'appliances'];
  const randomNoun = nouns[getRandomIndex(nouns.length)];
  const areas = ['workout room', 'lobby', 'outdoor area', 'room', 'bathroom', 'garage'];
  const randomArea = areas[getRandomIndex(areas.length)];
  const locationAdjectives = ['horrible', 'noisy', 'okay', 'nothing special', 'relaxing', 'vibrant', 'pleasant', 'fun', 'perfect'];
  const randomAdj = locationAdjectives[getRandomIndex(locationAdjectives.length)];
  const stayAgainLikelihood = ['not', 'probably not', 'potentially', 'likely', 'very likely', 'definitely', 'certainly'];
  const randomLikelihood = stayAgainLikelihood[getRandomIndex(stayAgainLikelihood.length)];
  return `I ${randomMood} the ${randomNoun} in the ${randomArea}. The location was ${randomAdj}. I would ${randomLikelihood} stay here again.`;
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

const generateRating = () => Math.floor(Math.random() * 5) + 1;

const userDataGen = () => {
  userWriter.pipe(fs.createWriteStream('usersData.csv'));
  let allPromises = [];
  for (let i = 0; i < 100; i++) {
    const promise = userWriter.write({
      id: userIdCounter++,
      userName: generateUserName(),
      user_avatar: 'avatar will go here', //TODO
      user_city: generateCity(),
      user_contributions: generateNumber(30),
      user_helpful_votes: generateNumber(30),
    });
    allPromises.push(promise);
  }
  Promise.all(allPromises)
    .then(() => userWriter.end())
    .then(() => hotelsDataGen())
    .catch((err) => console.log(err));
};

const hotelsDataGen = () => {
  hotelWriter.pipe(fs.createWriteStream('hotelsData.csv'));
  let allPromises = []
  for (let i = 0; i < 100; i++) {
    const promise = hotelWriter.write({
      id: hotelIdCounter++,
      hotel_name: generateHotelName(),
      hotel_city: generateCity(),
    });
    allPromises.push(promise)
  }
  Promise.all(allPromises)
    .then(() => hotelWriter.end())
    .then(() => reviewsDataGen())
    .catch((err) => console.log(err));
}

const reviewsDataGen = () => {
  reviewWriter.pipe(fs.createWriteStream('reviewsData.csv'));
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 10; j++) {
      const dateOfStay = generateDate(new Date(2010, 0, 1));
      const reviewDate = generateDate(dateOfStay);
      reviewWriter.write({
        id: reviewIdCounter++,
        user_id: generateNumber(1000),
        hotel_id: i,
        review_date: reviewDate,
        review_body: generateReviewBody(),
        date_of_stay: dateOfStay,
        room_tip: generateRoomTip(),
        trip_type: generateTripType(),
        overall_rating: generateRating(),
        value_rating: generateRating(),
        location_rating: generateRating(),
        service_rating: generateRating(),
        rooms_rating: generateRating(),
        cleanliness_rating: generateRating(),
        sleep_quality_rating: generateRating(),
        review_helpful_votes: generateNumber(30),
      });
    }
  }
  reviewWriter.end();
};

userDataGen();