import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  addQuantity,
  minusQuantity,
  removeItem,
} from "../../feature/storeSlice";

export default function Post() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.store.count);
  const cart = useSelector((state) => state.store.cart);
  const doAction = () => {
    dispatch(addNumber());
  };
  const minusCartQuantity = (id) => {
    dispatch(minusQuantity(id));
  };
  const addCartQuantity = (id) => {
    dispatch(addQuantity(id));
  };
  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <Link href={"/api/auth/logout"}>LogOut</Link>
      <h1>Page 2</h1>
      <h5>Count: {count}</h5>
      <button onClick={doAction}>+</button>
      <Link href={"/folder1/page1"}>back</Link>
      <div className="container">
        {cart.map((item) => (
          <div className="card" key={`${item.item.id}`}>
            <div className="card-title">{item.item.title}</div>
            <div className="card-body d-flex">
              <button onClick={() => minusCartQuantity(item.item.id)}>-</button>
              {item.quantity}
              <button onClick={() => addCartQuantity(item.item.id)}>+</button>
              <button onClick={() => removeFromCart(item.item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/order/order-placed"} className="place-order">
        Place Order
      </Link>
    </>
  );
}
