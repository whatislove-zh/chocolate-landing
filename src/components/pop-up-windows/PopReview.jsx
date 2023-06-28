import X from "../../assets/x-close.svg";

export default function PopReview({ showHideModal }) {
  return (
    <div className="pop-up-wrapper">
      <div className="pop-up">
        <h2 className="form-header common-header review-header">
          leave a review about
          <span className="orange-text"> our chocolate </span>
        </h2>
        <img
          src={X}
          alt="close"
          className="close-button"
          onClick={showHideModal}
        />
        <div className="personal-info">
          <div className="personal-info-item">
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="personal-info-item">
            <label className="input-text-label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="personal-info-item">
            <label className="input-text-label" htmlFor="phone">
              Phone number
            </label>

            <div className="phone-wrapper">
              <span className="phone-span">+380</span>
              <input
                className="phone-input"
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number"
              />
            </div>
          </div>

          <div className="personal-info-item">
            <label className="input-text-label" htmlFor="comment">
              Email
            </label>
            <textarea
              className="textarea-comment"
              id="comment"
              name="comment"
              placeholder="Enter text"
            />
          </div>
        </div>
        <button type="submit" className="common-button orange-button">
          Submit
        </button>
      </div>
    </div>
  );
}
