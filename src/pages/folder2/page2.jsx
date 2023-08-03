import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  addQuantity,
  minusQuantity,
  removeItem,
} from "../../feature/storeSlice";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Post() {
  const user = useUser();
  const dispatch = useDispatch();
  const count = useSelector((state) => state.store.count);
  const cart = useSelector((state) => state.store.cart);
  const minusCartQuantity = (id) => {
    dispatch(minusQuantity(id));
  };
  const addCartQuantity = (id) => {
    dispatch(addQuantity(id));
  };
  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };
  const cartItems = useMemo(() =>
    cart.length === 0 ? (
      <div>No Item in cart</div>
    ) : (
      cart.map(
        (item) => (
          <div className="card w-auto" key={`${item.item.id}`}>
            <div className="row card-body align-items-center">
              <div className="col">
                <Image
                  src={item.item.images[0]}
                  alt="item"
                  height="53"
                  width="53"
                />
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="card-title text-truncate">
                    {item.item.title}
                  </div>
                </div>
                <div className="col d-flex justify-content-start gap-2 align-items-center">
                  <button
                    className="btn btn-outline-primary rounded"
                    onClick={() => minusCartQuantity(item.item.id)}
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button
                    className="btn btn-outline-primary rounded"
                    onClick={() => addCartQuantity(item.item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col gray-color">${item.item.price}</div>
              <div className="col">
                <button
                  className=" btn btn-outline-primary rounded-circle"
                  onClick={() => removeFromCart(item.item.id)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
          </div>
        ),
        [
          cart,
          minusCartQuantity,
          addCartQuantity,
          removeFromCart,
          FontAwesomeIcon,
          faXmark,
          Image,
        ]
      )
    )
  );
  return (
    <>
      <Header />
      <ProductOptions />
      <Link href={"/api/auth/logout"}>LogOut</Link>
      <Link href={"/folder1/page1"} className="btn btn-lg btn-outline-primary">
        back
      </Link>
      <div className="cart-client-header ps-4">
        <div className="h1">Shopping Bag</div>
        <span className="gray-color">
          {cart.length} items in the shopping bag
        </span>
      </div>
      <div className="container cart-client p-3 d-flex flex-column row-gap-3">
        {cartItems}
      </div>
      <div className="details">
        <div className="totalCost d-flex align-items-center gap-4">
          <span>Total:</span>
          <span>$12498</span>
        </div>
        {user.user === undefined ? (
          <div className="sign-in-status">
            <span>
              To place an order, <a href="/sign-in/signin">sign in</a>
            </span>
          </div>
        ) : (
          <div className="sign-in-status"></div>
        )}
        <div className="place-order-buttons p-4">
          {user.user === undefined ? (
            <button
              className="btn bg-secondary rounded-pill place-order-btn"
              disabled
            >
              Place order
            </button>
          ) : user.user !== undefined && cart.length === 0 ? (
            <button
              className="btn bg-primary rounded-pill text-decoration-none place-order-btn"
              disabled
            >
              Place order (Add Onclick function for this)
            </button>
          ) : (
            <Link
              href="/order/order-placed"
              className="btn bg-primary rounded-pill text-decoration-none place-order-btn"
            >
              Place order (Add Onclick function for this)
            </Link>
          )}
          <Link
            href="/folder1/page1"
            className="btn rounded-pill btn-outline-primary text-decoration-none continue-shopping"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </>
  );
}
