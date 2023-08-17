import { makeStyles } from "@material-ui/core";
const RegisterStyle = makeStyles((theme) => ({
  registerWrapper: {
    backgroundColor: "#F1F9FF",

    "& .head": {
      textAlign: "center",
      textDecoration:"underLine" ,
       },

    "& .container": {
      backgroundColor: "#D5F5FF",
      border: "5px solid #006685",
      borderRadius: "25px",
      width: "27%",
      padding: "0 50px 20px 50px",
      margin: "10px 30% 10px 30%",
    },
    "& .rbutton": {
         marginLeft:"105px",
         marginTop:"20px"
    },
    "& .hi": {
      width:"90px"
    },
    "& .table": {
      padding: "0 20% 0 20%",
    },
    "& .role": {
      width:"100%"
    },
  },
}));
export default RegisterStyle;
