import PopUpBuy from "../pop-up-windows/PopUpBuy";
import usePopShow from "../pop-up-windows/usePopShow";

export default function Banner() {
  const modalInfo = usePopShow();
  const showHideModal = modalInfo.show;
  const modalOpen = modalInfo.modal;

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
              <a href="#how">
                <button className="clear-button common-button">
                  How it's made
                </button>
              </a>
            </div>
            <div className="banner-scroll">
              <p className="scroll-text">scroll down</p>
              <a href="#footer">
                <button className="scroll-button">v</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <PopUpBuy showHideModal={showHideModal} />}
    </section>
  );
}
