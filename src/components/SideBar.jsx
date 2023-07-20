import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import React from "react";

function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category.name)}
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#fc1503",
              color: "#fff",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "#fff" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
                whiteSpace: "nowrap",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default SideBar;
