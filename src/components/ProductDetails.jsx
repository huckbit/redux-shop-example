import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSingleProduct,
  removeSelectedProduct
} from "../redux/actions/products.action";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    /* clean up  */
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  console.log("pippo", product);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h1>Loading product ...</h1>
        </div>
      ) : (
        <div style={{ margin: "2rem 15vw" }}>
          <div className="media">
            <img src={product.image} className="mr-3" alt="" width="250" />
            <div className="media-body">
              <h1 className="mt-0">{product.title}</h1>
              <h3>category - {product.category}</h3>
              <h3>price is £{product.price}</h3>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "2rem" }}>
            <p>{product.description}</p>
          </div>
          <div>
            <p>
              <strong>{product?.rating?.rate}</strong> based on{" "}
              <strong>{product?.rating?.count}</strong> reviews
            </p>
          </div>
          <div>
            <Link to="/">
              <button className="btn btn-primary">Back to shop</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
