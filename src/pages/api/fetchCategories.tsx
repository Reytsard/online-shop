import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function fetchCategories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.get("https://dummyjson.com/products/categories");
  const data = await response.data;
  res.status(200).json(data);
}
