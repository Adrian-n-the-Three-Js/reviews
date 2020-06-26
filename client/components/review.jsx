import React from 'react';
import moment from 'moment';

function Review(props) {
  return (
    <li className="review">
      <div className="review-header">
        <img src={props.reviewData.user_avatar} width="10" height="10"></img>
        <div>{`${props.reviewData.username} wrote a review ${moment(props.reviewData.review_date).format('LL')}`}</div>
        <div>{props.reviewData.user_city}</div>
        <div>{props.reviewData.user_contributions}</div>
        <div>{props.reviewData.user_helpful_votes}</div>
      </div>
      <div className="review-body">
        <div>{props.reviewData.overall_rating}</div>
        <div>{'"' + props.reviewData.review_body + '"'}</div>
        <div>{'Date of stay: ' + moment(props.reviewData.date_of_stay).format('LL')}</div>
      </div>
    </li>
  );
}

export default Review;
