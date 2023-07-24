import React from "react";

function Header() {
  return (
    <div className="header d-flex">
      <div className="logo">Logo</div>
      <div className="headerOptions d-flex align-items-center gap-4">
        <div className="sign-in-btn normal">Sign in</div>
        <div className="cart-icon">icon</div>
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
