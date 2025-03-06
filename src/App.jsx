import { Routes, Route } from "react-router-dom";
import ProductDetail from "Views/ProductDetails";
import ProductList from "Views/ProductList";


function App() {
  return (

      <Routes >

        <Route path="/" element={<ProductList />} />
        <Route path="/product/:sku" element={<ProductDetail />} />
      </Routes>


  );
}

export default App;
