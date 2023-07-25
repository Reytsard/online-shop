import React, { useMemo } from "react";
import "../../styles/main.css";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
function cart() {
  const user = useUser();
  console.log(user);

  return (
    <div>
      <Header user={user} />
      <ProductOptions user={user} />
      {/* <a href="/api/auth/logout">
        <button>signout</button>
      </a> */}
      <div className="cart-client p-4">
        <div className="cart-client-header">
          <div className="h1">Shopping Bag</div>
          <span>4 items in the shopping bag</span>
        </div>
        <div className="shopping-cart">
          <div className="card ">
            <div className="row card-body align-items-center">
              <div className="col">
                <Image src="" alt="item" height="53" width="53" />
              </div>
              <div className="col-6">
                <div className="row">
                  <h5>Samsung Universe 9</h5>
                  <div className="d-flex quantityButtons">
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="col">$1,249</div>
              <div className="col d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faCircleXmark} size="2x" />
              </div>
              {/* <button type="button" className="col-4 remove-item">
                x
              </button> */}
            </div>
          </div>
        </div>
        <div className="details">
          <div className="totalCost d-flex align-items-center gap-4">
            <span>Total:</span>
            <span>$12498</span>
          </div>
          <div className="sign-in-status">
            <span>
              To place an order, <a href="/sign-in/signin">sign in</a>
            </span>
          </div>
          <div className="place-order-buttons">
            <a
              href="/order-placed/success"
              className="place-order-btn text-decoration-none"
            >
              Place order (Add Onclick function for this)
            </a>
            <a
              href="/products/productPage"
              className="continue-shopping text-decoration-none"
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
