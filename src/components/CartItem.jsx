import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";
import React from "react";

const CartItem = ({
  quantity,
  title,
  price,
  totalPrice,
  src,
  addQuantityfnc,
  lessQuantityfnc,
  deleteFnc,
}) => {
  return (
    <tr className="hover:bg-slate-50">
      <td className="p-4 border-b border-slate-200 py-5">
        <img
          src={src}
          alt="Product 1"
          className="w-16 h-16 object-cover rounded"
        />
      </td>
      <td className="p-4 border-b border-slate-200 py-5">
        <p className="block font-semibold text-sm text-slate-800">{title}</p>
      </td>
      <td className="p-4 border-b border-slate-200 py-5">
        <div className="flex items-center gap-2">
          <IconButton size="sm" onClick={addQuantityfnc}>
            <PlusIcon className="w-5 h-5" color="#fff" />
          </IconButton>
          <p>{quantity}</p>
          <IconButton size="sm" onClick={lessQuantityfnc}>
            <MinusIcon className="w-5 h-5" color="#fff" />
          </IconButton>
        </div>
      </td>
      <td className="p-4 border-b border-slate-200 py-5">
        <p className="text-sm text-slate-500">${price}</p>
      </td>
      <td className="p-4 border-b border-slate-200 py-5">
        <p className="text-sm text-slate-500">${totalPrice}</p>
      </td>
      <td className="p-4 border-b border-slate-200 py-5">
        <button type="button" className="p-1" onClick={deleteFnc}>
          <TrashIcon className="w-6 h-6" color="red" />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
