import Link from "next/link";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import ProductOptions from "../../Components/ProductOptions";
import Image from "next/image";

export default function Placed() {
  const cart = useSelector((state) => state.store.cart);
  return (
    <>
      <Header />
      <ProductOptions />
      <h1 className="ms-4">Order Placed</h1>
      <div className="order-info my-2 ms-4">
        Thank you for ordering. We will ship it in 1-2 days and send you as
        follow up email to track the delivery.
      </div>
      <div className="order-items w-auto gap-2 p-4 d-flex flex-column justify-content-center align-items-center">
        {cart.map((item) => (
          <div
            className="card shadow-sm w-100 bg-light-subtle"
            key={item.item.id}
          >
            <div className="card-body d-flex align-items-center">
              <div className="row">
                <Image
                  className="col rounded-3"
                  src={item.item.images[0]}
                  alt={`imageid${item.item.id}`}
                  height={54}
                  width={54}
                />
                <div className="col">
                  <div className="row text-truncate">{item.item.title}</div>
                  <div className="row gray-color">{item.quantity} items</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        className="btn btn-lg btn-outline-primary rounded-pill ms-4"
        href={"/folder1/page1"}
      >
        Continue Shopping
      </Link>
    </>
  );
}
