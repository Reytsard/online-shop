import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

function ProductOptions() {
  const user = useUser();
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
          <btn className="Name btn">
            {user.user.name}
            {/* add the name of the user here */}
          </btn>
        </div>
      );
    }
  }, [user, Link]);
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
      <Link href="/folder2/page2" className="productOptionCart">
        {cartLogo}
      </Link>
      {userLogInOrOut}
    </div>
  );
}

//create a useMemo and check if there is a user, if it is undefined we put out the sign in and when the state is loged-in
// then we put out the profile

export default ProductOptions;
