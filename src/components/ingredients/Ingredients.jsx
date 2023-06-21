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
              <div className="overlay-card"></div>
            </div>
            <div className="cards-item">
              <div className="front-card white-card">
                <div className="front-img">
                  <img src={milk} alt="milk" width="224px" height="171px" />
                </div>
                <p className="front-text">MILK</p>
              </div>
              <div className="overlay-card"></div>
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
              <div className="overlay-card"></div>
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
              <div className="overlay-card"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
