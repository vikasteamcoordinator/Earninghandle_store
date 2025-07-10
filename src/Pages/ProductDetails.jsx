import React from "react";
import AdditionalInfo from "../Components/Product/AdditonInfo/AdditionalInfo";
import Product from "../Components/Product/ProductMain/Product";
import RelatedProducts from "../Components/Product/RelatedProducts/RelatedProducts";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
    const location = useLocation();
  const product = location.state?.product;
  return (
    <>
      <Product product={product} />
      <AdditionalInfo product={product}/>
      <RelatedProducts />
    </>
  );
};

export default ProductDetails;
