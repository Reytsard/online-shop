import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../feature/storeSlice";

function PageCounter({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    count <= 1 ? setCount(1) : setCount(count - 1);
  };
  const addItem = useCallback(() => {
    const product = {
      item: item,
      quantity: count,
    };
    dispatch(addProductToCart(product));
  }, [item, count, dispatch, addProductToCart]);
  return (
    <div className="buy-item col btn btn-outline-primary w-100 d-flex justify-content-around align-items-center">
      <div className="plusMinus">
        <button
          className="btn btn-sm"
          onClick={(e) => {
            e.preventDefault();
            addCount();
          }}
        >
          +
        </button>
        <span>{count}</span>
        <button
          className="btn btn-sm"
          onClick={(e) => {
            e.preventDefault();
            minusCount();
          }}
        >
          -
        </button>
      </div>
      <div
        className="buy-item-icon"
        onClick={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
}

export default PageCounter;
