import "./styles/color.css";
import "./styles/typography.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import AddProducts from "./pages/products/addProducts";
import Categories from "./pages/categories";
import AddCategories from "./pages/categories/addCategories";
import Layout from "./components/Layout";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTES } from "./utils/routes";
import ManagedModal from "./components/ui/modal/managed-modal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES?.LOGIN} element={<Login />} />
        <Route path={ROUTES?.HOME} element={<Layout />}>
          <Route path={ROUTES?.HOME} element={<Dashboard />} />
          <Route path={ROUTES?.PRODUCTS} element={<Products />} />
          <Route path={ROUTES?.ADDPRODUCTS} element={<AddProducts />} />
          <Route path={ROUTES?.CATEGORIES} element={<Categories />} />
          <Route path={ROUTES?.ADDCATEGORIES} element={<AddCategories />} />
          <Route path={ROUTES?.ORDERS} element={<Products />} />
          <Route path={ROUTES?.ADDORDERS} element={<AddProducts />} />
        </Route>
      </Routes>
      <ToastContainer />
      <ManagedModal />
    </div>
  );
}

export default App;
