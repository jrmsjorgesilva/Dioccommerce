import React, { useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { add, subtract } from "../../store/reducers/store.cart";

const Cart = () => {
  const dispatch = useDispatch();

  const cart: any = useSelector((state: RootState) => state.cart);

  const [product, setProduct] = useState<string>(() => 'Curso Javinha')

  console.log("cart", cart);

  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-secondary text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              <tr>
                <td className="align-middle">
                  <img
                    src="img/product-1.jpg"
                    alt=""
                    style={{ width: "50px" }}
                  />
                  {product}
                </td>
                <td className="align-middle">R$150</td>
                <td className="align-middle">
                  <div
                    className="input-group quantity mx-auto"
                    style={{ width: "100px" }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-minus" onClick={() => dispatch(subtract())}>
                        <FaMinus />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm bg-secondary text-center"
                      value={cart.counter}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus" onClick={() => dispatch(add())}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">R$150</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-primary">
                    <FaTimes />
                  </button>
                </td>
              </tr>
                {/* Segundo produto do carrinho */}
              <tr>
                <td className="align-middle">
                  <img
                    src="img/product-5.jpg"
                    alt=""
                    style={{ width: "50px" }}
                  />{" "}
                  {product}
                </td>
                <td className="align-middle">R$150</td>
                <td className="align-middle">
                  <div
                    className="input-group quantity mx-auto"
                    style={{ width: "100px" }}
                  >
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-minus" onClick={() => dispatch(subtract())}>
                        <FaMinus />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-sm bg-secondary text-center"
                      value={cart.counter}
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-sm btn-primary btn-plus" onClick={() => dispatch(add())}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">R$150</td>
                <td className="align-middle">
                  <button className="btn btn-sm btn-primary">
                    <FaTimes />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
          <form className="mb-5" action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-4"
                placeholder="Coupon Code"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </form>
          <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">R$150</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">R$10</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">R$160</h5>
              </div>
              <Link className="btn btn-block btn-primary my-3 py-3" to="/checkout">
                Proceed To Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
