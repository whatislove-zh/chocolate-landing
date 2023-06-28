import X from "../../assets/x-close-white.svg";

export default function PopSubscribe({ showHideModal }) {
  console.log("hello");
  return (
    <div className="pop-up-wrapper">
      <div className="pop-up pop-up-subscribe">
        <h2 className="form-header common-header review-header">
          Explore our <span className="wrap orange-text">new chocolate</span>{" "}
          first!
        </h2>
        <img
          src={X}
          alt="close"
          className="close-button"
          onClick={showHideModal}
        />
        <div className="personal-info subscribe-info">
          <div className="personal-info-item">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="common-button orange-button subscribe-pop-up-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
