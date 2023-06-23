import React from "react";
import ProductSlider from "./ProductSlider";

export default function Products() {
  return (
    <section className="products-section">
      <div className="container">
        <div className="products-wrapper">
          <h2 className="products-header common-header">
            OUR <span className="orange-text">PRODUCTS</span>
          </h2>

          <ProductSlider />
        </div>
      </div>
    </section>
  );
}
