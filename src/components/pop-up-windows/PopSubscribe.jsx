import sprite from "../../assets/icons.svg";

export default function PopSubscribe({ showHideModal }) {
  console.log("hello");
  return (
    <div className="pop-up-wrapper">
      <div className="pop-up pop-up-subscribe">
        <h2 className="form-header common-header review-header">
          Explore our <span className="wrap orange-text">new chocolate</span>{" "}
          first!
        </h2>
        <svg
          className="close-button"
          onClick={showHideModal}
          height="24px"
          width="24px"
        >
          <use href={sprite + "#close-dark"} />
        </svg>
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
