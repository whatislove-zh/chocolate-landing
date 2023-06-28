import ReviewsSlider from "./ReviewsSlider";
import PopReview from "../pop-up-windows/PopReview";
import usePopShow from "../pop-up-windows/usePopShow";

export default function Reviews() {
  const modalInfo = usePopShow();

  const showHideModal = modalInfo.show;
  const modalOpen = modalInfo.modal;
  return (
    <section id="review" className="reviews-section">
      <div className="container">
        <div className="reviews-wrapper">
          <h2 className="reviews-header common-header">
            <span className="orange-text">CHOCOLATE </span>IS LOVED
          </h2>
          <ReviewsSlider />
          <button
            className="common-button review-button"
            onClick={showHideModal}
          >
            Leave a review
          </button>
        </div>
      </div>
      {modalOpen && <PopReview showHideModal={showHideModal} />}
    </section>
  );
}
