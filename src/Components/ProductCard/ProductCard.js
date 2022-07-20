import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Rating } from "@mui/material";
import "./productcard.css";
const ProductCard = ({ title, price, rating, img, id }) => {
  const [rate, setRate] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setRate(rating);
  }, [rating]);

  function goTo(e) {
    e.preventDefault();
    navigate(`/products/${id}`);
  }

  return (
    <div className="product-card-root" onClick={(e) => goTo(e)}>
      <img alt="card" src={img} />
      <IconButton
        className="card-cart"
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          color: "#231955",
          fontSize: "1rem",
        }}
      >
        <i class="fas fa-shopping-cart"></i>
      </IconButton>
      <div className="card-cover">
        <div>
          <p className="pc-title">{title}</p>
          <Rating
            value={rate}
            precision={0.5}
            readOnly
            sx={{ fontSize: "0.9rem" }}
          />
        </div>
        <p>&#8377;{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
