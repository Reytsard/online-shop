"use client";

import Image from "next/image";
import "../../styles/main.css";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../feature/storeSlice";
import {
  faShop,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
function productPage() {
  console.log("client side");
  const cart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(1);
  const user = useUser();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/test");
      const data = await response.json();
      setProducts(data.products);
    }
    getData();
  }, []);
  const minusItemCount = () => {
    itemCount >= 1 ? setItemCount(1) : setItemCount(itemCount - 1);
  };
  const addItem = useCallback(
    (item) => {
      console.log("item:", item);
      dispatch(addItemToCart(item));
      console.log(cart);
      // showHowMany();
    },
    [products, dispatch, addItemToCart]
  );
  const productsCards = useMemo(() => {
    return products.map((item) => {
      return (
        <a
          href={`/products/${item.id}`}
          className="text-decoration-none"
          key={item.id}
        >
          <div className="card rounded-2 shadow-sm">
            <div className="productImage ">
              <Image
                className="rounded-top-2"
                src={item.images[0]}
                alt="image"
                width="320"
                height={160}
              />
            </div>
            <div className="productDetails d-flex flex-column flex-wrap py-1 px-3">
              <h2 className="productName">{item.title}</h2>
              <div className="productDesc">{item.description}</div>
              <h2 className="productPrice h-auto">${item.price}</h2>
              <div className="card-options row d-flex justify-content-between">
                <div className="row productRatings py-1 px-3 d-flex justify-content-between align-items-center">
                  <div className="col stars">
                    <div className="starsAverage">
                      <FontAwesomeIcon className="me-2" icon={faStar} />
                      {item.rating}
                    </div>
                    <div className="salesCount">
                      <FontAwesomeIcon className="me-2" icon={faShop} />
                      {item.stock}
                    </div>
                  </div>
                  <div
                    className="buy-item col rounded-3 d-flex justify-content-evenly align-items-center bg-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addItemToCart(item));
                      console.log(cart);
                    }}
                  >
                    <div className="count-options">
                      <button className="btn-sm">+</button>
                      <span>{itemCount}</span>
                      <button className="btn-sm" onClick={minusItemCount}>
                        -
                      </button>
                    </div>
                    <div className="buy-item-icon">
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      );
    });
  }, [
    products,
    FontAwesomeIcon,
    faShoppingCart,
    dispatch,
    addItemToCart,
    cart,
  ]);
  return (
    <div>
      <Header user={user} />
      <div className="productsSection p-2">
        <ProductOptions user={user} />
        <div className="productsHeader">All Products</div>
        <div className="products gap-4 d-flex justify-content-evenly align-items-start flex-wrap mb-4">
          {productsCards}
        </div>
        <div className="show-more-btn w-100 btn btn-lg btn-outline-primary rounded-4 grid place-items-center">
          Show More
        </div>
      </div>
    </div>
  );
}

export default productPage;
