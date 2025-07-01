import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  // const showToast = (type, message) => {
  //   toast[type](message, {
  //     position: "top-right",
  //     autoClose: 3000,
  //   });
  // };

  const shippingCost = 50;
  const shippingType = "Standard Shipping";
  const address = {
    _id: "static123",
    firstName: "John",
    lastName: "Doe",
    phone: "1234567890",
    streetAddress: "123 Static Lane",
    city: "Static City",
    state: "CA",
    country: "USA",
  };

  const cartItems = [
    {
      id: 1,
      product: { _id: "prod1", productName: "Product A", price: 100 },
      quantity: 2,
    },
    {
      id: 2,
      product: { _id: "prod2", productName: "Product B", price: 200 },
      quantity: 1,
    },
  ];

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const grandTotal = totalPrice + shippingCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      // showToast("warning", "Please log in to proceed further");
      navigate("/auth");
      return;
    }
    // showToast("success", "Order placed successfully.");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <main className="main-ch">
      <div className="header-ch">
        <div className="container-ch">
          <h1 className="title-ch">Checkout</h1>
        </div>
      </div>

      {/* <ToastContainer /> */}
      <div className="content-ch">
        <div className="checkout-ch container-ch">
          <form>
            <div className="row-ch">
              <div className="address-pane-ch">
                <p className="note-ch">The following address will be used:</p>
                <div className="card-ch">
                  <h3 className="card-title-ch">Address</h3>
                  <p className="card-text-ch">
                    {address.firstName} {address.lastName}
                    <br />
                    {address.phone}
                    <br />
                    {address.streetAddress}
                    <br />
                    {address.city}, {address.state}
                    <br />
                    {address.country}
                    <br />
                    <Link to='/account'>
                      Edit <i className="icon-edit"></i>
                    </Link>
                  </p>
                </div>
              </div>

              <aside className="summary-ch">
                <h3 className="summary-title-ch">Your Order</h3>
                <table className="table-ch">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          {item.product.productName} × {item.quantity}
                        </td>
                        <td>₹{item.product.price * item.quantity}</td>
                      </tr>
                    ))}
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
                <div className="payment-options-ch">
                  <h4>Select Payment Method</h4>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Card
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    UPI
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="wallet"
                      checked={paymentMethod === "wallet"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Wallet
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="phonepe"
                      checked={paymentMethod === "phonepe"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    PhonePe
                  </label>
                </div>

                <button className="btn-ch" onClick={handleSubmit}>
                  Proceed To Pay
                </button>
              </aside>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
