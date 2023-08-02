import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addNumber } from "../../feature/storeSlice";
import { useMemo, useState } from "react";

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.FRONTEND_URL}/api/test`);
  const data = await response.json();
  return {
    props: { data },
  };
};

export default function Post({ data }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.store.count);
  const doAction = () => {
    dispatch(addNumber());
  };
  const addToCart = (item) => {
    dispatch(addItemToCart(item));
  };
  let [arrayLimit, setArrayLimit] = useState(6);
  const addArrayLimit = () => {
    if (arrayLimit <= data.products.length) setArrayLimit(arrayLimit + 5);
  };

  const dataCards = useMemo(() => {
    return data.products.slice(0, arrayLimit).map((item) => (
      <Link href={`/folder1/${item.id}`} key={item.id}>
        <div className="card">
          {item.id}
          <button onClick={() => addToCart(item)}>Add cart</button>
        </div>
      </Link>
    ));
  }, [data, arrayLimit]);
  return (
    <>
      <Link href={"/api/auth/login"}>Login</Link>
      <h1>Page1</h1>
      <h5>Count: {count}</h5>
      <button onClick={doAction}>+</button>
      <Link href={"/folder2/page2"}>next Page</Link>
      <div className="container d-flex flex-wrap">{dataCards}</div>
      <button className="container w-100" onClick={addArrayLimit}>
        See More
      </button>
    </>
  );
}
