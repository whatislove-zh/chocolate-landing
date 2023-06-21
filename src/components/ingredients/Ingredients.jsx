import React from "react";

export default function Ingredients() {
  return (
    <section className="ingredients-section">
      <div className="container">
        <div className="ingredients-wrapper">
          <div className="ingredients-head">
            <h2 className="ingredients-header">
              IT ALL ADDS UP TO ONE EXCEPTIONAL{" "}
              <span className="orange-text">TASTE</span> SENSATION
            </h2>
            <p className="ingredients-text">
              At Simply Chocolate, we believe that the secret to exceptional
              chocolate is in the details. From the sourcing of the finest
              ingredients to the careful crafting of each individual piece,
              every step of our process adds up to one exceptional taste
              sensation.
            </p>
          </div>
          <div className="ingredients-cards">
            <div className="cards-item">
              <div className="front-card"></div>
              <div className="overlay-card"></div>
            </div>
            <div className="cards-item">
              <div className="front-card"></div>
              <div className="overlay-card"></div>
            </div>
            <div className="cards-item">
              <div className="front-card"></div>
              <div className="overlay-card"></div>
            </div>
            <div className="cards-item">
              <div className="front-card"></div>
              <div className="overlay-card"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
