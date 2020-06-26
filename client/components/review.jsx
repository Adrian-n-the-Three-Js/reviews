import React from 'react';
import moment from 'moment';
import ReviewWrapper from './reviewWrapper.jsx';

function Review(props) {
  return (
    <ReviewWrapper rating={props.reviewData.overall_rating / 5 * 100}>
      <li className="review">
        <div className="review-header">
          <a href="#"><img src={props.reviewData.user_avatar} width="10" height="10"></img></a>
          <div className="review-header-text">
            <div className="review-header-text-name">
              <div><a href="#"><strong>{props.reviewData.username}</strong></a>{` wrote a review ${moment(props.reviewData.review_date).format('MMM YYYY')}`}</div>
            </div>
            <div className="review-header-text-container">
              <div className="user-map-icon-container"><img src="https://www.clker.com/cliparts/A/c/j/V/a/Q/google-map-pointer-grey-hi.png" alt="map-icon"/></div>
              <div className="review-header-text">{props.reviewData.user_city} &bull; <strong>{props.reviewData.user_contributions}</strong> contribution(s) &bull; <strong>{props.reviewData.user_helpful_votes}</strong> helpful vote(s)</div>
            </div>
          </div>
        </div>
        <div className="review-body">
          <div className="Stars"></div>
          <div className="review-body-text">{'"' + props.reviewData.review_body + '"'}</div>
          <div className="review-date-of-stay"><strong>Date of stay: </strong>{moment(props.reviewData.date_of_stay).format('MMMM YYYY')}</div>
        </div>
      </li>
    </ReviewWrapper>
  );
}

export default Review;
