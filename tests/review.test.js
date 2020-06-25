import Review from '../client/components/review.jsx';
import renderer from 'react-test-renderer';

const mockData = {
  "id": 9,
  "user_id": 1964,
  "hotel_id": 1,
  "review_date": "2019-11-04T19:04:28.000Z",
  "review_body": "I loved the appliances in the outdoor area. The location was nothing special. All things aside, I would very likely stay here again.",
  "date_of_stay": "2010-08-25T07:00:00.000Z",
  "room_tip": "Never ask for local restaurant recommendations.",
  "trip_type": "Business",
  "overall_rating": 3,
  "value_rating": 1,
  "location_rating": 0,
  "service_rating": 0,
  "rooms_rating": 5,
  "cleanliness_rating": 1,
  "sleep_quality_rating": 1,
  "collected_in_part_hotel": 0,
  "review_helpful_votes": 2,
  "month_of_stay": 8,
  "hotel_name": "Intercontinental Uptown Moon",
  "hotel_city": "Chicago",
  "username": "Kathy A",
  "user_avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVscczKCwBsAg0aMMcI5NjX1meu8_HDZ3d2jhQonix1DCY5n1E&usqp=CAU",
  "user_city": "Indianapolis",
  "user_contributions": 30,
  "user_helpful_votes": 12
};

describe('Review', () => {

  it('renders', () => {
    const wrapper = shallow(<Review reviewData={mockData} />);
    expect(wrapper.exists()).toBe(true);
  });

});