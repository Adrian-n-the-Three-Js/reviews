import React from 'react';
import $ from 'jquery';
import Review from './review.jsx';
import Modal from './modal.jsx';
import AppWrapper from './appWrapper.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      reviews: [],
      filters: {
        search: {
          searchTerm: '',
        },
        overall_rating: {
          5: false,
          4: false,
          3: false,
          2: false,
          1: false,
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
          12: false,
        },
        trip_type: {
          Families: false,
          Couples: false,
          Solo: false,
          Business: false,
          Friends: false,
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.aggregateFilters = this.aggregateFilters.bind(this);
    this.returnFilteredReviews = this.returnFilteredReviews.bind(this);
    this.productsToSearch = this.productsToSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: `/reviews/${this.props.hotelId}`,
      method: "GET",
      success: (data) => { this.setState({ reviews: JSON.parse(data) }); },
      error: () => console.log('Error retrieving data from server'),
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleChange(e, filterToToggle) {
    const checkboxName = e.target.name;

    const changeState = (name) => {
      this.setState((prevState) => ({
        filters: {
          ...prevState.filters,
          [filterToToggle]: {
            ...prevState.filters[filterToToggle],
            [name]: !prevState.filters[filterToToggle][name],
          },
        },
      }));
    };

    const bound = Number(checkboxName) + 3;
    if (filterToToggle === 'month_of_stay') {
      for (let i = Number(checkboxName); i < bound; i++) {
        changeState(i);
      }
    } else {
      changeState(checkboxName);
    }
  }

  aggregateFilters() {
    const combinedFilters = {
      overall_rating: [],
      month_of_stay: [],
      trip_type: [],
    };
    const {overall_rating, month_of_stay, trip_type} = this.state.filters;
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
    const filterKeys = Object.keys(filters);
    return reviews.filter(review => {
      return filterKeys.every((key) => {
        // ignores empty filter
        if (!filters[key].length) return true;
        if (Array.isArray(review[key])) {
          return review[key].some(element => filters[key].includes(element));
        }
        return filters[key].includes(review[key]);
      });
    });
  }

  productsToSearch() {
    const filteredReviews = this.returnFilteredReviews(this.state.reviews, this.aggregateFilters());
    return filteredReviews.filter((review) => review.review_body.toLowerCase().includes(this.state.filters.search.searchTerm.toLowerCase()));
  }

  handleSearch(e) {
    const term = e.target.value;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        search: {
          searchTerm: term,
        },
      },
    }));
  }

  render() {
    let excellent = 0;
    let veryGood = 0;
    let average = 0;
    let poor = 0;
    let terrible = 0;
    const products = this.state.reviews;

    for (let i = 0; i < products.length; i++) {
      if (products[i].overall_rating === 5) excellent++;
      if (products[i].overall_rating === 4) veryGood++;
      if (products[i].overall_rating === 3) average++;
      if (products[i].overall_rating === 2) poor++;
      if (products[i].overall_rating === 1) terrible++;
    }

    return (
      <AppWrapper excellent={excellent} veryGood={veryGood} average={average} poor={poor} terrible={terrible} total={products.length}>
        <div className="app">

          <div className="top-portion">

            <div className="header">
              <div className="header-text"><h1>Reviews</h1></div>

              <div className="modal">
                <input type="submit" value="Write a review" onClick={this.toggleModal} />
                {this.state.isModalOpen ? <Modal id="modal" isOpen={this.state.isModalOpen} onClose={this.toggleModal} /> : null}
              </div>

            </div>

            <div className="filters">

              <div className="traveler_rating">
                <ul>
                  <div className="filter-header">Traveler rating</div>
                  <li>
                    <label>
                      <input name="5" type="checkbox" checked={this.state.filters.overall_rating['5']} onChange={(e) => this.handleChange(e, 'overall_rating')} />
                      Excellent
                    </label>
                    <div className="prog-container"><div className="prog-excellent"></div></div>
                    <span>{excellent}</span>
                  </li>
                  <li>
                    <label>
                      <input name="4" type="checkbox" checked={this.state.filters.overall_rating['4']} onChange={(e) => this.handleChange(e, 'overall_rating')} />
                      Very Good
                    </label>
                    <div className="prog-container"><div className="prog-veryGood"></div></div>
                    <span>{veryGood}</span>
                  </li>
                  <li>
                    <label>
                      <input name="3" type="checkbox" checked={this.state.filters.overall_rating['3']} onChange={(e) => this.handleChange(e, 'overall_rating')} />
                      Average
                    </label>
                    <div className="prog-container"><div className="prog-average"></div></div>
                    <span>{average}</span>
                  </li>
                  <li>
                    <label>
                      <input name="2" type="checkbox" checked={this.state.filters.overall_rating['2']} onChange={(e) => this.handleChange(e, 'overall_rating')} />
                      Poor
                    </label>
                    <div className="prog-container"><div className="prog-poor"></div></div>
                    <span>{poor}</span>
                  </li>
                  <li>
                    <label>
                      <input name="1" type="checkbox" checked={this.state.filters.overall_rating['1']} onChange={(e) => this.handleChange(e, 'overall_rating')} />
                      Terrible
                    </label>
                    <div className="prog-container"><div className="prog-terrible" /></div>
                    <span>{terrible}</span>
                  </li>
                </ul>
              </div>

              <div className="time_of_year">
                <ul>
                  <div className="filter-header">Time of year</div>
                  <li>
                  <label>
                    <input name="1" type="checkbox" checked={this.state.filters.month_of_stay['1']} onChange={(e) => this.handleChange(e, 'month_of_stay')} />
                    Jan - Mar
                    </label>
                  </li>
                  <li>
                    <label>
                      <input name="4" type="checkbox" checked={this.state.filters.month_of_stay['4']} onChange={(e) => this.handleChange(e, 'month_of_stay')} />
                      Apr - Jun
                    </label>
                  </li>
                  <li>
                    <label>
                      <input name="7" type="checkbox" checked={this.state.filters.month_of_stay['7']} onChange={(e) => this.handleChange(e, 'month_of_stay')} />
                      Jul-Sep
                    </label>
                  </li>
                  <li>
                    <label>
                      <input name="10" type="checkbox" checked={this.state.filters.month_of_stay['10']} onChange={(e) => this.handleChange(e, 'month_of_stay')} />
                      Oct-Dec
                    </label>
                  </li>
                </ul>
              </div>

              <div className="traveler_type">

                <ul>
                  <div className="filter-header">Traveler type</div>
                  <li>
                    <label>
                      <input name="Families" type="checkbox" checked={this.state.filters.trip_type.families} onChange={(e) => this.handleChange(e, 'trip_type')} />
                      Families
                    </label>
                  </li>
                  <li>
                    <label>
                      <input name="Couples" type="checkbox" checked={this.state.filters.trip_type.couples} onChange={(e) => this.handleChange(e, 'trip_type')} />
                      Couples
                    </label>
                  </li>
                  <li>
                    <label>
                      <input name="Solo" type="checkbox" checked={this.state.filters.trip_type.solo} onChange={(e) => this.handleChange(e, 'trip_type')} />
                      Solo
                    </label>
                  </li>
                  <li>
                    <label>
                      <input name="Business" type="checkbox" checked={this.state.filters.trip_type.business} onChange={(e) => this.handleChange(e, 'trip_type')} />
                      Business
                    </label>
                  </li>
                  <li>
                    <label>
                      <input name="Friends" type="checkbox" checked={this.state.filters.trip_type.friends} onChange={(e) => this.handleChange(e, 'trip_type')} />
                      Friends
                    </label>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <div className="search">

            <div className="search-icon-container">
              <img src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png" className="search-icon" alt="search-icon" />
            </div>
            <div className="search-bar">
              <input name="searchTerm" type="text" placeholder="Search reviews" value={this.state.filters.search.searchTerm} onChange={(e) => this.handleSearch(e)} />
            </div>

          </div>

          <div className="reviews">
            <ul>
              {this.productsToSearch().map((review) => <Review reviewData={review} />)}
            </ul>
          </div>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
