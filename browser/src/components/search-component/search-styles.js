import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
  },
  searchBar: {
    height: "50px",
    border: "1px solid #303134",
    borderRadius: "50px",
    backgroundColor: "#202124",
    '&:hover': {
      backgroundColor: '#303134',
    },
    "&:hover .MuiOutlinedInput-root fieldset": {
      borderColor: "#303134",
      color: '#fff',
    },
    "& .MuiOutlinedInput-root": {
      height: "50px",
      color: '#fff',
      width: '600px',
      borderRadius: "50px",
      "& fieldset": {
        borderColor: "#303134",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#303134",
      },
      [theme.breakpoints.down('md')]: {
        width: '400px',
      },
    },
  },
}));

export default useStyles;
