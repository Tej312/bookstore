import { makeStyles } from "@material-ui/core";
import background from "../../assets/images/download.jpeg"
const LoginStyle = makeStyles((theme) => ({
  loginWrapper: {
    backgroundColor: "#F1F9FF",
    
    "& .head": {
      textAlign: "center",
      textDecoration: "underLine",
    },
    "& .main": {
      padding:"30px 20px 90px 20px ",
      backgroundImage: `url(${background})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"contain",
        },
    "& .container": {
      border: "3px solid #006685",
      // color:"white",
      borderRadius: "25px",
      width: "27%",
      padding: "50px 50px 50px 50px",
      margin: "20px 30% 10px 50%",
    },
    "& .form-col": {
      width:"180px"
    },
    "& .button": {
      margin: "20px 10px 10px ",
      display: "block",
      width: "100%",
    },
    "& .table": {
      padding: "0 20% 0 20%",
    },
  },
}));
export default LoginStyle;
