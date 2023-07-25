import axios from "axios";

export default handler = async (req, res) => {
  const response = await axios.get("https://dummyjson.com/products");
  const data = await response.data;
};
