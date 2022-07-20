import React from "react";
import { Tooltip, IconButton, Icon } from "@mui/material";

const Appbar = () => {
  return (
    <>
      <div className="seaech-bar">
        <input placeholder="search products" />
        <i class="fas fa-search"></i>
      </div>
      <div className="appbar-icons">
        <Tooltip title={"My Wallet"}>
          <IconButton>
            <i class="fas fa-wallet"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title={"My Cart"}>
          <IconButton>
            <i class="fas fa-shopping-cart"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title={"My Account"}>
          <IconButton>
            <i class="fas fa-user"></i>
          </IconButton>
        </Tooltip>
        <IconButton
          sx={{
            display: "none",
            ["@media (max-width:720px)"]: {
              display: "block",
            },
          }}
        >
          <i class="fas fa-bars"></i>
        </IconButton>
      </div>
    </>
  );
};

export default Appbar;
