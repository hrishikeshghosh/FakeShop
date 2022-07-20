import React, { useCallback, useEffect, useState } from "react";
import { IconButton, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import $ from "jquery";
import { useQuery } from "react-query";
import axios from "axios";
import "./eachProduct.css";

const fetchProduct = async (id) => {
  return await axios.get(`https://fakestoreapi.com/products/${id}`, {
    withCredentials: false,
  });
};

const EachProduct = () => {
  const { id } = useParams();
  const [quant, setQuant] = useState(1);
  const [size, setSize] = useState(0);
  const { data, isLoading, isError, error } = useQuery("fetch-each", () =>
    fetchProduct(id)
  );

  useEffect(() => {
    if (quant < 1) setQuant(1);
  }, [quant]);

  if (isLoading) return <h1>Loading...</h1>;
  else
    return (
      <div className="each-product-root">
        <section className="product-display">
          <div className="product-image">
            <img src={data.data.image} alt={"product"} />
          </div>
          <div className="product-details">
            <h2>{data.data.title}</h2>
            <div className="rating-box">
              <Rating
                value={data.data.rating.rate}
                precision={0.5}
                readOnly
                sx={{ fontSize: "1rem" }}
              />
              <div className="v-border"></div>
              <p>
                <span>{data.data.rating.count} </span>
                Ratings
              </p>
            </div>
            <div className="h-border"></div>
            <p className="product-price">&#8377; {data.data.price}</p>
            <p className="static-texts">inclusive all taxes</p>
            <div className="size-box">
              <p className="select-size">Select Size</p>
              <div className="sizes-chart">
                <p
                  className={size === 0 ? "selected" : "unselected"}
                  onClick={(e) => setSize(0)}
                >
                  XS
                </p>
                <p
                  className={size === 1 ? "selected" : "unselected"}
                  onClick={(e) => setSize(1)}
                >
                  S
                </p>
                <p
                  className={size === 2 ? "selected" : "unselected"}
                  onClick={(e) => setSize(2)}
                >
                  M
                </p>
                <p
                  className={size === 3 ? "selected" : "unselected"}
                  onClick={(e) => setSize(3)}
                >
                  L
                </p>
              </div>
            </div>
            <div className="quantity-counter-box">
              <p className="quantity">Quantity: </p>
              <button onClick={(e) => setQuant((count) => count - 1)}>-</button>
              <p className="Quant-count">{quant}</p>
              <button onClick={(e) => setQuant((count) => count + 1)}>+</button>
            </div>
            <div className="button-section">
              <button className="add-c">Add to Cart</button>
              <button className="b-n">Buy now</button>
            </div>
            <div className="h-border"></div>
            <h2>Description</h2>
            <p className="prod-desc">{data.data.description}</p>
          </div>
        </section>
      </div>
    );
};

export default EachProduct;
