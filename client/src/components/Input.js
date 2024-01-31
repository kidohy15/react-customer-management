import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchInput = ({searchKeyword, setSearchKeyword}) => {
  // const [searchKeyword, setSearchKeyword] = useState("");

  const handleValueChange = (e) => {
    // console.log("Input Value:", e.target.value);
    setSearchKeyword(e.target.value);
  };

  return (
    <StyledInputBase
      placeholder="검색하기"
      inputProps={{ "aria-label": "search" }}
      name="searchKeyword"
      value={searchKeyword}
      onChange={handleValueChange}
    />
  );
};

export default SearchInput;
