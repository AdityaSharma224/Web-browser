import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useStyles from "./nav-bar-styles";

const Navbar = () => {
  const classes = useStyles();

  const handleOpenEmail = () => {
    window.open("https://mail.google.com/mail/u/0/?ogbl#inbox", "_blank");
  };
  return (
    <Box className={classes.wrapper}>
      <Stack height={"auto"} width={"100%"} alignItems={"end"}>
        <Stack alignItems={"center"} flexDirection={"row"} gap={"10px"}>
          <Typography
            color="#fff"
            variant="body1"
            onClick={handleOpenEmail}
            sx={{ cursor: "pointer" }}
          >
            {"Gmail"}
          </Typography>
          <IconButton sx={{ backgroundColor: "#" }}>
            <AppsIcon htmlColor="#fff" fontSize="large" />
          </IconButton>
          <IconButton>
            <AccountCircleIcon htmlColor="#fff" fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
