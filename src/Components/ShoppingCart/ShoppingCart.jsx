import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import namer from "color-namer";
import { allCart } from "../../api/service/product/getCart";
import { delCart } from "../../api/service/product/delCart";
import toast from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const [cart, setCart] = useState([]);
  const fetchCart = async () => {
    try {
      setLoading2(true);
      const response2 = await allCart();
      setCart(response2.cart?.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setCart([]);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading2) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="loader" />
      </div>
    );
  }

  const handleRemoveItem = async (item) => {
    const data = {
      color: item.color,
      size: item.size,
      quantity: item.quantity,
    };
    try {
      setLoading(true);
      const response = await delCart(item.product._id, data);
      if (response?.success === true) {
        toast.success("Product removed from cart");
        fetchCart();
        setLoading(false);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      setLoading(false);
    }
  };

  const shippingCost = 50;
  const shippingType = "Standard Shipping";

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.productPrice * item.quantity,
    0
  );
  const grandTotal = totalPrice + shippingCost;

  const handleSubmit = (e) => {
    navigate("/checkout");
    // e.preventDefault();
    // if (!isLoggedIn) {
    //   navigate("/auth");
    //   return;
    // }
    // setTimeout(() => {
    //   navigate("/");
    // }, 3000);
  };

  return (
    <main className="main-ch">
      <div className="header-ch">
        <div className="container-ch">
          <h1 className="title-ch">Cart</h1>
        </div>
      </div>

      <div className="content-ch">
        <div className="checkout-ch container-ch">
          <form>
            <div className="row-ch">
              <div className="product-pane-ca">
                <h3 className="card-title-ch">Product Details</h3>
                <table className="product-table-ch">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Color</th>
                      <th>Size</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((item) => (
                      <tr key={item._id}>
                        <td>{item.product.name}</td>
                        <td>{namer(item.color).basic[0].name}</td>
                        <td>{item.size}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.product.productPrice}</td>
                        <td>₹{item.product.productPrice * item.quantity}</td>
                        <td
                          style={{
                            cursor: "pointer",
                            opacity: loading ? 0.6 : 1,
                            cursor: loading ? "not-allowed" : "pointer",
                          }}
                          onClick={() => handleRemoveItem(item)}
                        >
                          ✘
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <aside className="summary-ch">
                <h3 className="summary-title-ch">Your Order</h3>
                <table className="table-ch">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>₹{totalPrice}</td>
                    </tr>
                    <tr>
                      <td>{shippingType}</td>
                      <td>₹{shippingCost}</td>
                    </tr>
                    <tr className="total-ch">
                      <td>Total</td>
                      <td>₹{grandTotal}</td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn-ch" onClick={handleSubmit}>
                  Proceed to Checkout
                </button>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Cart;
