export function ButtonComponent() {
  return (
    <div>
      <button className="bg-green-400 px-4 py-2 rounded-lg">Click me</button>
    </div>
  );
}

const ProductItem = () => {
  return (
    <div>
      <p className="text-green-400 text-3xl">Products</p>
      <ButtonComponent />
    </div>
  );
};
export default ProductItem;
