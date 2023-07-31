import React from "react";
import Header from "../../Components/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import ProductOptions from "../../Components/ProductOptions";

function success() {
  const user = useUser();
  return (
    <div>
      <Header user={user} />
      <ProductOptions user={user} />
      <div className="order-placed p-2">
        <h1>The Order Is Placed</h1>
        <div className="order-info my-2">
          Thank you for ordering. We will ship it in 1-2 days and send you as
          follow up email to track the delivery.
        </div>
        <div className="order-items">
          <div className="card w-auto">
            <div className="cart-title">Samsung Unidverse 9</div>
            <div className="card-body">1 item</div>
          </div>
        </div>
      </div>
      <div className="shop-more w-auto px-3">
        <a
          href="/products/productPage"
          className="btn-lg btn btn-outline-primary normal-btn w-100 rounded-4"
        >
          Continue Shopping
        </a>
      </div>
    </div>
  );
}

export default success;
