import Image from "next/image";
import "../../styles/main.css";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useMemo, useState } from "react";
function productPage() {
  const user = useUser();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/test");
      const data = await response.json();
      console.log("data.products:", data.products);
      setProducts(data.products);
    }
    getData();
  }, []);
  const productsCards = useMemo(() => {
    return products.map((item) => {
      return (
        <a href={`/products/${item.id}`} className="text-decoration-none">
          <div className="card" key={item.id}>
            <div className="productImage ">
              <Image
                src={item.images[0]}
                alt="image"
                width={320}
                height={160}
              />
            </div>
            <div className="productDetails d-flex flex-column flex-wrap py-1 px-3">
              <h2 className="productName">{item.title}</h2>
              <div className="productDesc">{item.description}</div>
              <h2 className="productPrice h-auto">${item.price}</h2>
            </div>
            <div className="productRatings py-1 px-3">
              <div className="stars">
                <div className="star"></div>
                <div className="starsAverage">{item.rating}</div>
                <div className="salesCount">{item.stock} left in stock</div>
              </div>
              <div className="buy-item"></div>
            </div>
          </div>
        </a>
      );
    });
  }, [products]);
  return (
    <div>
      <Header user={user} />
      <div className="productsSection p-2">
        <ProductOptions user={user} />
        <div className="productsHeader">All Products</div>
        <div className="products d-flex gap-4 justify-content-evenly align-items-start flex-wrap">
          {productsCards}
        </div>
      </div>
    </div>
  );
}

export default productPage;
