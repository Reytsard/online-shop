import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addProductToCart } from "../../feature/storeSlice";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useMemo, useState } from "react";

export const getServerSideProps = async (context) => {
  const id = context.params?.productId;
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const data = await response.data;
  return {
    props: { data },
  };
};
export default function Product({ data }) {
  const curr = useSelector((state) => state.store.currency.name);
  const rates = useSelector((state) => state.store.rates);
  const [productNumber, setProductNumber] = useState(1);
  const addItemQuantityHandler = () => {
    setProductNumber(productNumber + 1);
  };
  const minusItemQuantityHandler = () => {
    productNumber <= 1
      ? setProductNumber(1)
      : setProductNumber(productNumber - 1);
  };
  const dispatch = useDispatch();
  const addItem = useCallback(
    (data) => {
      const product = {
        item: data,
        quantity: productNumber,
      };
      dispatch(addProductToCart(product));
    },
    [dispatch, productNumber]
  );
  const currencySign = useMemo(() => {
    return curr === "USD" ? (
      <span>$</span>
    ) : curr === "AUD" ? (
      <span>AUD$</span>
    ) : curr === "PHP" ? (
      <span>₱</span>
    ) : curr === "EUR" ? (
      <span>€</span>
    ) : (
      <span>Rp</span>
    );
  }, [curr]);
  return (
    <>
      <>
        <div>
          <Header />
          <ProductOptions />
          <Link className="btn btn-outline-primary" href={"/folder1/page1"}>
            back
          </Link>
          <div className="product-item">
            <div className="product-image pb-5 d-flex align-items-center justify-content-center">
              <Image
                className="rounded-3 grid place-items-center"
                src={data.images[0]}
                alt={`image${data.id}`}
                height={191}
                width={300}
              />
            </div>
            <div className="product-price d-flex align-items-center gap-4">
              <h1 className="m-2">
                {currencySign}
                {Math.floor(data.price * rates[curr] * 100) / 100}
              </h1>
              <div className="discount-percentage rounded-5 py-1 px-2 color-13">
                {data.discountPercentage}%
              </div>
            </div>
            <div className="product-buy-now">
              <div className="btn btn-lg g-0 w-100 product-add-to-cart bg-primary rounded-2 text-center">
                <div className="add-to-cart-options ">
                  <div className="row">
                    <button
                      className="col btn"
                      onClick={addItemQuantityHandler}
                    >
                      +
                    </button>
                    <span className="col d-flex align-items-center justify-content-center">
                      {productNumber}
                    </span>
                    <button
                      className="col btn"
                      onClick={minusItemQuantityHandler}
                    >
                      -
                    </button>
                    <FontAwesomeIcon
                      className="col shopping-cart-icon"
                      icon={faShoppingCart}
                      onClick={() => addItem(data)}
                    />
                  </div>
                </div>
                <span className="add-to-cart-text">Add to Cart</span>
              </div>
            </div>
            <div className="other-images d-flex justify-content-center gap-2 my-2 mx-1">
              <Image
                className="rounded-2"
                alt="img-2"
                src={data.images[1]}
                height={93}
                width={93}
              />
              <Image
                className="rounded-2"
                alt="img-3"
                src={data.images[2]}
                height={93}
                width={93}
              />
              <Image
                className="rounded-2"
                alt="img-4"
                src={data.images[3]}
                height={93}
                width={93}
              />
            </div>
            <div className="product-details">
              <h1 className="fs-1 product-title">{data.title}</h1>
              <div className="product-description gray-color">
                {data.description}
              </div>
              <div className="product-stock gray-color">
                In Stock: {data.stock}
              </div>
              <div className="product-brand gray-color">
                Brand: {data.brand}
              </div>
              <div className="product-category gray-color">
                Category: {data.category}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
