import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchInputValue, setSearchInputValue] = useState("");
  let navigate = useNavigate();

  const inputVal = (val) => {
    setSearchInputValue(val.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInputValue}`);

    setSearchInputValue("")
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handelSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={searchInputValue}
        onChange={(val) => inputVal(val)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
