import ProductItem from "./components/ProductItem";

const dummyProductData = ["Product 1", "Product 2", "Product 3"];
const ProductList = () => {
  return (
    <div>
      <h2 className="bg-blue-400 p-3 font-mono">E-Commerce Project</h2>
      <ProductItem />

      <ul>
        {dummyProductData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
