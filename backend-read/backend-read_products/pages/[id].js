import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log("Product data:", data);
  console.log("Reviews:", data.reviews);

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      <ReviewSection>
        <h3>Reviews ({data.reviews?.length || 0})</h3>
        {data.reviews && data.reviews.length > 0 ? (
          <ReviewList>
            {data.reviews.map((review) => (
              <ReviewItem key={review._id}>
                <h4>{review.title}</h4>
                <p>{review.text}</p>
                <Rating>Rating: {"⭐".repeat(review.rating)}</Rating>
              </ReviewItem>
            ))}
          </ReviewList>
        ) : (
          <p>No reviews yet</p>
        )}
      </ReviewSection>

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

const ReviewSection = styled.section`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ReviewItem = styled.li`
  border-bottom: 1px solid #eee;
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }

  h4 {
    margin: 0 0 0.5rem 0;
    color: var(--color-nemo);
  }
`;

const Rating = styled.div`
  margin-top: 0.5rem;
  color: gold;
`;
