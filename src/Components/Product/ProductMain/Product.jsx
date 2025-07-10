import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import { useDispatch, useSelector } from "react-redux";

import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { PiShareNetworkLight } from "react-icons/pi";

import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import "./Product.css";
import ColorNamer from "color-namer";
import { addToWishlist } from "../../../api/service/product/addWish";
import { addProductToCart } from "../../../api/service/product/addCart";
import { checkAuth } from "../../../redux/action/authAction";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWish, setIsAddedToWish] = useState(false);
  // dispatch(checkAuth());

  const productImg = [product.image, ...(product.subImages?.slice(0, 3) || [])];

  const [currentImg, setCurrentImg] = useState(0);

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? productImg.length - 1 : currentImg - 1);
  };

  const nextImg = () => {
    setCurrentImg(currentImg === productImg.length - 1 ? 0 : currentImg + 1);
  };

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const [selectSize, setSelectSize] = useState("");

  const [highlightedColor, setHighlightedColor] = useState("");

  const colors = product.colour || [];

  const colorsName = colors.map((hex) => ColorNamer(hex).basic[0].name);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error("Please log in to add products to the cart.");
      navigate("/auth");
      return;
    }

    if (isAddedToCart) {
      navigate("/cart");
      return;
    }

    if (!highlightedColor) {
      toast.error("Color selection is required.");
      return;
    }

    if (!selectSize) {
      toast.error("Size selection is required.");
      return;
    }

    if (!quantity || quantity <= 0) {
      toast.error("Valid quantity is required.");
      return;
    }

    if (quantity > 10) {
      toast.error("Max quantity is 10.");
      return;
    }

    setLoading(true);

    try {
      const data = { color: highlightedColor, size: selectSize, quantity };
      const response = await addProductToCart(product._id, data);

      if (response?.success === true) {
        setIsAddedToCart(true);
        toast.success("Product added to the cart successfully.");
      }
    } catch (error) {
      toast.error("Failed to add product to cart.");
      console.error("Failed to add product to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWish = async () => {
    if (!isAuthenticated) {
      toast.error("Please log in to add products to the wishlist.");
      navigate("/auth");
      return;
    }

    if (isAddedToWish) {
      navigate("/wishlist");
      return;
    }

    setLoading(true);

    try {
      const response = await addToWishlist(product._id);

      if (response?.success === true) {
        toast.success("Product added to the wishlist successfully.");
        setIsAddedToWish(true);
      }
    } catch (error) {
      console.error("Failed to add product to wishlist:", error);
      toast.error("Failed to add product to wishlist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="productSection">
        <div className="productShowCase">
          <div className="productGallery">
            <div className="productThumb">
              <img
                src={product.image}
                onClick={() => setCurrentImg(0)}
                alt="Product Image"
              />
              {product.subImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Sub Image ${index + 1}`}
                  onClick={() => setCurrentImg(index + 1)}
                />
              ))}
            </div>
            <div className="productFullImg">
              <img src={productImg[currentImg]} alt="Product Image" />
              <div className="buttonsGroup">
                <button onClick={prevImg} className="directionBtn">
                  <GoChevronLeft size={18} />
                </button>
                <button onClick={nextImg} className="directionBtn">
                  <GoChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="productDetails">
            <div className="productBreadcrumb">
              <div className="breadcrumbLink">
                <Link to="/">Home</Link>&nbsp;/&nbsp;
                <Link to="/shop">The Shop</Link>
              </div>
            </div>
            <div className="productName">
              <h1>{product?.name}</h1>
            </div>
            <div className="productRating">
              {[...Array(5)].map((_, index) =>
                index < product.rating ? (
                  <FaStar key={index} color="#FEC78A" size={10} />
                ) : (
                  <FaRegStar key={index} color="#FEC78A" size={10} />
                )
              )}
            </div>
            <div className="productPrice">
              <h3>
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "gray",
                    marginRight: "10px",
                  }}
                >
                  ₹{product?.mrp}
                </span>
                <span style={{ color: "green" }}>₹{product?.productPrice}</span>
              </h3>
            </div>
            <div className="productDescription">
              <p>{product?.productDescription}</p>
            </div>
            <div className="productSizeColor">
              <div className="productSize">
                <p>Sizes</p>
                <div className="sizeBtn">
                  {product?.productSizes?.map((size, index) => (
                    <button
                      style={{
                        backgroundColor: selectSize === size ? "#000" : "#fff",
                        color: selectSize === size ? "#fff" : "#000",
                      }}
                      onClick={() => setSelectSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="productColor">
                <p>Color</p>
                <div className="colorBtn">
                  {colors.map((color, index) => (
                    <Tooltip
                      key={color}
                      title={colorsName[index]}
                      placement="top"
                      enterTouchDelay={0}
                      TransitionComponent={Zoom}
                      arrow
                    >
                      <button
                        className={
                          highlightedColor === color ? "highlighted" : ""
                        }
                        style={{
                          backgroundColor: color.toLowerCase(),
                          border:
                            highlightedColor === color
                              ? "0.05px solid #000"
                              : "0.2px solid #000",
                          padding: "8px",
                          margin: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => setHighlightedColor(color)}
                      />
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
            <div className="productCartQuantity">
              <div className="productQuantity">
                <button onClick={decrement}>-</button>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleInputChange}
                />
                <button onClick={increment}>+</button>
              </div>
              <div className="productCartBtn">
                <button
                  onClick={handleAddToCart}
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {isAddedToCart ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
            <div className="productWishShare">
              <div className="productWishList">
                <button
                  onClick={handleAddToWish}
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  <FiHeart color={isAddedToWish ? "red" : ""} size={17} />
                  <p>{isAddedToWish ? "See Wishlist" : "Wishlist"}</p>
                </button>
              </div>
              <div
                className="productShare"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const url = window.location.href;
                  navigator.clipboard
                    .writeText(url)
                    .then(() => {
                      toast.success("Link copied!");
                    })
                    .catch((err) => {
                      console.error("Failed to copy: ", err);
                    });
                }}
              >
                <PiShareNetworkLight size={22} />
                <p>Share</p>
              </div>
            </div>
            <div className="productTags">
              <p>
                <span>SKU: </span>
                {product._id || "N/A"}
              </p>
              <p>
                <span>CATEGORIES: </span>
                {product?.categories.map((category, index) => (
                  <span
                    key={index}
                    style={{
                      marginRight: "10px",
                      color: "#000",
                      fontWeight: "400",
                    }}
                  >
                    {category.name.toUpperCase()}
                    {index !== category.length - 1 ? " | " : ""}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
