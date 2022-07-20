import React from "react";
import "./app.css";
const NavDrawer = () => {
  return (
    <>
      <div className="app-logo">
        <p>
          <span>
            <i class="fas fa-store"></i>
          </span>
          FakeShop
        </p>
      </div>
      <div className="navbar-buttons-section">
        <p>
          <span>
            <i class="fas fa-home"></i>
          </span>
          Home
        </p>
        <p>
          <span>
            <i class="fas fa-shopping-basket"></i>
          </span>
          Categories
        </p>
        <p>
          <span>
            <i class="fas fa-wallet"></i>
          </span>
          Wallet
        </p>
        <p>
          <span>
            <i class="fas fa-shopping-cart"></i>
          </span>
          Cart
        </p>
        <p>
          <span>
            <i class="fas fa-user"></i>
          </span>
          User Profile
        </p>
        <p>
          <span>
            <i class="fas fa-cog"></i>
          </span>
          Settings
        </p>
      </div>
      <p className="logout">
        <span>
          <i class="fas fa-sign-out-alt"></i>
        </span>
        Logout
      </p>
    </>
  );
};

export default NavDrawer;
