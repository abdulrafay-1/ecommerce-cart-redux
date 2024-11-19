import { Button, Rating, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/reducers/CartSlice";

const Product = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const selector = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addCart = (product) => {
    dispatch(addItem({ ...product }));
  };

  return (
    <div>
      {product && (
        <section className="py-16 px-8">
          <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
            <img
              src={product.thumbnail}
              alt="thumbnail"
              className="h-[36rem] object-contain rounded-xl"
            />
            <div>
              <Typography className="mb-2" variant="h3">
                {product.title}
              </Typography>
              <Typography className="mb-4" color="gray">
                {product.brand || "No Brand"}
              </Typography>
              <Typography variant="h5">$1,490</Typography>
              <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
                {product.description}
              </Typography>
              <div className="my-8 flex items-center gap-2">
                <Rating
                  readonly
                  value={Math.round(product.rating)}
                  className="text-amber-500"
                />
                <Typography className="!text-sm font-bold !text-gray-700">
                  {product.rating}/5 ({product.reviews.length} reviews)
                </Typography>
              </div>
              <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
                <Button
                  color="gray"
                  className="w-52"
                  onClick={() => addCart(product)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;
