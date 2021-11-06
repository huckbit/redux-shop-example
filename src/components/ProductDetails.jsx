import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { selectedProduct } from "../redux/actions/products.action";
import Product from "../components/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
        /* Dispatching data to the store to save the state */
        dispatch(selectedProduct(resp.data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div style={{ margin: "2rem 15vw" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ height: "10rem", width: "10rem" }}>
          <img
            src={product.image}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>
        <div style={{ margin: "auto 2rem" }}>
          <h1>{product.title}</h1>
          <h3>category - {product.category}</h3>
          <h3>price is £{product.price}</h3>
          <p>
            <strong>{product?.rating?.rate}</strong> based on{" "}
            <strong>{product?.rating?.count}</strong> reviews
          </p>
        </div>
      </div>
      <div style={{ display: "fles", marginTop: "2rem" }}>
        <p>{product.description}</p>
      </div>
      <div>
        <Link to="/">Back to shop</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
