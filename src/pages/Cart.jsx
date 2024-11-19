import { IconButton, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  lessQuantity,
  removeItem,
} from "../redux/reducers/CartSlice";

const Cart = () => {
  const [cartTotalPrice, setcartTotalPrice] = useState(0);

  const selector = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addProductQuatity = (product) => {
    dispatch(addQuantity(product));
  };
  const lessProductQuatity = (product) => {
    dispatch(lessQuantity(product));
  };

  const deleteProduct = (product) => {
    dispatch(removeItem(product));
  };

  useEffect(() => {
    let sum = 0;
    if (selector.length > 0) {
      selector.forEach((item) => {
        sum += item.price * item.quantity;
      });
      setcartTotalPrice(sum.toFixed(2));
    }
  }, [selector]);

  return (
    <div>
      <>
        <div>
          <h3 className="text-xl my-4 text-center font-semibold text-slate-800">
            My Shopping Cart
          </h3>
        </div>
        <div className="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr className="border-b border-slate-300 bg-slate-50">
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Product
                </th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Name
                </th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Quantity
                </th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Price per Item
                </th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500">
                  Total Price
                </th>
                <th className="p-4 text-sm font-normal leading-none text-slate-500" />
              </tr>
            </thead>
            <tbody>
              {!!selector.length &&
                selector.map((item) => (
                  <CartItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    totalPrice={(item.price * item.quantity).toFixed(2)}
                    src={item.thumbnail}
                    quantity={item.quantity}
                    addQuantityfnc={() => addProductQuatity(item)}
                    lessQuantityfnc={() => lessProductQuatity(item)}
                    deleteFnc={() => deleteProduct(item)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        {selector.length === 0 ? (
          <h2 className="text-center text-xl font-semibold text-gray-500 my-5">
            No products in Cart
          </h2>
        ) : (
          <div className="text-right mr-8 mt-3 mb-8">
            <p className="text-2xl font-semibold">Total : ${cartTotalPrice}</p>
          </div>
        )}
      </>
    </div>
  );
};

export default Cart;
