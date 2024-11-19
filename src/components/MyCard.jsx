import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const MyCard = ({ id, fnc, title, price, description, src }) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
      <div className="relative p-2.5 h-80 overflow-hidden rounded-xl bg-clip-border">
        <img
          src={src}
          alt="card-image"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-gray-800 text-xl font-semibold">{title}</p>
          <p className=" text-xl font-semibold">${price}</p>
        </div>
        <p className="text-gray-600 leading-normal font-light">{description}</p>

        <div className="mt-2">
          <Link to={`/product/${id}`}>
            <Button variant="outlined" className="mr-2" type="button">
              View
            </Button>
          </Link>
          <Button type="button" onClick={fnc}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
