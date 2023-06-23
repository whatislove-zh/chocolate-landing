import React from "react";
import ReviewsSlider from "./ReviewsSlider";

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-wrapper">
          <h2 className="reviews-header common-header">
            <span className="orange-text">CHOCOLATE </span>IS LOVED
          </h2>
          <ReviewsSlider />
          <button className="common-button review-button">Leave a review</button>
        </div>
      </div>
    </section>
  );
}
