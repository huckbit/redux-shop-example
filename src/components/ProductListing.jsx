import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/products.action";
import Product from "../components/Product";

const ProductListing = () => {
  /* Getting data from the store */
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();

  /* Fetching data from the API */
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1>Welcome to Fake Shop</h1>
      {data?.products?.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem"
          }}
        >
          {data?.products?.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Loading shop...</h1>
        </div>
      )}
    </div>
  );
};

export default ProductListing;
