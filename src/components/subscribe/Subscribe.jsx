import usePopShow from "../pop-up-windows/usePopShow";
import PopSubscribe from "../pop-up-windows/PopSubscribe";

export default function Subscribe() {
  const modalInfo = usePopShow();
  const showHideModal = modalInfo.show;
  const modalOpen = modalInfo.modal;

  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-wrapper">
          <h2 className="subscribe-header">EXPLORE OUR NEW CHOCOLATE FIRST</h2>
          <p className="subscribe-text">
            From the velvety texture to the rich and complex flavor, our New
            Chocolate is a true indulgence that will leave you craving more.
            Made with only the finest ingredients and handcrafted with the
            utmost care, each piece is a work of art that is sure to please.
          </p>
          <button
            className="subscribe-button common-button orange-button"
            onClick={showHideModal}
          >
            Subscribe
          </button>
        </div>
      </div>
      {modalOpen && <PopSubscribe showHideModal={showHideModal} />}
    </section>
  );
}
