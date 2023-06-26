import chocolate100g from "../../assets/pop-up-100g.png";
import chocolate200g from "../../assets/pop-up-200g.png";
import chocolate300g from "../../assets/pop-up-300g.png";

export default function PopUpBuy() {
  return (
    <div className="pop-up-buy">
      <h2 className="buy-form-header common-header">
        <span className="orange-text">BUY </span>NOW
      </h2>

      <form action="#" className="buy-form">
        <div className="choice">
          <input type="radio" id="control_01" name="select" value="1" />
          <label for="control_01">
            <img src={chocolate100g} alt="chocolate-100g" />
            <p className="chocolate-weight">100g</p>
          </label>
        </div>
        <div className="choice">
          <input type="radio" id="control_02" name="select" value="2" />
          <label for="control_02">
            <img src={chocolate200g} alt="chocolate-200g" />
            <p className="chocolate-weight">200g</p>
          </label>
        </div>
        <div className="choice">
          <input type="radio" id="control_03" name="select" value="3" />
          <label for="control_03">
            <img src={chocolate300g} alt="chocolate-300g" />
            <p className="chocolate-weight">300g</p>
          </label>
        </div>
      </form>
    </div>
  );
}
