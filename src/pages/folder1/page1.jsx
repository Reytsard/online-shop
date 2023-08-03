import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addNumber } from "../../feature/storeSlice";
import { useMemo, useState } from "react";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShop,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.FRONTEND_URL}/api/test`);
  const data = await response.json();
  return {
    props: { data },
  };
};

export default function Post({ data }) {
  const dispatch = useDispatch();
  let [arrayLimit, setArrayLimit] = useState(6);
  const addArrayLimit = () => {
    if (arrayLimit <= data.products.length) setArrayLimit(arrayLimit + 5);
  };

  const dataCards = useMemo(() => {
    return data.products.slice(0, arrayLimit).map((item) => (
      <Link
        href={`/folder1/${item.id}`}
        key={item.id}
        className="text-decoration-none"
      >
        <div className="card rounded-2 shadow-sm">
          <div className="productImage ">
            <Image
              className="rounded-top-2 card-image"
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
                  }}
                >
                  {/* <div className="count-options">
                    <button className="btn-sm">+</button>
                    <span>{itemCount}</span>
                    <button className="btn-sm" onClick={minusItemCount}>
                      -
                    </button>
                  </div> */}
                  <div className="buy-item-icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ));
  }, [
    data,
    arrayLimit,
    FontAwesomeIcon,
    Image,
    faShoppingCart,
    faStar,
    faShop,
    dispatch,
    addItemToCart,
  ]);
  return (
    <>
      <Header />
      <ProductOptions />
      <h1>All Products</h1>
      <div className="products gap-4 d-flex justify-content-evenly align-items-start flex-wrap mb-4 text-decoration-none">
        {dataCards}
      </div>
      {arrayLimit <= data.products.length ? (
        <div className="p-4">
          <button
            className="btn btn-outline-primary w-100 rounded-4"
            onClick={addArrayLimit}
          >
            See More
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
