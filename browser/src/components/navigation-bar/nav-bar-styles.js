import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
   wrapper:{
    height:'80px',
    display:'flex',
    alignItems:'center',
    boxSizing:'border-box',
    padding:'6px',
   },
   container:{
      minWidth:'auto',
      height:'60px',
      width:'100vw',
      backgroundColor:'#202124',
   },
   itemsWrapper:{
      width:'100%',
      alignSelf:'flex-end',
   }
});

export default useStyles;
