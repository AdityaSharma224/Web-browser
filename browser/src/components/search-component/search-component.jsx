import React, { useState, useEffect } from "react";
import { Box, Button, Stack } from "@mui/material";
import useStyles from "./search-styles";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import {
  InputAdornment,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const SearchBar = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
  };

  const handleSearch = (query) => {
    setSearchValue(query);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchValue);
    }
  };

  useEffect(() => {
    if (searchValue.length === 0) {
      setSearchResult([]);
      return;
    }
    const s = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(s);
  }, [searchValue]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.google.com/complete/search?client=firefox&q=" + searchValue
    );
    const json = await response.json();
    setSearchResult(json[1]);
  };

  return (
    <Stack width={"auto"} gap={2}>
      <TextField
        value={searchValue}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
        variant="outlined"
        fullWidth
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
        className={classes.searchBar}
        onKeyDown={handleKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon htmlColor="#7C7C7C" sx={{ zIndex: 1 }} />
            </InputAdornment>
          ),
          endAdornment: searchValue && (
            <InputAdornment position="end">
              <IconButton onClick={handleClear}>
                <CloseIcon htmlColor="#7C7C7C" sx={{ zIndex: 1 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {isResultVisible && searchResult.length > 1 && (
        <List sx={{ bgcolor: "#303134", borderRadius: "12px" }}>
          {searchResult.length > 1 &&
            isResultVisible &&
            searchResult.slice(0, 6).map((result, index) => (
              <ListItem
                key={index}
                button
                sx={{ color: "#fff" }}
                onMouseDown={() => handleSearch(result)}
              >
                <ListItemText primary={result} color="#fff" />
              </ListItem>
            ))}
        </List>
      )}
      <Stack alignSelf={"center"}>
        <Button
          variant="contained"
          onMouseDown={() => handleSearch(searchValue)}
          sx={{ bgcolor: "#303134", textTransform: "none" }}
        >
          {"Google Search"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default SearchBar;
