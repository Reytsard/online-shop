import Image from "next/image";
import "../../styles/main.css";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import { useUser } from "@auth0/nextjs-auth0/client";
function productPage() {
  const user = useUser();
  return (
    <div>
      <Header user={user} />
      <div className="productsSection">
        <ProductOptions user={user} />
        <div className="productsHeader">All Products</div>
        <div className="products d-flex justify-content-evenly align-items-center">
          <a href="/landing" className="text-decoration-none">
            <div className="card">
              <div className="productImage">
                <Image src="" alt="image" width="320px" height="165px" />
              </div>
              <div className="productDetails py-1 px-3">
                <h2 className="productName">iPhone 9</h2>
                <div className="productDesc">
                  An apple mobile which is nothing like apple
                </div>
                <div className="productPrice">
                  <h2>$549</h2>
                </div>
              </div>
              <div className="productRatings">
                <div className="stars">
                  <div className="star"></div>
                  <div className="starsAverage"></div>
                  <div className="salesCount"></div>
                </div>
                <div className="buy-item"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default productPage;
