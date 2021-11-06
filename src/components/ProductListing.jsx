import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/products.action";
import Product from "../components/Product";

const ProductListing = () => {
  const data = useSelector((state) => state); /* Getting data from the store */
  const dispatch = useDispatch();

  /* Fetching data from the API */
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        /* Dispatching data to the store to save the state */
        dispatch(setProducts(resp.data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Welcome to Fake Shop</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem"
        }}
      >
        {data.allProducts.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
