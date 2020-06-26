import React from 'react';
import moment from 'moment';

function Review(props) {
  return (
    <li className="review">
      <div className="review-header">
        <img src={props.reviewData.user_avatar} width="10" height="10"></img>
        <div className="review-header-text">
          <div className="review-header-text-name">
            <div>{`${props.reviewData.username} wrote a review ${moment(props.reviewData.review_date).format('LL')}`}</div>
          </div>
          <div className="review-header-text-info">
            <div>{`${props.reviewData.user_city} - ${props.reviewData.user_contributions} contribution(s) - ${props.reviewData.user_helpful_votes} helpful vote(s)`}</div>
          </div>
        </div>
      </div>
      <div className="review-body">
        <div>{props.reviewData.overall_rating}</div>
        <div className="review-body-text">{'"' + props.reviewData.review_body + '"'}</div>
        <div className="review-date-of-stay">{'Date of stay: ' + moment(props.reviewData.date_of_stay).format('LL')}</div>
      </div>
    </li>
  );
}

export default Review;
