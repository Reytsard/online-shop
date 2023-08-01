import React, { useMemo } from "react";
import Link from "next/link";
import "../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const userLogInOrOut = useMemo(() => {
    if (user.user === undefined) {
      return (
        <Link href="/api/auth/login" className="sign-in-btn">
          Sign in
        </Link>
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
      <Link href="/products/productPage" className="text-decoration-none">
        <div className="logo">Logo</div>
      </Link>
      <div className="headerOptions d-flex align-items-center gap-4">
        {userLogInOrOut}
        <Link href="/cart/cart" className="headerCart text-decoration-none">
          {cartLogo}
        </Link>
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
