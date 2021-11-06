const Product = ({ title, description, category, price, rating, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
      </div>
      <h3>
        {title} | {price}
      </h3>
      <p>Category: {category}</p>
      <p>{description}</p>
      <p>
        Rating: {rating.rate} of {rating.count}
      </p>
    </div>
  );
};

export default Product;
