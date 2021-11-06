const Product = ({ id, title, category }) => {
  return (
    <div style={{ display: "block", border: "2px solid lavanda" }}>
      <h1>{title}</h1>
      <p>Product id: {id}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Product;
