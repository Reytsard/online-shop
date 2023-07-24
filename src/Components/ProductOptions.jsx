import React from "react";

function ProductOptions() {
  return (
    <div className="options">
      <a href="/cart/cart">
        <div className="cart-icon">cart</div>
      </a>
      <a href="/sign-in/signin">
        <div className="sign-in-btn">Sign in</div>
      </a>
    </div>
  );
}

export default ProductOptions;
