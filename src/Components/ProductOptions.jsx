"use client";
import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ProductOptions({ user }) {
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
    return;
  });
  return (
    <div className="options">
      <a href="/cart/cart" className="productOptionCart">
        {cartLogo}
      </a>
      {userLogInOrOut}
    </div>
  );
}

//create a useMemo and check if there is a user, if it is undefined we put out the sign in and when the state is loged-in
// then we put out the profile

export default ProductOptions;
