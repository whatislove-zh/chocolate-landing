import chocolate100g from "../../assets/pop-up-100g.png";
import chocolate200g from "../../assets/pop-up-200g.png";
import chocolate300g from "../../assets/pop-up-300g.png";

export default function PopUpBuy() {
  return (
    <div className="pop-up-buy-wrapper">
      <div className="pop-up-buy">
        <h2 className="buy-form-header common-header">
          <span className="orange-text">BUY </span>NOW
        </h2>

        <form action="#" className="buy-form">
          <div className="radio-choices">
            <div className="choice">
              <input type="radio" id="control_01" name="select" value="100" />
              <label htmlFor="control_01">
                <img src={chocolate100g} alt="chocolate-100g" />
                <p className="chocolate-weight">100g</p>
              </label>
            </div>
            <div className="choice">
              <input type="radio" id="control_02" name="select" value="200" />
              <label htmlFor="control_02">
                <img src={chocolate200g} alt="chocolate-200g" />
                <p className="chocolate-weight">200g</p>
              </label>
            </div>
            <div className="choice">
              <input type="radio" id="control_03" name="select" value="300" />
              <label htmlFor="control_03">
                <img src={chocolate300g} alt="chocolate-300g" />
                <p className="chocolate-weight">300g</p>
              </label>
            </div>
          </div>

          <div className="personal-info">
            <div className="personal-info-item">
              <label className="input-text-label" htmlFor="name">
                Personal information
              </label>
              <input type="text" id="name" name="name" placeholder="Name" />
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname"
              />
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
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number"
              />
            </div>
            <div className="personal-info-item">
              <label className="input-text-label" htmlFor="card">
                Card number
              </label>
              <input
                type="text"
                id="card"
                name="card"
                placeholder="Enter card"
              />
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
        </form>
      </div>
    </div>
  );
}
