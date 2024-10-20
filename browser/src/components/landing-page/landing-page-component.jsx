import React from "react";
import { Box, Stack } from "@mui/material";
import useStyles from "./landing-page-styles";
import CTA from "../../assets/cta.gif";
import Navbar from "../navigation-bar/nav-bar-component";
import SearchBar from "../search-component/search-component";

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Navbar />
      <Stack
        gap={4}
        padding={"20px"}
        height={"100%"}
        width={"100%"}
        alignItems={"center"}
        marginTop={20}
      >
        <Stack
          component={"img"}
          src={CTA}
          height={"200px"}
          width={"500px"}
          minWidth={"300px"}
        />
        <SearchBar />
      </Stack>
    </Box>
  );
};

export default LandingPage;
