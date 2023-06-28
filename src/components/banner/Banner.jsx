import { useState } from "react";
import PopUpBuy from "../pop-up-windows/PopUpBuy";

export default function Banner() {
  const [modalOpen, setModalOpen] = useState(false);

  const showHideModal = () => {
    setModalOpen(!modalOpen);
    if (modalOpen) {
      document.body.classList.remove('overflow');
    } else {
      document.body.classList.add('overflow');
    }
  };

  return (
    <section className="banner-section">
      <div className="container">
        <div className="banner-wrapper">
          <h2 className="banner-text">
            Treat yourself or a loved one to our finest ingredients for a moment
            of pure delight!
          </h2>
          <div className="banner-bottom-block">
            <div className="banner-buttons">
              <button
                className="orange-button common-button buy-button"
                onClick={showHideModal}
              >
                Buy now
              </button>
              <button className="clear-button common-button">
                How it's made
              </button>
            </div>
            <div className="banner-scroll">
              <p className="scroll-text">scroll down</p>
              <button className="scroll-button">v</button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <PopUpBuy showHideModal={showHideModal} />}
    </section>
  );
}
