import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
   display:'flex',
   height:'100vh',
   flexDirection:'column',
   backgroundColor:'#202124',
   minWidth:'800px',
   [theme.breakpoints.down('md')]: {
     height: '200vh',
   },
  },
}));

export default useStyles;
