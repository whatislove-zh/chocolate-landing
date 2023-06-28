import topSellers1 from "../../assets/sellers_1.png";
import topSellers2 from "../../assets/sellers_2.png";
import topSellers3 from "../../assets/sellers_3.png";

import usePopShow from "../pop-up-windows/usePopShow";
import PopUpBuy from "../pop-up-windows/PopUpBuy";

export default function TopSellers() {
  const modalInfo = usePopShow();
  const showHideModal = modalInfo.show;
  const modalOpen = modalInfo.modal;

  return (
    <section id="top" className="top-sellers-section">
      <div className="container">
        <h2 className="top-sellers-header common-header">
          <span className="orange-text">TOP </span>SELLERS
        </h2>

        <div className="top-sellers-wrapper">
          <div className="top-sellers-item">
            <img className="top-sellers-img" src={topSellers1} alt="top-sell" />
            <p className="top-sellers-text">
              Crazy enough chocolate originates from a bean just like the coffee
              bean called Cacao. Cacao has been around for thousands of years
              and was first discovered by the Native American tribe called the
              Mayans.
            </p>
          </div>
          <div className="top-sellers-item">
            <div className="top-sellers-two-img">
              <img
                className="top-sellers-img margin20"
                src={topSellers2}
                alt="top-sell"
              />
              <img
                className="top-sellers-img show-desktop"
                src={topSellers3}
                alt="top-sell"
              />
            </div>
            <button
              onClick={showHideModal}
              className="top-sellers-button common-button orange-button"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <PopUpBuy showHideModal={showHideModal} />}
    </section>
  );
}
