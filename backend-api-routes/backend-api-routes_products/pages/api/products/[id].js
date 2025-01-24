import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;

  const product = getProductById(id);

  if (!product) {
    response.status(404).json({ message: "Product not found" });
  } else {
    response.status(200).json(product);
  }
}
