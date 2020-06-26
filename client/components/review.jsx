import React from 'react';

function Review(props) {
  return (
    <li className="review">
      <div className="review-header">
        <img src={props.reviewData.user_avatar} width="10" height="10"></img>
        <div>{props.reviewData.username}</div>
        <div>{props.reviewData.review_date}</div>
        <div>{props.reviewData.user_city}</div>
        <div>{props.reviewData.user_contributions}</div>
        <div>{props.reviewData.user_helpful_votes}</div>
      </div>
      <div className="review-body">
        <div>{props.reviewData.overall_rating}</div>
        <div>{props.reviewData.review_body}</div>
        <div>{props.reviewData.date_of_stay}</div>
      </div>
    </li>
  );
}

export default Review;
