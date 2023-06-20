import dollarSign from "../../assets/dollar.svg";
import chocolateBar from "../../assets/chocolate-bar.svg";
import spoon from "../../assets/spoon.svg";

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-wrapper">
          <div className="benefits-item">
            <img
              className="benefits-icon"
              src={chocolateBar}
              alt="chocolate-bar"
            />
            <h2 className="benefits-header">Unsurpassed taste</h2>
            <p className="benefits-text">
              Crafted with the finest quality cocoa beans and a dedication to
              perfection, each bite is a decadent experience that simply cannot
              be matched. Savor the richness and complexity of our Unsurpassed
              Taste and discover a new level of chocolate bliss.
            </p>
          </div>
          <div className="benefits-item">
            <img className="benefits-icon" src={dollarSign} alt="dollar-sign" />
            <h2 className="benefits-header">Affordable price</h2>
            <p className="benefits-text">
              Indulge in high-quality chocolate without breaking the bank with
              Simply Chocolate's selection of affordable treats. Enjoy
              mouth-watering truffles and velvety chocolate bars without
              sacrificing taste or quality. Browse our selection and indulge in
              affordable luxury today.
            </p>
          </div>
          <div className="benefits-item">
            <img className="benefits-icon" src={spoon} alt="spoon" />
            <h2 className="benefits-header">Own production</h2>
            <p className="benefits-text">
              We take pride in our own production process, ensuring that every
              step is carefully crafted to perfection. From selecting the finest
              ingredients to handcrafting each piece, our attention to detail is
              evident in every bite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
