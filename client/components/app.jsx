import React from 'react';
import Review from './review.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/reviews',
      method: "GET",
      success: (data) => { this.setState({reviews: JSON.parse(data)}) },
      error: () => console.log('Error retrieving data from server')
    });
  }

  render() {
    return (
      <div className="app">

        <div className="header">
          <h1>Reviews</h1>
          <input type="submit" value="Write a review" />
        </div>

        <div className="filters">

          <div className="traveler_rating">
          Traveler rating
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  Excellent
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Very Good
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Average
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Poor
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Terrible
                </label>
              </li>
            </ul>
          </div>

          <div className="time_of_year">
          Time of year
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  Mar-May
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Jun-Aug
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Sep-Nov
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Dec-Feb
                </label>
              </li>
            </ul>
          </div>

          <div className="traveler_type">
          Traveler type
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  Families
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Couples
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Solo
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Business
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Friends
                </label>
              </li>
            </ul>
          </div>

        </div>

        <div className="search">

          <form>
            <input type="submit" />
            <input type="text" placeholder="Search reviews"/>
          </form>
        </div>

        <ul>
          {this.state.reviews.map((review) => {
            return <Review reviewData={review} />
          })}
        </ul>
      </div>
    );
  }

}

export default App;
