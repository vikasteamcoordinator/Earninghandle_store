import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollButton/ScrollToTop";
import Authentication from "./Pages/Authentication";
import BlogDetails from "./Components/Blog/BlogDetails/BlogDetails";
import TermsConditions from "./Pages/TermsConditions";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Popup from "./Components/PopupBanner/Popup";
import { Toaster } from "react-hot-toast";

import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import PrivacyPolicy from "./Components/Terms/Privacy";
import ShippingPolicy from "./Components/Terms/Shipping";
import Account from "./Components/Account/account";
import ReturnPolicy from "./Components/Terms/Return";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/action/authAction";

const ProtectedLayout = ({ children }) => {
  const { isAuthenticated, authLoaded } = useSelector((state) => state.auth)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  if (!authLoaded) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="loader" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />
  }

  return children
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Popup />
      <Toaster />

      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Authentication />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/BlogDetails/:id" element={<BlogDetails />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/cart" element={<ProtectedLayout> <ShoppingCart /> </ProtectedLayout>} />
          <Route path="/account" element={<ProtectedLayout> <Account /> </ProtectedLayout>} />
          <Route path="/wishlist" element={<ProtectedLayout> <Wishlist /> </ProtectedLayout>} />
          <Route path="/checkout" element={<ProtectedLayout> <Checkout /> </ProtectedLayout>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;