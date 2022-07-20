import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FilterDrowdowns = ({ data, setTitle, cat, filter, setFilter }) => {
  const [value, setValue] = useState(filter ? "All Products" : data[0]);
  filter && setFilter(value);

  return (
    <Select
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        cat && setTitle(e.target.value);
      }}
      sx={{
        width: "100%",
        padding: "0%",
        backgroundColor: "white",
        fontSize: "0.9rem",
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #231955",
          borderRadius: "8px",
        },
      }}
    >
      {filter && <MenuItem value={"All Products"}>All Products</MenuItem>}
      {data.map((el) => (
        <MenuItem value={el}>{el}</MenuItem>
      ))}
    </Select>
  );
};

export default FilterDrowdowns;
