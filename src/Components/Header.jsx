import React from "react";

function Header() {
  return (
    <div className="header d-flex">
      <a href="/products/productPage" className="text-decoration-none">
        <div className="logo">Logo</div>
      </a>
      <div className="headerOptions d-flex align-items-center gap-4">
        <a href="/api/auth/login">
          <div className="sign-in-btn normal">Sign in</div>
        </a>
        <a href="/cart/cart">
          <div className="cart-icon">icon</div>
        </a>
        <div className="currency">
          <select name="currency" id="currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="PHP">PHP</option>
            <option value="IDR">IDR</option>
            <option value="AUD">AUD</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
