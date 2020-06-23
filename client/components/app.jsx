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
        overall_rating: {
          5: false,
          4: false,
          3: false,
          2: false,
          1: false
        },
        month_of_stay: {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
          7: false,
          8: false,
          9: false,
          10: false,
          11: false,
          12: false
        },
        trip_type: {
          Families: false,
          Couples: false,
          Solo: false,
          Business: false,
          Friends: false
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.aggregateFilters = this.aggregateFilters.bind(this);
    this.returnFilteredReviews = this.returnFilteredReviews.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  aggregateFilters() {
    var combinedFilters = {
      overall_rating: [],
      month_of_stay: [],
      trip_type: []
    };
    var {overall_rating, month_of_stay, trip_type} = this.state.filters;
    for (let ratingKey in overall_rating) {
      if (overall_rating[ratingKey]) combinedFilters.overall_rating.push(Number(ratingKey));
    }
    for (let monthKey in month_of_stay) {
      if (month_of_stay[monthKey]) combinedFilters.month_of_stay.push(Number(monthKey));
    }
    for (let tripKey in trip_type) {
      if (trip_type[tripKey]) combinedFilters.trip_type.push(tripKey);
    }
    return combinedFilters;
  }

  returnFilteredReviews(reviews, filters) {
    var filterKeys = Object.keys(filters);
    return reviews.filter(review => {
      return filterKeys.every(key => {
        // ignores empty filter
        if (!filters[key].length) return true;
        if (Array.isArray(review[key])) {
          return review[key].some(element => filters[key].includes(element));
        }
        return filters[key].includes(review[key]);
      });
    });
  }

  handleSearch() {
    var filteredReviews = this.returnFilteredReviews(this.state.reviews, this.aggregateFilters());
    return filteredReviews.filter(review => {
      return review.review_body.toLowerCase().includes(this.state.filters.search.searchTerm);
    });
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
                  <input name="5" type="checkbox" checked={this.state.filters.overall_rating["5"]} onChange={e => this.handleChange(e, 'overall_rating')} />
                  Excellent
                </label>
              </li>
              <li>
                <label>
                  <input name="4" type="checkbox" checked={this.state.filters.overall_rating["4"]} onChange={e => this.handleChange(e, 'overall_rating')} />
                  Very Good
                </label>
              </li>
              <li>
                <label>
                  <input name="3" type="checkbox" checked={this.state.filters.overall_rating["3"]} onChange={e => this.handleChange(e, 'overall_rating')} />
                  Average
                </label>
              </li>
              <li>
                <label>
                  <input name="2" type="checkbox" checked={this.state.filters.overall_rating["2"]} onChange={e => this.handleChange(e, 'overall_rating')} />
                  Poor
                </label>
              </li>
              <li>
                <label>
                  <input name="1" type="checkbox" checked={this.state.filters.overall_rating["1"]} onChange={e => this.handleChange(e, 'overall_rating')} />
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
                  <input name="1" type="checkbox" checked={this.state.filters.month_of_stay["1"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  January
                </label>
              </li>
              <li>
                <label>
                  <input name="2" type="checkbox" checked={this.state.filters.month_of_stay["2"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  February
                </label>
              </li>
              <li>
                <label>
                  <input name="3" type="checkbox" checked={this.state.filters.month_of_stay["3"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  March
                </label>
              </li>
              <li>
                <label>
                  <input name="4" type="checkbox" checked={this.state.filters.month_of_stay["4"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  April
                </label>
              </li>
              <li>
                <label>
                  <input name="5" type="checkbox" checked={this.state.filters.month_of_stay["5"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  May
                </label>
              </li>
              <li>
                <label>
                  <input name="6" type="checkbox" checked={this.state.filters.month_of_stay["6"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  June
                </label>
              </li>
              <li>
                <label>
                  <input name="7" type="checkbox" checked={this.state.filters.month_of_stay["7"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  July
                </label>
              </li>
              <li>
                <label>
                  <input name="8" type="checkbox" checked={this.state.filters.month_of_stay["8"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  August
                </label>
              </li>
              <li>
                <label>
                  <input name="9" type="checkbox" checked={this.state.filters.month_of_stay["9"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  September
                </label>
              </li>
              <li>
                <label>
                  <input name="10" type="checkbox" checked={this.state.filters.month_of_stay["10"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  October
                </label>
              </li>
              <li>
                <label>
                  <input name="11" type="checkbox" checked={this.state.filters.month_of_stay["11"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  November
                </label>
              </li>
              <li>
                <label>
                  <input name="12" type="checkbox" checked={this.state.filters.month_of_stay["12"]} onChange={e => this.handleChange(e, 'month_of_stay')} />
                  December
                </label>
              </li>
            </ul>
          </div>

          <div className="traveler_type">
          Traveler type
            <ul>
              <li>
                <label>
                  <input name="Families" type="checkbox" checked={this.state.filters.trip_type.families} onChange={e => this.handleChange(e, 'trip_type')} />
                  Families
                </label>
              </li>
              <li>
                <label>
                  <input name="Couples" type="checkbox" checked={this.state.filters.trip_type.couples} onChange={e => this.handleChange(e, 'trip_type')} />
                  Couples
                </label>
              </li>
              <li>
                <label>
                  <input name="Solo" type="checkbox" checked={this.state.filters.trip_type.solo} onChange={e => this.handleChange(e, 'trip_type')} />
                  Solo
                </label>
              </li>
              <li>
                <label>
                  <input name="Business" type="checkbox" checked={this.state.filters.trip_type.business} onChange={e => this.handleChange(e, 'trip_type')} />
                  Business
                </label>
              </li>
              <li>
                <label>
                  <input name="Friends" type="checkbox" checked={this.state.filters.trip_type.friends} onChange={e => this.handleChange(e, 'trip_type')} />
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
          {this.handleSearch().map((review) => {
            return <Review reviewData={review} />
          })}
        </ul>
      </div>
    );
  }

}

export default App;
