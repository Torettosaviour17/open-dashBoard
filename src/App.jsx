import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./compoents/Dashboard";
import Layout from "./compoents/shared/layout";
import Product from "./compoents/product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="login" element="this is login page"/>
      </Routes>
    </Router>
  );
}

export default App;
