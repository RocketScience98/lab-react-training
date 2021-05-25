import React from 'react'

export default function Rating(props) {
    const { children } = props;
    const roundedRating = Math.round(children);
  
    const starsEmpty = '☆☆☆☆☆';
    const starsFull = '★★★★★';
    return (
      <div>
        {starsFull.slice(0, roundedRating)}
        {starsEmpty.slice(0, 5 - roundedRating)}
      </div>
    );
}
