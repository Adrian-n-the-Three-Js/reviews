import React from 'react';
import Review from './review.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: null
    };
  }

  componentDidMount() {
    // ajax to get reviews from server
    $.ajax({
      url: '/reviews',
      method: "GET",
      success: (data) => { this.setState({reviews: JSON.parse(data)}) },
      error: () => console.log('Error retrieving data from server')
    });
  }

  // for each review in state, spit out a Review component

  render() {
    return (
      <div>
        <h1>yo</h1>
        <Review />
      </div>
    );
  }

}

export default App;