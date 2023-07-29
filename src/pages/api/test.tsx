import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  res.status(200).json(data);
}
