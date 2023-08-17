import { makeStyles } from "@material-ui/core";
const LoginStyle = makeStyles((theme) => ({
  loginWrapper: {
    backgroundColor: "#F1F9FF",

    "& .head": {
      textAlign: "center",
      textDecoration: "underLine",
    },
    "& .container": {
      backgroundColor: "#D5F5FF",
      border: "5px solid #006685",
      borderRadius: "25px",
      width: "27%",
      padding: "50px 50px 50px 50px",
      margin: "10px 30% 10px 30%",
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
