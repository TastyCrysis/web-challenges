import dbConnect from "../../../db/connect";
import Product from "../../../db/models/product";
import Review from "../../../db/models/review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).lean();

    if (!product) {
      return response.status(404).json({ message: "Product not found" });
    }

    const productReviews = await Review.find({
      _id: { $in: product.reviews },
    }).lean();

    return response.status(200).json({
      ...product,
      reviews: productReviews,
    });
  }
}
