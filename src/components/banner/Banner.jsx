export default function Banner() {
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
              <button className="orange-button common-button buy-button">
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
    </section>
  );
}
