import React, { useEffect, useState } from "react";
import MyCard from "../components/MyCard";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducers/CartSlice";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data.products);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="flex flex-wrap justify-around">
      {loading && <Spinner className="h-12 mt-10 w-12" />}
      {error && (
        <h2 className="text-medium text-2xl text-center">
          Error fetching data
        </h2>
      )}
      {data &&
        data.map((product) => {
          return (
            <MyCard
              key={product.id}
              id={product.id}
              src={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
              fnc={() => addToCart(product)}
            />
          );
        })}
    </div>
  );
};

export default Home;
