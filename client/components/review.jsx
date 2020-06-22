import React from 'react';

function Review(props) {
  return (
    <div>
      <div>{props.reviewData.username}</div>
      <div>{props.reviewData.review_date}</div>
    </div>
  );
}

export default Review;