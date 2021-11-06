import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/products.action";

const ProductListing = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        dispatch(setProducts(resp.data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      <h1>Shop</h1>
      {console.log(data.allProducts.products)}
    </div>
  );
};

export default ProductListing;
