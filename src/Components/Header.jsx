import React, { useMemo } from "react";
import "../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header({ user }) {
  const cartLogo = useMemo(() => {
    const leg = 0;
    if (leg === 0) {
      return <FontAwesomeIcon icon={faCartShopping} />;
    } else {
      return (
        <div className="cartWithCount">
          <div className="cart-logo">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className="cart-count">{leg}</div>
        </div>
      );
    }
  });
  console.log("user:", user);
  const userLogInOrOut = useMemo(() => {
    if (user.user === undefined) {
      return (
        <a href="/api/auth/login" className="sign-in-btn">
          Sign in
        </a>
      );
    } else {
      return (
        <div className="profileLink">
          {/* add a link to profile picture here */}
          <div className="Name">
            Name Here{/* add the name of the user here */}
          </div>
        </div>
      );
    }
  }, [user]);
  return (
    <div className="header d-flex">
      <a href="/products/productPage" className="text-decoration-none">
        <div className="logo">Logo</div>
      </a>
      <div className="headerOptions d-flex align-items-center gap-4">
        {userLogInOrOut}
        <a href="/cart/cart" className="headerCart text-decoration-none">
          {cartLogo}
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
