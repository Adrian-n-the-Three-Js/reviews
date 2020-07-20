const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const userWriter = csvWriter();

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
const generateUsers = (num) => Math.floor(Math.random() * (num - 1) + 1);

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

const reviewAmount = 30000000;
const hotelAmount = 10000000;

const writeReviews = fs.createWriteStream('./database/allReviews.csv');
writeReviews.write('hotel_id,review_date,id,cleanliness_rating,date_of_stay,location_rating,overall_rating,review_body,review_helpful_votes,room_tip,rooms_rating,service_rating,sleep_quality_rating,trip_type,user_id,value_rating\n', 'utf8');

function writeAllReviews(writer, encoding, callback) {
  let i = reviewAmount;
  let id = 0;
  let hotelId = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const dateOfStay = generateDate(new Date(2010, 0, 1));
      const reviewDate = generateDate(dateOfStay);
      const hotel_id = (id % 3 === 0) ? ++hotelId : hotelId;
      if (hotel_id % 100000 === 0) {
        console.log('hotel for reviews table at id', hotelId);
      }
      const review_date = reviewDate;
      id += 1;
      const cleanliness_rating = generateRating();
      const date_of_stay = dateOfStay;
      const location_rating = generateRating();
      const overall_rating = generateRating();
      const review_body = generateReviewBody();
      const review_helpful_votes = generateNumber(30);
      const room_tip = generateRoomTip();
      const rooms_rating = generateRating();
      const service_rating = generateRating();
      const sleep_quality_rating = generateRating();
      const trip_type = generateTripType();
      const user_id = generateUsers(1000);
      const value_rating = generateRating();
      const data = `${hotel_id},${review_date},${id},${cleanliness_rating},${date_of_stay},${location_rating},${overall_rating},${review_body},${review_helpful_votes},${room_tip},${rooms_rating},${service_rating},${sleep_quality_rating},${trip_type},${user_id},${value_rating}\n`;
      if (i === 0) {
        writer.write(data, encoding);
        writer.end();
        ok = false;
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeAllReviews(writeReviews, 'utf-8', () => { });

const writeHotels = fs.createWriteStream('hotels.csv');
writeHotels.write('id,hotel_city,hotel_name\n', 'utf8');

function writeTenMillionHotels(writer, encoding) {
  let i = hotelAmount;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      if (id % 500000 === 0) {
        console.log('hotel id is at ', id);
      }
      const hotel_city = generateCity();
      const hotel_name = generateHotelName();
      const data = `${id},${hotel_city},${hotel_name}\n`;
      if (i === 0) {
        writer.write(data, encoding);
        writer.end();
        ok = false;
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionHotels(writeHotels, 'utf-8');

const writeOneThousandUsers = () => {
  userWriter.pipe(fs.createWriteStream('./database/users.csv'));
  let userIdCounter = 1;
  for (let i = 0; i < 1000; i += 1) {
    userWriter.write({
      id: userIdCounter++,
      user_avatar: faker.image.avatar(),
      user_city: generateCity(),
      user_contributions: generateNumber(30),
      user_helpful_votes: generateNumber(30),
      userName: generateUserName(),
    });
  }
};

writeOneThousandUsers();