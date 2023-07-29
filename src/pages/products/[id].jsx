import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import Footer from "../../Components/Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import Image from "next/image";

export const getServerSideProps = async (context) => {
  const postId = context.params?.id;
  const response = await axios.get(`https://dummyjson.com/products/${postId}`);
  const data = await response.data;
  return {
    props: { data },
  };
};

export default function Post({ data }) {
  const user = useUser();
  return (
    <div className="product-item">
      <Header user={user} />
      <ProductOptions user={user} />
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
        <h1 className="m-2">${data.price}</h1>
        <div className="discount-percentage bg-primary rounded-5 py-1 px-2">
          {data.discountPercentage}%
        </div>
      </div>

      <div className="btn btn-lg g-0 w-100 product-add-to-cart bg-primary rounded-2 text-center ">
        {/* add height for this button  */}
        Add to Cart
      </div>
      <div className="other-images d-flex justify-content-center gap-2 my-2 mx-1">
        <Image
          className="rounded-2"
          src={data.images[1]}
          height={93}
          width={93}
        />
        <Image
          className="rounded-2"
          src={data.images[2]}
          height={93}
          width={93}
        />
        <Image
          className="rounded-2"
          src={data.images[3]}
          height={93}
          width={93}
        />
      </div>
      <h1 className="fs-1 product-title">{data.title}</h1>
      <div className="product-description">{data.description}</div>
      <div className="product-rating"></div>
      <div className="product-stock">In Stock: {data.stock}</div>
      <div className="product-brand">Brand: {data.brand}</div>
      <div className="product-category">Category: {data.category}</div>
      <Footer />
    </div>
  );
}
