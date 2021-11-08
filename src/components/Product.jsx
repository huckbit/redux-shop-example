import { Link } from "react-router-dom";

const Product = ({ id, title, price, image }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="card">
        <img src={image} className="card-img-top" alt="" widht="150" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
