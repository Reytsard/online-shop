import React from "react";
import "../../styles/main.css";
import Header from "../../Components/Header";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
function cart() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <Header />
      <a href="/api/auth/logout">
        <button>signout</button>
      </a>
      <div className="cart-client p-4">
        <div className="cart-client-header">
          <div className="h1">Shopping Bag</div>
          <span>4 items in the shopping bag</span>
        </div>
        <div className="shopping-cart">
          <div className="card ">
            <div className="row card-body">
              <div className="col">
                <Image src="" alt="item" height="53" width="53" />
              </div>
              <div className="col-6">
                <div className="row">
                  <h5>Samsung Universe 9</h5>
                  <div className="d-flex">
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="col">$1,249</div>
              <button type="button" className="col-4 remove-item">
                x
              </button>
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
            <div className="place-order-btn ">Place order</div>
            <div>
              <div className="continue-shopping">Continue shopping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
