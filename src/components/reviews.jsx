import React from "react";

const reviews = (props) => {
  const review = props.review;
  const reviewer = props.reviewer;
  const rating = props.rating;
  const rating1 = props.rating1;
  const rating2 = props.rating2;

  return (
    <div className="banner rounded-md bg-white w-80 p-5 mx-5 my-8 flex flex-col  items-start">
      <p>{review}</p>
      <br />
      <p>{reviewer}</p>
      <br />
      <div className="flex w-24 justify-start ">
        {rating}
        {rating}
        {rating}
        {rating}
        {rating}
        {rating1}
        {rating1}
        {rating1}
        {rating1}
        {rating2}
        {rating2}
        {rating2}
      </div>
    </div>
  );
};

export default reviews;
