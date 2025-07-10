import React, { useEffect, useState } from "react";
import "./ShopDetails.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Features/Cart/cartSlice";

import Filter from "../Filters/Filter";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoFilterSharp, IoClose } from "react-icons/io5";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import toast from "react-hot-toast";
import { getAllProducts } from "../../../api/service/product/allProduct";
import { addToWishlist } from "../../../api/service/product/addWish";

const ShopDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [wishList, setWishList] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [product, setProduct] = useState([]);

  const fetchTopProducts = async () => {
    try {
      setLoading2(true);
      const data = await getAllProducts();

      if (data) {
        setProduct(data.populatedCampaign);
      }
    } catch (error) {
      console.error("Failed to fetch top products:", error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchTopProducts();
  }, []);

  if (loading2) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="loader" />
      </div>
    );
  }

  const handleWishlistClick = async (product) => {
    if (!isAuthenticated) {
      toast.error("Please log in to add products to the wishlist.");
      navigate("/auth");
      return;
    }

    if (wishList[product._id]) {
      navigate("/wishlist");
      return;
    }

    setLoading(true);

    try {
      const response = await addToWishlist(product._id);

      if (response?.success === true) {
        toast.success("Product added to the wishlist successfully.");
        setWishList((prev) => ({ ...prev, [product._id]: true }));
      }
    } catch (error) {
      console.error("Failed to add product to wishlist:", error);
      toast.error("Failed to add product to wishlist.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleAddToCart = (product) => {
    navigate("/product", { state: { product } });
  };

  return (
    <>
      <div className="shopDetails">
        <div className="shopDetailMain">
          <div className="shopDetails__left">
            <Filter />
          </div>
          <div className="shopDetails__right">
            <div className="shopDetailsSorting">
              <div className="shopDetailsBreadcrumbLink">
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
                &nbsp;/&nbsp;
                <Link to="/shop">The Store</Link>
              </div>
              <div className="filterLeft" onClick={toggleDrawer}>
                <IoFilterSharp />
                <p>Filter</p>
              </div>
              <div className="shopDetailsSort">
                <select name="sort" id="sort">
                  <option value="default">Default Sorting</option>
                  <option value="Featured">Featured</option>
                  <option value="bestSelling">Best Selling</option>
                  <option value="a-z">Alphabetically, A-Z</option>
                  <option value="z-a">Alphabetically, Z-A</option>
                  <option value="lowToHigh">Price, Low to high</option>
                  <option value="highToLow">Price, high to low</option>
                  <option value="oldToNew">Date, old to new</option>
                  <option value="newToOld">Date, new to old</option>
                </select>
                <div className="filterRight" onClick={toggleDrawer}>
                  <div className="filterSeprator"></div>
                  <IoFilterSharp />
                  <p className="mb-0">Filter</p>
                </div>
              </div>
            </div>
            <div className="shopDetailsProducts">
              <div className="shopDetailsProductsContainer">
                {product?.slice(0, 20).map((product) => (
                  <div className="sdProductContainer">
                    <div className="sdProductImages">
                      <Link
                        to="/Product"
                        state={{ product }}
                        onClick={scrollToTop}
                      >
                        <img
                          src={product.image}
                          alt="Prduct Image"
                          className="sdProduct_front"
                        />
                        <img
                          src={product.subImages[0]}
                          alt="Sub Image"
                          className="sdProduct_back"
                        />
                      </Link>
                      <h4 onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </h4>
                    </div>
                    <div
                      className="sdProductImagesCart"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaCartPlus />
                    </div>
                    <div className="sdProductInfo">
                      <div className="sdProductCategoryWishlist">
                        <p>Dresses</p>
                        <FiHeart
                          onClick={() => handleWishlistClick(product)}
                          style={{
                            color: wishList[product._id] ? "red" : "#767676",
                            opacity: loading ? 0.6 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                          }}
                        />
                      </div>
                      <div className="sdProductNameInfo">
                        <Link
                          to="/product"
                          state={{ product }}
                          onClick={scrollToTop}
                        >
                          <h5>{product.name}</h5>
                        </Link>

                        <p>₹{product.productPrice}</p>
                        <div className="sdProductRatingReviews">
                          <div className="sdProductRatingStar">
                            {[...Array(5)].map((_, index) =>
                              index < product.rating ? (
                                <FaStar key={index} color="#FEC78A" size={10} />
                              ) : (
                                <FaRegStar
                                  key={index}
                                  color="#FEC78A"
                                  size={10}
                                />
                              )
                            )}
                          </div>
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="shopDetailsPagination">
              <div className="sdPaginationPrev">
                <p onClick={scrollToTop}>
                  <FaAngleLeft />
                  Prev
                </p>
              </div>
              <div className="sdPaginationNumber">
                <div className="paginationNum">
                  <p onClick={scrollToTop}>1</p>
                  <p onClick={scrollToTop}>2</p>
                  <p onClick={scrollToTop}>3</p>
                  <p onClick={scrollToTop}>4</p>
                </div>
              </div>
              <div className="sdPaginationNext">
                <p onClick={scrollToTop}>
                  Next
                  <FaAngleRight />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Drawer */}
      <div className={`filterDrawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawerHeader">
          <p>Filter By</p>
          <IoClose onClick={closeDrawer} className="closeButton" size={26} />
        </div>
        <div className="drawerContent">
          <Filter />
        </div>
      </div>
    </>
  );
};

export default ShopDetails;
