import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useSelector } from "react-redux";

function ProductOptions() {
  const cart = useSelector((state) => state.store.cart);
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
          <div className="Name btn">
            <Image
              src={user.user.picture}
              alt="pfp"
              width={53}
              height={53}
              className="rounded-circle"
            />{" "}
            {user.user.name}
            {/* add the name of the user here */}
          </div>
        </div>
      );
    }
  }, [user]);
  const cartLogo = useMemo(() => {
    if (cart.length === 0) {
      return <FontAwesomeIcon icon={faCartShopping} />;
    } else {
      return (
        <div className="cartWithCount">
          <div className="cart-logo">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className="cart-count">{cart.length}</div>
        </div>
      );
    }
  }, [cart]);
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
