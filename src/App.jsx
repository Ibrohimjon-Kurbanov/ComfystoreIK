import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import ErrorPage from "./pages/ErrorPage";
import Card from "./pages/Card";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <ProductsDetails />
            </MainLayout>
          }
        />
        <Route
          path="/card"
          element={
            <MainLayout>
              <Card />
            </MainLayout>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
