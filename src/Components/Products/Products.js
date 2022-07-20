import React, { useEffect, useMemo, useState } from "react";
import filters from "../../filters.json";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import FilterDrowdowns from "./FilterDrowdowns";
import "./products.css";
import { useQuery } from "react-query";

const fetchProducts = async () => {
  return await axios.get("https://fakestoreapi.com/products", {
    withCredentials: false,
  });
};

const renderDetails = (data, text, flag) => {
  return flag
    ? data.data
        .filter((el) => el.category.includes(text))
        .map((el) => (
          <ProductCard
            key={el.id}
            img={el.image}
            title={el.title}
            price={el.price}
            rating={el.rating.rate}
            id={el.id}
          />
        ))
    : data.data
        .filter((el) => el.category === text)
        .map((el) => (
          <ProductCard
            key={el.id}
            img={el.image}
            title={el.title}
            price={el.price}
            rating={el.rating.rate}
            id={el.id}
          />
        ));
};

const Products = () => {
  const [title, setTitle] = useState(filters.categories[0]);
  const [filter, setFilter] = useState("All Products");
  const [sort, setSort] = useState(filters.sortBy[0]);

  const { data, isError, error, isLoading } = useQuery(
    "product-list",
    fetchProducts
  );

  return (
    <div className="products-root">
      <section className="filter-box">
        <div className="filter-sub-box">
          <p>Categories</p>
          <FilterDrowdowns
            data={filters.categories}
            setTitle={setTitle}
            cat={true}
            filter={false}
          />
        </div>
        {title === "Fashion" && (
          <div className="filter-sub-box">
            <p>Filter</p>
            <FilterDrowdowns
              data={filters.filters}
              cat={false}
              filter={true}
              setFilter={setFilter}
            />
          </div>
        )}

        <div className="filter-sub-box">
          <p>Sort by</p>
          <FilterDrowdowns data={filters.sortBy} cat={false} filter={false} />
        </div>
      </section>

      <h2 className="Category_title">
        {title === "Fashion" ? `${title}- ${filter}` : title}
      </h2>
      <section className="product-cards-holder">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : title === "Fashion" ? (
          filter === "All Products" ? (
            renderDetails(data, "clothing", true)
          ) : filter === "Men's Clothing" ? (
            renderDetails(data, "men's clothing", false)
          ) : (
            filter === "Women's Clothing" &&
            renderDetails(data, "women's clothing", false)
          )
        ) : title === "Jewellery" ? (
          renderDetails(data, "jewelery", false)
        ) : (
          title === "Electronics" && renderDetails(data, "electronics", false)
        )}
      </section>
    </div>
  );
};

export default Products;
