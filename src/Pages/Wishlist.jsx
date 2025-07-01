import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Wishlist = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      product: {
        _id: "prod1",
        productName: "Product A",
        price: 100,
        color: "Red",
        size: "M",
      },
      quantity: 2,
    },
    {
      id: 2,
      product: {
        _id: "prod2",
        productName: "Product B",
        price: 200,
        color: "Blue",
        size: "L",
      },
      quantity: 1,
    },
  ];

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
              <div className="product-pane-ca" style={{maxWidth:"900px"}}>
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
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.product.productName}</td>
                        <td>{item.product.color}</td>
                        <td>{item.product.size}</td>
                        <td>{item.quantity}</td>
                        <td>₹{item.product.price}</td>
                        <td>₹{item.product.price * item.quantity}</td>
                        <td style={{cursor:"pointer"}}>X</td>
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