import { Link } from "react-router-dom";

const Product = ({
  id,
  title,
  description,
  category,
  price,
  rating,
  image
}) => {
  return (
    <Link to={`/products/${id}`}>
      <div>
        <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
      </div>
      <h3>
        {title} | {price}
      </h3>
    </Link>
  );
};

export default Product;
