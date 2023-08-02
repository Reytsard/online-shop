import axios from "axios";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../feature/storeSlice";

export const getServerSideProps = async (context) => {
  const id = context.params?.productId;
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  const data = await response.data;
  return {
    props: { data },
  };
};
export default function Product({ data }) {
  const dispatch = useDispatch();
  const addItem = (data) => {
    dispatch(addItemToCart(data));
  };
  return (
    <>
      <Link href={"/folder1/page1"}>back</Link>
      <div className="container">{data.title}</div>
      <div className="container">{data.price}</div>
      <button onClick={() => addItem(data)}>Add To Cart</button>
    </>
  );
}
