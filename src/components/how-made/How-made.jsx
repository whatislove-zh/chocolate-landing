import play from "../../assets/play.png";

export default function HowMade() {
  return (
    <section className="how-made-section">
      <div className="container">
        <div className="how-made-wrapper">
          <h2 className="how-made-header common-header">
            HOW IT'S <span className="orange-text">MADE?</span>
          </h2>
          <div className="how-made-video">
            <img className="how-made-play" src={play} alt="play" />
          </div>
          <div className="how-made-recept">
            <h2 className="recept-header">
              Try our chocolates today and discover the perfect balance of
              flavor
            </h2>
            <ul className="how-made-step-list">
              <li className="step-list-item">
                Heat the milk in a saucepan without bringing it to a boil. Add
                sugar and cocoa powder.
              </li>
              <li className="step-list-item">
                At the same time, prepare a water bath. Melt the butter on it.
              </li>
              <li className="step-list-item">
                "Mix" the milk mixture and already liquid butter. Mix thoroughly
                with a silicone spatula so that the mass becomes uniform and
                silky.
              </li>
              <li className="step-list-item">
                Heat the mixture over low heat, letting it barely boil.
              </li>
              <li className="step-list-item">
                Pour the chocolate into special containers (can be replaced with
                ice molds). Allow to cool and harden.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
