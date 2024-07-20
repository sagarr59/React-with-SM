import ClassBasedComponent from "./components/class-based-component";
import FunctionalComponent from "./components/functional-component";
import ProductList from "./components/products/ProductList";

const App = () => {
  return (
    <>
      <h1 className="text-red-800 text-4xl bg-slate-400 p-3 ">React Js</h1>
      <ClassBasedComponent />

      <FunctionalComponent />
      <ProductList />
    </>
  );
};
export default App;
