import React from 'react';
import Review from './review.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      filters: {
        search: {
          searchTerm: ''
        },
        traveler_rating: {
          excellent: false,
          very_good: false,
          average: false,
          poor: false,
          terrible: false
        },
        time_of_year: {
          mar_may: false,
          jun_aug: false,
          sep_nov: false,
          dec_feb: false
        },
        traveler_type: {
          families: false,
          couples: false,
          solo: false,
          business: false,
          friends: false
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, filterToToggle) {
    console.log('triggered!');
    const name = e.target.name;
    console.log(name);
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [filterToToggle]: {
          ...prevState.filters[filterToToggle],
          [name]: !prevState.filters[filterToToggle][name]
        }
      }
    }));
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
                  <input name="excellent" type="checkbox" checked={this.state.filters.traveler_rating.excellent} onChange={e => this.handleChange(e, 'traveler_rating')} />
                  Excellent
                </label>
              </li>
              <li>
                <label>
                  <input name="very_good" type="checkbox" checked={this.state.filters.traveler_rating.very_good} onChange={e => this.handleChange(e, 'traveler_rating')} />
                  Very Good
                </label>
              </li>
              <li>
                <label>
                  <input name="average" type="checkbox" checked={this.state.filters.traveler_rating.average} onChange={e => this.handleChange(e, 'traveler_rating')} />
                  Average
                </label>
              </li>
              <li>
                <label>
                  <input name="poor" type="checkbox" checked={this.state.filters.traveler_rating.poor} onChange={e => this.handleChange(e, 'traveler_rating')} />
                  Poor
                </label>
              </li>
              <li>
                <label>
                  <input name="terrible" type="checkbox" checked={this.state.filters.traveler_rating.terrible} onChange={e => this.handleChange(e, 'traveler_rating')} />
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
                  <input name="mar_may" type="checkbox" checked={this.state.filters.time_of_year.mar_may} onChange={e => this.handleChange(e, 'time_of_year')} />
                  Mar-May
                </label>
              </li>
              <li>
                <label>
                  <input name="jun_aug" type="checkbox" checked={this.state.filters.time_of_year.jun_aug} onChange={e => this.handleChange(e, 'time_of_year')} />
                  Jun-Aug
                </label>
              </li>
              <li>
                <label>
                  <input name="sep_nov" type="checkbox" checked={this.state.filters.time_of_year.sep_nov} onChange={e => this.handleChange(e, 'time_of_year')} />
                  Sep-Nov
                </label>
              </li>
              <li>
                <label>
                  <input name="dec_feb" type="checkbox" checked={this.state.filters.time_of_year.dec_feb} onChange={e => this.handleChange(e, 'time_of_year')} />
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
                  <input name="families" type="checkbox" checked={this.state.filters.traveler_type.families} onChange={e => this.handleChange(e, 'traveler_type')} />
                  Families
                </label>
              </li>
              <li>
                <label>
                  <input name="couples" type="checkbox" checked={this.state.filters.traveler_type.couples} onChange={e => this.handleChange(e, 'traveler_type')} />
                  Couples
                </label>
              </li>
              <li>
                <label>
                  <input name="solo" type="checkbox" checked={this.state.filters.traveler_type.solo} onChange={e => this.handleChange(e, 'traveler_type')} />
                  Solo
                </label>
              </li>
              <li>
                <label>
                  <input name="business" type="checkbox" checked={this.state.filters.traveler_type.business} onChange={e => this.handleChange(e, 'traveler_type')} />
                  Business
                </label>
              </li>
              <li>
                <label>
                  <input name="friends" type="checkbox" checked={this.state.filters.traveler_type.friends} onChange={e => this.handleChange(e, 'traveler_type')} />
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
