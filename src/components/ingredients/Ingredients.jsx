import milkChocolate from "../../assets/ingredients-milk-chocolate.png";
import hazelnut from "../../assets/ingredients-hazelnut.png";
import chocolateCrops from "../../assets/ingredients-chocolate-crops.png";
import milk from "../../assets/ingredients-milk.png";

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
              <div className="front-card orange-card">
                <div className="front-img">
                  <img
                    src={milkChocolate}
                    alt="milkChocolate"
                    width="224px"
                    height="171px"
                  />
                </div>
                <p className="front-text">MILK CHOCOLATE</p>
              </div>
              <div className="overlay-card">
                <h2 className="overlay-header">MILK CHOCOLATE</h2>
                <div className="overlay-benefits">
                  <p className="orange-benefit">chocolate</p>
                  <p className="clear-benefit">the benefits</p>
                </div>
                <p className="overlay-text">
                  Milk chocolate is a solid chocolate confectionery containing
                  cocoa, sugar and milk. It is the most consumed type of
                  chocolate. Chocolate was originally sold and consumed as a
                  beverage in pre-Columbian times. Although four-fifths of all
                  milk chocolate is sold in the United States and Europe.
                </p>
              </div>
            </div>
            <div className="cards-item">
              <div className="front-card white-card">
                <div className="front-img">
                  <img src={milk} alt="milk" width="224px" height="171px" />
                </div>
                <p className="front-text">MILK</p>
              </div>
              <div className="overlay-card">
                <h2 className="overlay-header">MILK</h2>
                <div className="overlay-benefits">
                  <p className="orange-benefit">milk</p>
                  <p className="clear-benefit">the benefits</p>
                </div>
                <p className="overlay-text">
                  Milk is a white liquid food produced by the mammary glands of
                  mammals. It is the primary source of nutrition for young
                  mammals (including breastfed human infants) before they are
                  able to digest solid food.Early-lactation milk, which is
                  called colostrum, contains antibodies that strengthen the
                  immune system.
                </p>
              </div>
            </div>
            <div className="cards-item">
              <div className="front-card purple-card">
                <div className="front-img">
                  <img
                    src={hazelnut}
                    alt="hazelnut"
                    width="224px"
                    height="171px"
                  />
                </div>
                <p className="front-text">NUTS</p>
              </div>
              <div className="overlay-card">
                <h2 className="overlay-header">NUTS</h2>
                <div className="overlay-benefits">
                  <p className="orange-benefit">nuts</p>
                  <p className="clear-benefit">the benefits</p>
                </div>
                <p className="overlay-text">
                  Almonds, pistachios, and walnuts are some types of nuts that
                  contain healthy nutrients. When eaten as part of a
                  nutrient-dense diet, these 9 nuts may offer benefits such as
                  reducing your risk of heart disease. They’re a good source of
                  fiber, healthy fats, and plant protein. Plus, they’re great on
                  their own.
                </p>
              </div>
            </div>
            <div className="cards-item">
              <div className="front-card white-card">
                <div className="front-img">
                  <img
                    src={chocolateCrops}
                    alt="crops"
                    width="224px"
                    height="171px"
                  />
                </div>
                <p className="front-text">SEMI - SWEET CHOCOLATE</p>
              </div>
              <div className="overlay-card">
                <h2 className="overlay-header">SEMI-SWEET-CHOCOLATE</h2>
                <div className="overlay-benefits">
                  <p className="orange-benefit">sweet-chocolate</p>
                  <p className="clear-benefit">the benefits</p>
                </div>
                <p className="overlay-text">
                  Semi-sweet chocolate has a cocoa solid content of 35 to 65%.
                  One of the best ways to gain an understanding of this type of
                  chocolate is to compare it to a different type of chocolate.
                  Semisweet is darker than milk chocolate. In a taste
                  comparison, it has a slightly bitter taste whereas milk
                  chocolate is sweeter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
