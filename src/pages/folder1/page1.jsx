import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { GetRates, addItemToCart, addNumber } from "../../feature/storeSlice";
import { useEffect, useMemo, useState } from "react";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faStar } from "@fortawesome/free-solid-svg-icons";
import PageCounter from "../../Components/PageCounter";
import Footer from "../../Components/Footer";

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.FRONTEND_URL}/api/test`);
  const data = await response.json();
  return {
    props: { data },
  };
};

export default function Post({ data }) {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategory() {
      const response = await fetch("/api/fetchCategories");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategory();
    dispatch(GetRates());
  }, [dispatch]);
  const curr = useSelector((state) => state.store.currency.name);
  const rates = useSelector((state) => state.store.rates);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredArray, setfilteredArray] = useState([]);
  const setCategory = (e) => {
    setSelectedCategory(e.target.value);
    setfilteredArray(
      data.products.filter((item) => item.category === e.target.value)
    );
  };
  let [arrayLimit, setArrayLimit] = useState(6);
  const addArrayLimit = () => {
    if (arrayLimit <= data.products.length) setArrayLimit(arrayLimit + 5);
  };
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
  const dataCards = useMemo(() => {
    if (selectedCategory === "") {
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
              <h2 className="productPrice h-auto">
                {currencySign}
                {Math.floor(item.price * rates[curr] * 100) / 100}
              </h2>
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
                  <PageCounter item={item} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ));
    } else {
      return filteredArray.slice(0, arrayLimit).map((item) => (
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
              <h2 className="productPrice h-auto">
                {currencySign}
                {Math.floor(item.price * rates[curr] * 100) / 100}
              </h2>
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
                  <PageCounter item={item} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ));
    }
  }, [
    selectedCategory,
    filteredArray,
    currencySign,
    data,
    arrayLimit,
    rates,
    curr,
  ]);
  return (
    <>
      <Header />
      <ProductOptions />
      <div className="d-flex w-auto px-2">
        <div className="container">
          <h1>All Products</h1>
        </div>
        <div>
          <select
            onChange={(e) => setCategory(e)}
            className="filter-brands btn btn-lg btn-outline-primary rounded-pill"
          >
            <option value={""}>Category</option>
            {categories.map((category) => (
              <option key={`${category} `} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
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
      <Footer />
    </>
  );
}
