import Link from "next/link";
import { useSelector } from "react-redux";

export default function Placed() {
  const cart = useSelector((state) => state.store.cart);
  console.log(cart);
  return (
    <>
      <h1>Order Placed</h1>
      <Link href={"/folder1/page1"}>Continue Shopping</Link>
      <div className="container">
        {cart.map((item) => (
          <div className="cart" key={item.item.id}>
            {item.item.title} {item.quantity}
          </div>
        ))}
      </div>
    </>
  );
}
