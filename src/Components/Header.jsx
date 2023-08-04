import React, { useMemo } from "react";
import Link from "next/link";
import "../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../feature/storeSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useUser();
  const cart = useSelector((state) => state.store.cart);

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
  const userLogInOrOut = useMemo(() => {
    if (user.user === undefined) {
      return (
        <Link href={"/api/auth/login"} className="sign-in-btn">
          Sign in
        </Link>
      );
    } else {
      return (
        <div className="profileLink">
          {user.user === undefined ? (
            <></>
          ) : (
            <Link
              className="btn btn-outline-primary w-auto header-logout mx-3 d-flex align-items-center"
              href={"/api/auth/logout"}
            >
              LogOut
            </Link>
          )}
          <div className="Name">
            <Image
              src={user.user.picture}
              alt="pfp"
              width={53}
              height={53}
              className="rounded-circle"
            />{" "}
            {user.user.name}
          </div>
        </div>
      );
    }
  }, [user]);
  const changeCurr = (e) => {
    dispatch(changeCurrency(e.target.value));
  };
  return (
    <div className="header h-100 d-flex align-items-center">
      <Link href="/folder1/page1" className="text-decoration-none">
        <div className="logo">Logo</div>
      </Link>
      <div className="headerOptions d-flex align-items-center gap-4">
        {userLogInOrOut}
        <Link href="/folder2/page2" className="headerCart text-decoration-none">
          {cartLogo}
        </Link>
        <div className="currency">
          <select name="currency" id="currency" onChange={(e) => changeCurr(e)}>
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
