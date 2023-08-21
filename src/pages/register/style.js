import { makeStyles } from "@material-ui/core";
import background from "../../assets/images/download.jpeg";
const RegisterStyle = makeStyles((theme) => ({
  registerWrapper: {
    backgroundColor: "#F1F9FF",

    "& .head": {
      textAlign: "center",
      textDecoration: "underLine",
    },
    "& .main": {
      padding: "30px 20px 90px 20px ",
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    "& .container": {
      border: "3px solid #006685",
      borderRadius: "25px",
      width: "27%",
      padding: "0 50px 20px 50px",
      margin: "10px 30% 10px 50%",
    },
    "& .dropdown-wrapper": {
      width:"140px",
    },
    "& .rbutton": {
      marginLeft: "105px",
      marginTop: "20px",
    },
    "& .hi": {
      width: "90px",
    },
    "& .table": {
      padding: "0 20% 0 20%",
    },
    "& .role": {
      width: "100%",
    },
  },
}));
export default RegisterStyle;
