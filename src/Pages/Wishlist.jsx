import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { allWish } from "../api/service/product/getWish";
import { delWish } from "../api/service/product/delWish";
import toast from "react-hot-toast";

const Wishlist = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [wish, setWish] = useState([]);
  const [loading2, setLoading2] = useState(false);

  const fetchWish = async () => {
    try {
      setLoading2(true);
      const response2 = await allWish();
      setWish(response2.wishlist?.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setWish([]);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchWish();
  }, []);

  if (loading2) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="loader" />
      </div>
    );
  }

  const handleRemoveItem = async (id) => {
    try {
      setLoading(true);
      const response = await delWish(id);
      if (response?.success === true) {
        toast.success("Product removed from wishlist");
        fetchWish();
        setLoading(false);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      setLoading(false);
    }
  };

  return (
    <main className="main-ch">
      <div className="header-ch">
        <div className="container-ch">
          <h1 className="title-ch">Wishlist</h1>
        </div>
      </div>

      <div className="content-ch">
        <div className="checkout-ch container-ch">
          <form>
            <div className="row-ch">
              <div className="product-pane-ca" style={{ maxWidth: "900px" }}>
                <h3 className="card-title-ch">Product Details</h3>
                <table className="product-table-ch">
                  <thead>
                    <tr>
                      <th>S no.</th>
                      <th>Image</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Cart</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {wish?.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>
                          <figure>
                            <Link>
                              <img
                                src={item.image}
                                alt="Product"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  objectFit: "cover",
                                }}
                              />
                            </Link>
                          </figure>
                        </td>
                        <td>{item.name}</td>
                        <td>₹{item.productPrice}</td>
                        <td>
                          <button
                            className="btn btn-secondary"
                            onClick={() => navigate(`/`)}
                          >
                            Add to Cart
                          </button>
                        </td>
                        <td
                          style={{
                            opacity: loading ? 0.6 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                          }}
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          ✘
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
